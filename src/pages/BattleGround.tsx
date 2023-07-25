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
import { faceVariants } from "../components/AssetVariants";
import { useState } from "react";
import { Link } from "react-router-dom";

function BattleGround() {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isExiting, setIsExiting] = useState(false);

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
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
        }}
      >
        <Text
          w="fit-content"
          p={3}
          m={2}
          fontSize="2xl"
          style={{ fontFamily: "Font-Title", color: "white" }}
          onClick={handleExitButtonClick}
        >
          나가기
        </Text>
        <Text
          w="fit-content"
          p={3}
          m={2}
          fontSize="2xl"
          style={{ fontFamily: "Font-Title", color: "white" }}
        >
          3:28
        </Text>
      </Box>
      {/* 상대방 캐릭터 */}
      <Flex justify="center" align="center" h="30%">
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
          <Flex align="center" w="140px" justify="space-between">
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
        <Flex justify="center" align="center">
          {" "}
          <UserCharacter
            edit={false}
            selectedHat={null}
            selectedAcc={null}
            selectedFace={faceVariants[0]}
            selectedClothes={null}
            selectedShoe={null}
          />
        </Flex>
      </Flex>
      {/* 내 캐릭터 */}
      <Flex justify="center" align="center" h="20%">
        <Flex justify="center" align="center">
          {" "}
          <UserCharacter
            edit={false}
            selectedHat={null}
            selectedAcc={null}
            selectedFace={faceVariants[0]}
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
          <Flex align="center" w="140px" justify="space-between">
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
      <Flex w="70vw" justify="space-between" style={{ marginTop: "30%" }}>
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
              fontFamily: "Font-Title-light",
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
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>정말 나가시겠습니까?</ModalHeader>
          <ModalBody>나가면 기력이 소진됩니다.</ModalBody>
          <ModalFooter>
            <Link to="/battle">
              <Button colorScheme="red" mr={3} onClick={handleExit}>
                나가기
              </Button>
            </Link>
            <Box
              // Apply custom styles to the Box wrapping the ModalCloseButton
              style={{
                fontFamily: "Font-Title",
                fontSize: "2xl",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                color: "black",
                borderRadius: "8px",
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
                cursor: "pointer", // Add a cursor pointer to indicate clickability
              }}
              onClick={handleContinue}
              // Apply other styles like padding, margin, etc., as needed
              p={3}
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
