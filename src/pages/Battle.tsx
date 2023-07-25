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
        <Flex direction="column" w="100%" p={2} gap={3} paddingTop={0} >
          <Flex direction="row" w="100%" onClick={openModalForMatch1}>
            <Spacer />
            <Text
              p={2}
              alignSelf="center"
              style={{ fontFamily: "Font-Content" }}
            >
              1호선
            </Text>
            <Spacer />
            <Image src={require('../assets/trains/train_1.png')} w='250px' h='100px' justifySelf='right' />
          </Flex>
          <Flex direction="row" w="100%" onClick={openModalForMatch2}>
            <Spacer />
            <Text
              p={2}
              alignSelf="center"
              style={{ fontFamily: "Font-Content" }}
            >
              2호선
            </Text>
            <Spacer />
            <Image src={require('../assets/trains/train_2.png')} w='250px' h='100px' justifySelf='right' />
          </Flex>
          <Flex direction="row" w="100%" onClick={openModalForMatch3}>
            <Spacer />
            <Text
              p={2}
              alignSelf="center"
              style={{ fontFamily: "Font-Content" }}
            >
              3호선
            </Text>
            <Spacer />
            <Image src={require('../assets/trains/train_3.png')} w='250px' h='100px' justifySelf='right' />
          </Flex>
          <Flex direction="row" w="100%" onClick={openModalForMatch4}>
            <Spacer />
            <Text
              p={2}
              alignSelf="center"
              style={{ fontFamily: "Font-Content" }}
            >
              4호선
            </Text>
            <Spacer />
            <Image src={require('../assets/trains/train_4.png')} w='250px' h='100px' justifySelf='right' />
          </Flex>
          <Flex direction="row" w="100%" onClick={openModalForMatch5}>
            <Spacer />
            <Text
              p={2}
              alignSelf="center"
              style={{ fontFamily: "Font-Content" }}
            >
              5호선
            </Text>
            <Spacer />
            <Image src={require('../assets/trains/train_5.png')} w='250px' h='100px' justifySelf='right' />
          </Flex>
          <Flex direction="row" w="100%" onClick={openModalForMatch6}>
            <Spacer />
            <Text
              p={2}
              alignSelf="center"
              style={{ fontFamily: "Font-Content" }}
            >
              6호선
            </Text>
            <Spacer />
            <Image src={require('../assets/trains/train_6.png')} w='250px' h='100px' justifySelf='right' />
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
                    <Text
                      color="white"
                      fontSize="lg"
                      style={{ fontFamily: "Font-Content" }}
                    >
                      나
                    </Text>
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
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button onClick={onClose}>취소</Button>
              <Button as={Link} to="/battle-ground">
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
