import React, { useEffect, useState } from "react";
import { Center, Button, Text, Box, Spacer, Flex, Image, Spinner } from "@chakra-ui/react";
import Layout from "../components/layout";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { useTheme } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import UserCharacter from "../components/UserCharacter";
import { accVariants, clothesVariants, faceVariants, hatVariants, shoeVariants } from "../components/AssetVariants";
import { User, useUserContext } from '../context/UserContext';
import { Socket, io } from 'socket.io-client';
import { API_URL } from '../api';
import { useSocketContext } from '../context/SocketContext';

function Battle() {
  const theme = useTheme();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [currentLineNumber, setCurrentLineNumber] = useState(1);
  const [gameId, setGameId] = useState(-1);
  const [oppUser, setOppUser] = useState<User | null>(null);
  const { socket, setSocket } = useSocketContext();
  const { user, setUser } = useUserContext();
  const [waiting, setWaiting] = useState(false);

  const socketDisconnect = () => {
    if (socket !== null) {
      socket.disconnect();
      setSocket(null);
    }
    onClose();
  };

  const openModalAndSocketSetup = (num: number) => {
    const newSocket = io(API_URL+"/game", {
      query: { userId: user.id, subwayId: num },
    });
    if (newSocket === null) {
      console.log('socket connection failed');
      return;
    }
    console.log('socket connected', newSocket);
    setSocket(newSocket);
    setCurrentLineNumber(num);
    onOpen();
    (newSocket as Socket).on('game-start', (data) => {
      console.log(data);
      console.log('game started');
      setGameId(data.gameId);
      setOppUser(data.opp);
    });
    (newSocket as Socket).on('game-waiting', () => {
      setWaiting(true);
      console.log('game waiting');
    });
    (newSocket as Socket).on('game-over', () => {
      console.log('game over');
      socketDisconnect();
      navigate("/game-over", {state: {win: false}});
    });
    (newSocket as Socket).on('game-win', () => {
      console.log('game win');
      socketDisconnect();
      navigate("/game-over", {state: {win: true}});
    });
  };

  useEffect(() => {
    if (oppUser !== null && gameId !== -1) {
      setTimeout(() => navigate("/battle-ground", {
        state: {
          gameId: gameId,
          hat: oppUser?.hatVariants,
          acc: oppUser?.accVariants,
          face: oppUser?.faceVariants,
          clothes: oppUser?.clothesVariants,
          shoe: oppUser?.shoeVariants,
          username: oppUser?.username,
          name: '상대 유령이',
          isMyTurn: waiting,
        }
      }), 3000);
    }
   }, [oppUser, gameId]);

  return (
    <Layout>
      <Flex direction="column" w="100%" flex="1" overflowY="auto">
        <Box w="100%">
          <Text
            w="fit-content"
            p={3}
            m={2}
            fontSize="2xl"
            style={{ fontFamily: "Font-Title" }}
          >
            지하배틀
          </Text>
        </Box>
        <Flex direction="column" w="100%" p={2} gap={2} paddingTop={0} >
          <Flex direction="row" w="100%" align='center' >
            <Spacer />
            <Flex
              w='fit-content'
              h='fit-content'
              p={1}
              bg='transparent'
              border={`2px solid ${theme.colors.line_1_color}`}
              borderRadius='1em'
              boxShadow='0px 2px 6px rgba(0, 0, 0, 0.2)'
              onClick={()=>openModalAndSocketSetup(1)}
            >
              <Text
                p={2}
                alignSelf="center"
                style={{ fontFamily: "Font-Content" }}
              >
                1호선 탑승하기
              </Text>
            </Flex>
            <Spacer />
            <Image src={require('../assets/trains/train_1.png')} w='250px' h='100px' justifySelf='right' />
          </Flex>
          <Flex direction="row" w="100%" align='center' >
            <Image src={require('../assets/trains/train_2_flip.png')} w='250px' h='100px' justifySelf='right' />
            <Spacer />
            <Flex
              w='fit-content'
              h='fit-content'
              p={1}
              bg='transparent'
              border={`2px solid ${theme.colors.line_2_color}`}
              borderRadius='1em'
              boxShadow='0px 2px 6px rgba(0, 0, 0, 0.2)'
              onClick={()=>openModalAndSocketSetup(2)}
            >
              <Text
                p={2}
                alignSelf="center"
                style={{ fontFamily: "Font-Content" }}
              >
                2호선 탑승하기
              </Text>
            </Flex>
            <Spacer />
          </Flex>
          <Flex direction="row" w="100%" align='center' >
            <Spacer />
            <Flex
              w='fit-content'
              h='fit-content'
              p={1}
              bg='transparent'
              border={`2px solid ${theme.colors.line_3_color}`}
              borderRadius='1em'
              boxShadow='0px 2px 6px rgba(0, 0, 0, 0.2)'
              onClick={()=>openModalAndSocketSetup(3)}
            >
              <Text
                p={2}
                alignSelf="center"
                style={{ fontFamily: "Font-Content" }}
              >
                3호선 탑승하기
              </Text>
            </Flex>
            <Spacer />
            <Image src={require('../assets/trains/train_3.png')} w='250px' h='100px' justifySelf='right' />
          </Flex>
          <Flex direction="row" w="100%" align='center' >
            <Image src={require('../assets/trains/train_4_flip.png')} w='250px' h='100px' justifySelf='right' />
            <Spacer />
            <Flex
              w='fit-content'
              h='fit-content'
              p={1}
              bg='transparent'
              border={`2px solid ${theme.colors.line_4_color}`}
              borderRadius='1em'
              boxShadow='0px 2px 6px rgba(0, 0, 0, 0.2)'
              onClick={()=>openModalAndSocketSetup(4)}
            >
              <Text
                p={2}
                alignSelf="center"
                style={{ fontFamily: "Font-Content" }}
              >
                4호선 탑승하기
              </Text>
            </Flex>
            <Spacer />
          </Flex>
          <Flex direction="row" w="100%" align='center' >
            <Spacer />
            <Flex
              w='fit-content'
              h='fit-content'
              p={1}
              bg='transparent'
              border={`2px solid ${theme.colors.line_5_color}`}
              borderRadius='1em'
              boxShadow='0px 2px 6px rgba(0, 0, 0, 0.2)'
              onClick={()=>openModalAndSocketSetup(5)}
            >
              <Text
                p={2}
                alignSelf="center"
                style={{ fontFamily: "Font-Content" }}
              >
                5호선 탑승하기
              </Text>
            </Flex>
            <Spacer />
            <Image src={require('../assets/trains/train_5.png')} w='250px' h='100px' justifySelf='right' />
          </Flex>
          <Flex direction="row" w="100%" align='center'>
            <Image src={require('../assets/trains/train_6_flip.png')} w='250px' h='100px' justifySelf='right' />
            <Spacer />
            <Flex
              w='fit-content'
              h='fit-content'
              p={1}
              bg='transparent'
              border={`2px solid ${theme.colors.line_6_color}`}
              borderRadius='1em'
              boxShadow='0px 2px 6px rgba(0, 0, 0, 0.2)'
              onClick={()=>openModalAndSocketSetup(6)}
            >
              <Text
                p={2}
                alignSelf="center"
                style={{ fontFamily: "Font-Content" }}
              >
                6호선 탑승하기
              </Text>
            </Flex>
            <Spacer />
          </Flex>
        </Flex>
        <Modal
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
          size="sm"
          isCentered
        >
          <ModalOverlay />
          <ModalContent
          >
            <ModalHeader style={{ fontFamily: "Font-Title-Light" }}>
              {currentLineNumber}호선 배틀
            </ModalHeader>
            <ModalCloseButton onClick={socketDisconnect}/>
            <ModalBody>
              <Center w="100%" marginRight={5}>
                <Flex direction="column" gap={3} w="100%">
                  <Flex
                    bg={theme.colors.ziha_charcoal}
                    w="100%"
                    h="120px"
                    borderRadius="lg"
                    align="center"
                    justify="center"
                  >
                    <UserCharacter
                      usage={'profile'}
                      selectedHat={user.hatVariants !== -1 ? hatVariants[user.hatVariants] : null}
                      selectedAcc={user.accVariants !== -1 ? accVariants[user.accVariants] : null}
                      selectedFace={user.faceVariants!== -1 ?  faceVariants[user.faceVariants] : faceVariants[0]}
                      selectedClothes={user.clothesVariants !== -1 ? clothesVariants[user.clothesVariants] : null}
                      selectedShoe={user.shoeVariants !== -1 ?  shoeVariants[user.shoeVariants] : null}
                    />     {/* selected stuffs are null for now!! */}
                  </Flex>
                  <Flex
                    bg={theme.colors.ziha_charcoal}
                    w="100%"
                    h="120px"
                    borderRadius="lg"
                    align="center"
                    justify="center"
                  >{ oppUser === null ?
                    <Spinner
                      color='ziha_green'
                      emptyColor='gray.500'
                      thickness='4px'
                      size='lg'
                      speed='2.5s'
                    />
                      :
                    <UserCharacter
                      usage={'profile'}
                      selectedHat={oppUser.hatVariants !== -1 ? hatVariants[oppUser.hatVariants] : null}
                      selectedAcc={oppUser.accVariants !== -1 ? accVariants[oppUser.accVariants] : null}
                      selectedFace={oppUser.faceVariants!== -1 ?  faceVariants[oppUser.faceVariants] : faceVariants[0]}
                      selectedClothes={oppUser.clothesVariants !== -1 ? clothesVariants[oppUser.clothesVariants] : null}
                      selectedShoe={oppUser.shoeVariants !== -1 ?  shoeVariants[oppUser.shoeVariants] : null}
                    />
                    }
                  </Flex>
                </Flex>
              </Center>
            </ModalBody>
            <ModalFooter
              style={{ display: "flex", justifyContent: 'end', gap: '8px' }}
            >
              <Button onClick={socketDisconnect}>취소하기</Button>
              {/* <Button as={Link} to="/battle-ground" bg='ziha_green_gray' color='ziha_charcoal' >
                배틀 시작하기
              </Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Layout>
  );
}

export default Battle;
