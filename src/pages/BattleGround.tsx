import {
  Image,
  Text,
  Box,
  Flex,
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
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './BattleGround.scss';

function BattleGround() {

  const theme = useTheme();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isExiting, setIsExiting] = useState(false);

  // 공격 혹은 방어 시 상대 face 변화
  const [currentSelectedFace, setCurrentSelectedFace] = useState(storeFaceVariants[0]);
  // 공격 혹은 방어 시 상대 animation 변화
  const [currentUsageProp, setCurrentUsageProp] = useState('');
  // 공격 시 상대 Hp 바 변화
  const [currentEnemyHP, setCurrentEnemyHP] = useState(100);
  // 공격 시 상대 critical 문구 visibility 변화
  const [enemyCriticalText, setEnemyCriticalText] = useState(false);
  
  // 공격 도중 공격 버튼 clickability
  const [isAttackClickable, setIsAttackClickable] = useState(true);

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

  function gameOver(win: boolean) {
    navigate('/game-over', { state: { win } });
  }

  function handleEnemyHP(current: number) {

    if (current === 10) {
      // 10 hp 남음, 게임 오버
      setCurrentEnemyHP(0);
      gameOver(true);

    } else {
      // 10 hp 감소
      setCurrentEnemyHP((current) => (current - 10));
    }

  }

  // 공격이 성공했을 시 
  function attackSuccess() {
    // 공격 버튼 안 눌림
    setIsAttackClickable(false);
    // 우는 표정
    setCurrentSelectedFace(storeFaceVariants[2]);
    // 우는 모션
    setCurrentUsageProp('attacked');
    // HP 감소 혹은 game over
    handleEnemyHP(currentEnemyHP);
    // critical text
    setEnemyCriticalText(true);

    // 원상복구
    setTimeout(() => {
      setIsAttackClickable(true);
      setCurrentSelectedFace(storeFaceVariants[0]);
      setCurrentUsageProp('');
      setEnemyCriticalText(false);
    }, 2000);
  }

  // 공격이 실패했을 시
  function attackFail() {

  }

  // 공격 버튼 누르기 이후 handle
  function handleAttackClick() {
    if (Math.random() > 0.6) {
      attackSuccess();
    } else {
      attackFail();
    }
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
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
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
      <Flex direction='column' w='100%' h='550px' gap='10%' marginTop={8} position='relative' >
        {/* 상대방 캐릭터 */}
        <Flex justify="center" align="center" h="40%" >
          <Flex direction="column" style={{ marginTop: "50px" }}>
            <Text
              fontSize="2xl"
              style={{ fontFamily: "Font-Title", color: "white" }}
            >
              귀신이
            </Text>
            <Text style={{ fontFamily: "Font-Title-light", color: "white" }}>
              User2
            </Text>
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
                  w={`${currentEnemyHP}%`}
                  h="100%"
                  style={{ backgroundColor: theme.colors.ziha_green }}
                ></Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex justify="center" align="center">
            <UserCharacter
              usage={currentUsageProp}
              selectedHat={null}
              selectedAcc={null}
              selectedFace={currentSelectedFace}
              selectedClothes={null}
              selectedShoe={null}
            />
            <Box 
              position='absolute' 
              className={`critical-text ${enemyCriticalText ? 'visible' : ''} `}
              p={1} 
              top={-3}
            >
              <Text fontSize='xs' style={{ fontFamily: 'Font-Title'}} color='ziha_green'
              >CRITICAL</Text>
            </Box>
          </Flex>
        </Flex>
        {/* 내 캐릭터 */}
        <Flex justify="center" align="center" h="40%" >
          <Flex justify="center" align="center">
            <UserCharacter
              usage={''}
              selectedHat={null}
              selectedAcc={null}
              selectedFace={storeFaceVariants[0]}
              selectedClothes={null}
              selectedShoe={null}
            />
          </Flex>
          <Flex direction="column" style={{ marginTop: "50px" }}>
            <Text
              fontSize="2xl"
              style={{ fontFamily: "Font-Title", color: "white" }}
            >
              유령이
            </Text>
            <Text style={{ fontFamily: "Font-Title-light", color: "white" }}>
              User2
            </Text>
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
                  w="80%"
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
        >
          <Image src="/icons/shield.png" w="70%" h="50%" />
          <Text
            style={{
              marginTop: "10px",
              fontFamily: "Font-Title-Light",
              color: "white",
            }}
          >
            방어하기
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
          <Image src="/icons/sword.png" w="70%" h="50%" />
          <Text
            style={{
              marginTop: "10px",
              fontFamily: "Font-Title-light",
              color: "white",
            }}
          >
            공격하기
          </Text>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size='sm' >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>정말 나가시겠습니까?</ModalHeader>
          <ModalBody>나가면 기력이 소진됩니다.</ModalBody>
          <ModalFooter>
            <Link to="/battle">
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
