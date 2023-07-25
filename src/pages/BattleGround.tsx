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
import { useBreakpointValue } from "@chakra-ui/react";

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
    </Flex>
  );
}

export default BattleGround;
