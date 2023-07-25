import {
  Image,
  Text,
  Box,
  Button,
  Flex,
  useTheme,
  Center,
  Input,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import UserCharacter from "../components/UserCharacter";
import { faceVariants } from "../components/AssetVariants";

function BattleGround() {
  const theme = useTheme();

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
      <Flex direction="column" justify="center" align="center">
        {/* hp 바 */}
        <Flex align="center" w="90vw" justify="space-between">
          <Text style={{ fontFamily: "Font-Title-light", color: "white" }}>
            HP
          </Text>
          <Flex
            w="300px"
            h="10px"
            style={{ border: "2px solid white", borderRadius: "10px" }}
          >
            <Flex w="80%" h="100%" style={{ backgroundColor: "white" }}></Flex>
          </Flex>
        </Flex>
        {/* 기력 바 */}
        <Flex align="center" w="90vw" justify="space-between">
          <Text style={{ fontFamily: "Font-Title-light", color: "white" }}>
            기력
          </Text>
          <Flex
            w="300px"
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
      <Flex
        justify="center"
        align="center"
        direction="column"
        style={{ marginTop: "50px" }}
      >
        <Text
          fontSize="3xl"
          style={{ fontFamily: "Font-Title", color: "white" }}
        >
          귀신이
        </Text>
        <Text style={{ fontFamily: "Font-Title-light", color: "white" }}>
          User2
        </Text>
        {/* hp 바 */}
        <Flex align="center" w="150px" justify="space-between">
          <Text style={{ fontFamily: "Font-Title-light", color: "white" }}>
            HP
          </Text>
          <Flex
            w="100px"
            h="10px"
            style={{ border: "2px solid white", borderRadius: "10px" }}
          >
            <Flex w="80%" h="100%" style={{ backgroundColor: "white" }}></Flex>
          </Flex>
        </Flex>
        {/* 기력 바 */}
        <Flex align="center" w="150px" justify="space-between">
          <Text style={{ fontFamily: "Font-Title-light", color: "white" }}>
            기력
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
      <Flex justify="center" align="center" h="250px">
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
      <Flex w="80vw" justify="space-between" style={{ marginTop: "20px" }}>
        <Flex
          justify="center"
          align="center"
          direction="column"
          w="30vw"
          h="20vh"
          style={{ border: "2px solid white", borderRadius: "20px" }}
          _active={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <Image src="/icons/shield.png" w="80%" h="50%" />
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
          w="30vw"
          h="20vh"
          style={{ border: "2px solid white", borderRadius: "20px" }}
          _active={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <Image src="/icons/sword.png" w="80%" h="50%" />
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
    </Flex>
  );
}

export default BattleGround;
