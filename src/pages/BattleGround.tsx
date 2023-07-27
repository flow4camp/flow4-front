import {
  Image,
  Text,
  Box,
  Flex,
  Spacer,
  useTheme,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import UserCharacter from "../components/UserCharacter";
import { storeFaceVariants } from "../components/StoreVariants";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './BattleGround.scss';
import { accVariants, clothesVariants, hatVariants, shoeVariants } from '../components/AssetVariants';
import { useUserContext } from '../context/UserContext';
import { useSocketContext } from '../context/SocketContext';

function BattleGround() {
  const location = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isExiting, setIsExiting] = useState(false);
  const { user, setUser } = useUserContext();
  const { socket, setSocket } = useSocketContext();

  useEffect(() => {
    console.log(location.state);
    if (socket) {
      socket.on('game-match-win', (data: any) => {
        console.log('game-match-win: ', data);
        attackSuccess();
        updateEnemyHp(data.oppHp);  // hp 바꾸기
        updateMyHp(data.myHp);      // hp 바꾸기
        setCurrentEnemyCardIdx(data.select); // 카드 바꾸기
        setMyTurnToAttack((turn: boolean) => (!turn));
        console.log(myTurnToAttack);
      });
      socket.on('game-match-lose', (data: any) => {
        console.log('game-match-lose: ', data);
        defendFail();
        updateEnemyHp(data.oppHp);  // hp 바꾸기
        updateMyHp(data.myHp);      // hp 바꾸기
        setCurrentEnemyCardIdx(data.select);
        setMyTurnToAttack((turn: boolean) => (!turn));
        console.log(myTurnToAttack);
      });
      socket.on('game-mismatch-win', (data: any) => {
        console.log('game-mismatch-win: ', data);
        defendSuccess();
        updateEnemyHp(data.oppHp);  // hp 바꾸기
        updateMyHp(data.myHp);      // hp 바꾸기
        setCurrentEnemyCardIdx(data.select);
        setMyTurnToAttack((turn: boolean) => (!turn));
        console.log(myTurnToAttack);
      });
      socket.on('game-mismatch-lose', (data: any) => {
        console.log('game-mismatch-lose: ', data);
        attackFail();
        updateEnemyHp(data.oppHp);  // hp 바꾸기
        updateMyHp(data.myHp);      // hp 바꾸기
        setCurrentEnemyCardIdx(data.select);
        setMyTurnToAttack((turn: boolean) => (!turn));
        console.log(myTurnToAttack);
      });
    }
  }, [location.state]);

  // 상대 카드 이미지 src : 0 이면 보라다운, 1 이면 초록업
  const enemyCards = ['/icons/purple_down.png', '/icons/green_up.png', '/icons/question.png'];
  const [currentEnemyCardIdx, setCurrentEnemyCardIdx] = useState(2);

  // 상대 state 관리
  // 공격자 수비자 포지션
  const [myTurnToAttack, setMyTurnToAttack] = useState(location.state ? location.state.isMyTurn : false);

  // 공격 혹은 방어 시 상대 face 변화
  const [currentEnemySelectedFace, setCurrentEnemySelectedFace] = useState(storeFaceVariants[0]);
  // 공격 혹은 방어 시 상대 animation 변화
  const [currentEnemyUsageProp, setCurrentEnemyUsageProp] = useState('');
  // 공격 혹은 방어 시 상대 Hp 바 변화
  const enemyHpRef = useRef<number | null>(null); // Initialize with null
  const updateEnemyHp = (newValue: number) => {
    enemyHpRef.current = newValue;
  }
  const enemyHp = enemyHpRef.current ? enemyHpRef.current : 100;  // 지정된 값이 없어 null 이면 100 부여 (initial)
  // 공격 시 상대 critical 문구 visibility 변화
  const [enemyCriticalText, setEnemyCriticalText] = useState(false);
  // 공격 시 상대 miss 문구 visibility 변화
  const [enemyMissText, setEnemyMissText] = useState(false);

  // 내 state 관리
  // 공격 혹은 방어 시 내 face 변화
  const [currentMySelectedFace, setCurrentMySelectedFace] = useState(storeFaceVariants[0]);
  // 공격 혹은 방어 시 내 animation 변화
  const [currentMyUsageProp, setCurrentMyUsageProp] = useState('');
  // 공격 혹은 방어 시 내 Hp 바 변화
  const myHpRef = useRef<number | null>(null); // Initialize with null
  const updateMyHp = (newValue: number) => {
    myHpRef.current = newValue;
  }
  const myHp = myHpRef.current ? myHpRef.current : 100;   // 지정된 값이 없어 null 이면 100 부여 (initial)
  // 공격 시 내 critical 문구 visibility 변화
  const [myCriticalText, setMyCriticalText] = useState(false);
  // 방어 시 내 miss 문구 visibility 변화
  const [myMissText, setMyMissText] = useState(false);

  // 공격 도중 공격 버튼 clickability
  const [isAttackClickable, setIsAttackClickable] = useState(true);
  // 방어 도중 방어 버튼 clickability
  const [isDefendClickable, setIsDefendClickable] = useState(true);

  function handleExitButtonClick() {
    onOpen();
  }
  function handleContinue() {
    setIsExiting(false);
    onClose();
  }

  function handleExit() {
    setIsExiting(true);
    onClose();
  }

  // 공격이 성공했을 시
  function attackSuccess() {
    // 공격 버튼 안 눌림
    setIsAttackClickable(false);
    // 방어 버튼 안 눌림
    setIsDefendClickable(false);
    // 우는 표정
    setCurrentEnemySelectedFace(storeFaceVariants[2]);
    // 우는 모션
    setCurrentEnemyUsageProp('attacked');
    // critical text
    setEnemyCriticalText(true);

    // 원상복구
    setTimeout(() => {
      setIsAttackClickable(true);
      setIsDefendClickable(true);
      setCurrentEnemySelectedFace(storeFaceVariants[0]);
      setCurrentEnemyUsageProp('');
      setEnemyCriticalText(false);
      setCurrentEnemyCardIdx(2);
    }, 2000);
  }

  // 공격이 실패했을 시
  function attackFail() {
    // 공격 버튼 안 눌림
    setIsAttackClickable(false);
    // 방어 버튼 안 눌림
    setIsDefendClickable(false);
    // 다행인 표정
    setCurrentEnemySelectedFace(storeFaceVariants[7]);
    // 피하는 모션
    setCurrentEnemyUsageProp('defended');
    // miss text
    setEnemyMissText(true);

    // 원상복구
    setTimeout(() => {
      setIsAttackClickable(true);
      setIsDefendClickable(true);
      setCurrentEnemySelectedFace(storeFaceVariants[0]);
      setCurrentEnemyUsageProp('');
      setEnemyMissText(false);
      setCurrentEnemyCardIdx(2);
    }, 2000);
  }

  // 공격 버튼 누르기 이후 handle
  function handleAttackClick() {
    socket.emit('game-select', location.state ? location.state.gameId : 0 , 1);
  }

  // 방어가 성공했을 시
  function defendSuccess() {
    // 방어 버튼 안 눌림
    setIsDefendClickable(false);
    // 공격 버튼 안 눌림
    setIsAttackClickable(false);
    // 메롱 표정
    setCurrentMySelectedFace(storeFaceVariants[6]);
    // 우는 모션
    setCurrentMyUsageProp('defended');
    // miss text
    setMyMissText(true);

    // 원상복구
    setTimeout(() => {
      setIsDefendClickable(true);
      setIsAttackClickable(true);
      setCurrentMySelectedFace(storeFaceVariants[0]);
      setCurrentMyUsageProp('');
      setMyMissText(false);
      setCurrentEnemyCardIdx(2);
    }, 2000);
  }

  // 방어가 실패했을 시
  function defendFail() {
    // 방어 버튼 안 눌림
    setIsDefendClickable(false);
    // 공격 버튼 안 눌림
    setIsAttackClickable(false);
    // 아픈 표정
    setCurrentMySelectedFace(storeFaceVariants[5]);
    // 우는 모션
    setCurrentMyUsageProp('attacked');
    // critical text
    setMyCriticalText(true);

    // 원상복구
    setTimeout(() => {
      setIsDefendClickable(true);
      setIsAttackClickable(true);
      setCurrentMySelectedFace(storeFaceVariants[0]);
      setCurrentMyUsageProp('');
      setMyCriticalText(false);
      setCurrentEnemyCardIdx(2);
    }, 2000);
  }

  // 방어 버튼 누르기 이후 handle
  function handleDefendClick() {
    socket.emit('game-select', location.state ? location.state.gameId : 0 , 0);
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      style={{ backgroundColor: theme.colors.ziha_charcoal, height: "100vh" }}
    >
      <Box
        w="100%"
        style={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
        }}
      >
        <Text
          w="fit-content"
          p={3}
          m={2}
          fontSize="lg"
          style={{ fontFamily: "Font-Title-Light", color: "white" }}
          onClick={handleExitButtonClick}
        >
          나가기
        </Text>
        <Text
          w="fit-content"
          p={3}
          m={2}
          fontSize="lg"
          style={{ fontFamily: "Font-Title-Light", color: "white" }}
        >
          3:28
        </Text>
      </Box>
      {/* 두 캐릭터들 */}
      <Flex direction='column' w='100%' h='550px' gap='5%' marginTop='15%' >
        {/* 상대방 캐릭터 */}
        <Flex justify="center" align="center" h="40%" >
          {/* 상대방 캐릭터 info */}
          <Flex direction="column" style={{ marginTop: "40px" }} >
            <Flex direction='row' justify='space-between'>
              <Flex direction='column' position='relative'>
                <Text
                  fontSize="2xl"
                  style={{ fontFamily: "Font-Title", color: "white" }}
                >
                  { location.state ? location.state.name : 'User2' }
                </Text>
                {/* 상대방이 선택한 카드 공개 */}
                <Flex
                  // className={`enemy-card ${}`}
                  position='absolute'
                  alignSelf='center'
                  top='-80px'
                >
                  <Flex
                    p={2}
                    borderRadius='1em' bg='ziha_charcoal_gray'
                  >
                    <Image src={enemyCards[currentEnemyCardIdx]} w={14} h={14} />
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction='column' position='relative' >
                {/* 공격자 포지션 */}
                <Flex
                  className={`attack-position ${myTurnToAttack ? 'false' : 'true'}`}
                  position='absolute'
                  alignSelf='center'
                  align='center'
                  justify='center'
                  border={`1px solid ${theme.colors.ziha_purple_sharp}`}
                  borderRadius='0.8em'
                  w='fit-content'
                  p={1}
                  paddingLeft={2}
                  paddingRight={2}
                  m={1}
                  top={-5}
                >
                  <Text
                    fontSize='xx-small'
                    style={{ fontFamily: 'Font-Content' }}
                    color='ziha_purple_sharp'
                    w='fit-content'
                  >ATTACK</Text>
                </Flex>
                {/* 수비자 포지션 */}
                <Flex
                  className={`defend-position ${myTurnToAttack ? 'true' : 'false'}`}
                  position='absolute'
                  alignSelf='center'
                  align='center'
                  justify='center'
                  border={`1px solid ${theme.colors.ziha_green}`}
                  borderRadius='0.8em'
                  w='fit-content'
                  p={1}
                  paddingLeft={2}
                  paddingRight={2}
                  m={1}
                  top={-5}
                >
                  <Text
                    fontSize='xx-small'
                    style={{ fontFamily: 'Font-Content' }}
                    color='ziha_green'
                    w='fit-content'
                  >DEFEND</Text>
                </Flex>
                <Spacer />
                <Text style={{ fontFamily: "Font-Title-light", color: "white" }}>
                { location.state ? location.state.username : 'User2' }
                </Text>
              </Flex>
            </Flex>
            {/* hp 바 */}
            <Flex align="center" w="140px" justify="space-between" marginTop={2}>
              <Text style={{ fontFamily: "Font-Title-light", color: "white" }}>
                HP
              </Text>
              <Flex
                w="100px"
                h="10px"
                style={{ border: "2px solid white", borderRadius: "10px" }}
              >
                <Flex
                  w={`${enemyHp}%`}
                  h="100%"
                  style={{ backgroundColor: theme.colors.ziha_green }}
                ></Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex justify="center" align="center" position='relative'>
            <UserCharacter
              usage={currentEnemyUsageProp}
              selectedFace={currentEnemySelectedFace}
              selectedHat={ (location.state && location.state.hat !== -1) ? hatVariants[location.state.hat] : null}
              selectedAcc={(location.state && location.state.acc !== -1) ? accVariants[location.state.acc] : null}
              selectedClothes={(location.state && location.state.clothes !== -1) ? clothesVariants[location.state.clothes] : null}
              selectedShoe={(location.state && location.state.shoe !== -1) ? shoeVariants[location.state.shoe] : null}
            />
            <Box
              position='absolute'
              className={`critical-text ${enemyCriticalText ? 'visible' : ''} `}
              p={2}
              top={-3}
            >
              <Text fontSize='sm' style={{ fontFamily: 'Font-Title'}} color='ziha_purple_sharp'
              >CRITICAL</Text>
            </Box>
            <Box
              position='absolute'
              className={`miss-text ${enemyMissText ? 'visible' : ''} `}
              p={2}
              top={-3}
            >
              <Text fontSize='sm' style={{ fontFamily: 'Font-Title'}} color='ziha_green'
              >MISS</Text>
            </Box>
          </Flex>
        </Flex>
        {/* 내 캐릭터 */}
        <Flex justify="center" align="center" h="40%" >
          <Flex justify="center" align="center" position='relative' >
            <UserCharacter
              usage={currentMyUsageProp}
              selectedFace={currentMySelectedFace}
              selectedHat={user.hatVariants !== -1 ? hatVariants[user.hatVariants] : null}
              selectedAcc={user.accVariants !== -1 ? accVariants[user.accVariants] : null}
              selectedClothes={user.clothesVariants !== -1 ? clothesVariants[user.clothesVariants] : null}
              selectedShoe={user.shoeVariants !== -1 ?  shoeVariants[user.shoeVariants] : null}
            />
            <Box
              position='absolute'
              className={`critical-text ${myCriticalText ? 'visible' : ''} `}
              p={2}
              top={-3}
            >
              <Text fontSize='sm' style={{ fontFamily: 'Font-Title'}} color='ziha_purple_sharp'
              >CRITICAL</Text>
            </Box>
            <Box
              position='absolute'
              className={`miss-text ${myMissText ? 'visible' : ''} `}
              p={2}
              top={-3}
            >
              <Text fontSize='sm' style={{ fontFamily: 'Font-Title'}} color='ziha_green'
              >MISS</Text>
            </Box>
          </Flex>
          {/* 내 캐릭터 info */}
          <Flex direction="column" style={{ marginTop: "40px" }} >
            <Flex direction='row' justify='space-between'>
              <Text
                fontSize="2xl"
                style={{ fontFamily: "Font-Title", color: "white" }}
              >
              유령이
              </Text>
              <Flex direction='column' position='relative'>
                {/* 공격자 포지션 */}
                <Flex
                  className={`attack-position ${myTurnToAttack ? 'true' : 'false'}`}
                  position='absolute'
                  alignSelf='center'
                  align='center'
                  justify='center'
                  border={`1px solid ${theme.colors.ziha_purple_sharp}`}
                  borderRadius='0.8em'
                  w='fit-content'
                  p={1}
                  paddingLeft={2}
                  paddingRight={2}
                  m={1}
                  top={-5}
                >
                  <Text
                    fontSize='xx-small'
                    style={{ fontFamily: 'Font-Content' }}
                    color='ziha_purple_sharp'
                    w='fit-content'
                  >ATTACK</Text>
                </Flex>
                {/* 수비자 포지션 */}
                <Flex
                  className={`defend-position ${myTurnToAttack ? 'false' : 'true'}`}
                  position='absolute'
                  alignSelf='center'
                  align='center'
                  justify='center'
                  border={`1px solid ${theme.colors.ziha_green}`}
                  borderRadius='0.8em'
                  w='fit-content'
                  p={1}
                  paddingLeft={2}
                  paddingRight={2}
                  m={1}
                  top={-5}
                >
                  <Text
                    fontSize='xx-small'
                    style={{ fontFamily: 'Font-Content' }}
                    color='ziha_green'
                    w='fit-content'
                  >DEFEND</Text>
                </Flex>
                <Spacer />
                <Text style={{ fontFamily: "Font-Title-light", color: "white" }}>
                  { user.username }
                </Text>
              </Flex>
            </Flex>
            {/* hp 바 */}
            <Flex align="center" w="140px" justify="space-between" marginTop={2}>
              <Text style={{ fontFamily: "Font-Title-light", color: "white" }}>
                HP
              </Text>
              <Flex
                w="100px"
                h="10px"
                style={{ border: "2px solid white", borderRadius: "10px" }}
              >
                <Flex
                  w={`${myHp}%`}
                  h="100%"
                  style={{ backgroundColor: theme.colors.ziha_green }}
                ></Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="70vw" justify="space-between" position='absolute' bottom={10}>
        <Flex
          justify="center"
          align="center"
          direction="column"
          w="12vh"
          h="17vh"
          style={{ border: "2px solid white", borderRadius: "20px" }}
          _active={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          onClick={handleDefendClick}
          className={`defend-button ${isDefendClickable ? '' : 'no-click'}`}
        >
          <Image src="/icons/purple_down.png" w="70%" h="50%" />
          <Text
            style={{
              marginTop: "10px",
              fontFamily: "Font-Title",
              color: "white",
            }}
          >
            DOWN
          </Text>
        </Flex>
        <Flex
          justify="center"
          align="center"
          direction="column"
          w="12vh"
          h="17vh"
          style={{ border: "2px solid white", borderRadius: "20px" }}
          _active={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          onClick={handleAttackClick}
          className={`attack-button ${isAttackClickable ? '' : 'no-click'}`}
        >
          <Image src="/icons/green_up.png" w="70%" h="50%" />
          <Text
            style={{
              marginTop: "10px",
              fontFamily: "Font-Title",
              color: "white",
            }}
          >
            UP
          </Text>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size='sm' >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>정말 나가시겠습니까?</ModalHeader>
          <ModalBody>나가면 기력이 소진됩니다.</ModalBody>
          <ModalFooter>
            <Link to="/game-over" state={{win: false}}>
              <Button bg="gray" color='white' onClick={handleExit} style={{ fontFamily: 'Font-Content'}} >
                나가기
              </Button>
            </Link>
            <Box
              // Apply custom styles to the Box wrapping the ModalCloseButton
              style={{
                fontFamily: "Font-Content",
                fontSize: "xl",
                backgroundColor: theme.colors.ziha_green_gray,
                color: theme.colors.ziha_charcoal,
                padding: '9px',
                paddingLeft: '16px',
                paddingRight: '16px',
                borderRadius: "8px",
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
                cursor: "pointer", // Add a cursor pointer to indicate clickability
              }}
              onClick={handleContinue}
              // Apply other styles like padding, margin, etc., as needed
              ml={3}
            >
              계속하기
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default BattleGround;
