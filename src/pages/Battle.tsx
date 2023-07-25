import React, { useState } from "react";
import { Center, Button, Text, Box, Spacer, Flex, Image } from "@chakra-ui/react";
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
import { Link } from "react-router-dom";
import UserCharacter from "../components/UserCharacter";
import { faceVariants } from "../components/AssetVariants";

function Battle() {
  const theme = useTheme();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentLineNumber, setCurrentLineNumber] = useState(1);

  const openModalForMatch1 = () => {
    setCurrentLineNumber(1);
    onOpen();
  };
  const openModalForMatch2 = () => {
    setCurrentLineNumber(2);
    onOpen();
  };
  const openModalForMatch3 = () => {
    setCurrentLineNumber(3);
    onOpen();
  };
  const openModalForMatch4 = () => {
    setCurrentLineNumber(4);
    onOpen();
  };
  const openModalForMatch5 = () => {
    setCurrentLineNumber(5);
    onOpen();
  };
  const openModalForMatch6 = () => {
    setCurrentLineNumber(6);
    onOpen();
  };

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
              onClick={openModalForMatch1}
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
              onClick={openModalForMatch2}
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
              onClick={openModalForMatch3}
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
              onClick={openModalForMatch4}
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
              onClick={openModalForMatch5}
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
              onClick={openModalForMatch6}
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
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader style={{ fontFamily: "Font-Title-Light" }}>
              {currentLineNumber}호선 배틀
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center w="100%" marginRight={5}>
                <Flex direction="column" gap={3} w="100%">
                  <Flex
                    bg={theme.colors.ziha_charcoal_gray}
                    w="100%"
                    h="120px"
                    borderRadius="lg"
                    align="center"
                    justify="center"
                  >
                    {/* <Text
                      color="white"
                      fontSize="lg"
                      style={{ fontFamily: "Font-Content" }}
                    >
                      나
                    </Text> */}
                    <UserCharacter 
                      usage={'profile'} 
                      selectedHat={null} 
                      selectedAcc={null}
                      selectedFace={faceVariants[0]}
                      selectedClothes={null}
                      selectedShoe={null}
                    />     {/* selected stuffs are null for now!! */}
                  </Flex>
                  <Flex
                    bg={theme.colors.ziha_charcoal_gray}
                    w="100%"
                    h="120px"
                    borderRadius="lg"
                    align="center"
                    justify="center"
                  >
                    <Text
                      color="white"
                      fontSize="lg"
                      style={{ fontFamily: "Font-Content" }}
                    >
                      매칭 상대 기다리는 중
                    </Text>
                  </Flex>
                </Flex>
              </Center>
            </ModalBody>
            <ModalFooter
              style={{ display: "flex", justifyContent: 'end', gap: '8px' }}
            >
              <Button onClick={onClose}>취소하기</Button>
              <Button as={Link} to="/battle-ground" bg='ziha_green_gray' color='ziha_charcoal' >
                배틀 시작하기
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Layout>
  );
}

export default Battle;
