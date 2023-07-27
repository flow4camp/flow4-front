import Layout from "../components/layout";
import {
  Image,
  Text,
  Box,
  Button,
  Flex,
  useTheme,
  Input,
} from "@chakra-ui/react";

function StaminaStore() {
  const theme = useTheme();
  return (
    <Layout>
      <Box w="100%">
        <Text
          w="fit-content"
          p={3}
          m={2}
          fontSize="2xl"
          style={{ fontFamily: "Font-Title" }}
        >
          기력 충전
        </Text>
      </Box>
      <Flex justify="center" align="center" paddingTop="50px">
        <Flex
          justify="center"
          align="center"
          w="350px"
          h="200px"
          style={{
            backgroundColor: theme.colors.ziha_charcoal,
            borderRadius: "30PX",
          }}
        >
          <Flex direction="column" m={3}>
            <Text
              w="fit-content"
              fontSize="lg"
              style={{ fontFamily: "Font-Title", color: "white" }}
            >
              직장인 패키지
            </Text>
            <Flex align="center">
              <Text
                w="fit-content"
                fontSize="lg"
                style={{
                  fontFamily: "Font-Title-light",
                  color: "white",
                  textDecoration: "line-through",
                }}
              >
                19,990
              </Text>
              <Text
                w="fit-content"
                fontSize="lg"
                marginLeft="10px"
                style={{
                  fontFamily: "Font-Title-light",
                  color: "red",
                }}
              >
                → 9,990
              </Text>
            </Flex>
            <Text
              marginTop="20px"
              w="fit-content"
              fontSize="13px"
              style={{ fontFamily: "Font-Title-light", color: "white" }}
            >
              500 기력
            </Text>
            <Text
              w="fit-content"
              fontSize="13px"
              style={{ fontFamily: "Font-Title-light", color: "white" }}
            >
              유령 정장 + 유령 넥타이
            </Text>
          </Flex>
          <Image
            w="150px"
            h="150px"
            src={require("../assets/tired_ghost.png")}
          ></Image>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" paddingTop="50px">
        <Flex
          justify="center"
          align="center"
          w="350px"
          h="200px"
          style={{
            backgroundColor: theme.colors.ziha_charcoal,
            borderRadius: "30PX",
          }}
        >
          <Flex direction="column" m={3}>
            <Text
              w="fit-content"
              fontSize="lg"
              style={{ fontFamily: "Font-Title", color: "white" }}
            >
              실속 패키지
            </Text>
            <Flex align="center">
              <Text
                w="fit-content"
                fontSize="lg"
                style={{
                  fontFamily: "Font-Title-light",
                  color: "white",
                  textDecoration: "line-through",
                }}
              >
                49,990
              </Text>
              <Text
                w="fit-content"
                fontSize="lg"
                marginLeft="10px"
                style={{
                  fontFamily: "Font-Title-light",
                  color: "red",
                }}
              >
                → 25,000
              </Text>
            </Flex>
            <Text
              marginTop="20px"
              w="fit-content"
              fontSize="13px"
              style={{ fontFamily: "Font-Title-light", color: "white" }}
            >
              5000 기력
            </Text>
            <Text
              w="fit-content"
              fontSize="13px"
              style={{ fontFamily: "Font-Title-light", color: "white" }}
            >
              아이템 10+1 랜덤박스
            </Text>
          </Flex>
          <Image
            w="120px"
            h="120px"
            src={require("../assets/stamina_chest.png")}
          ></Image>
        </Flex>
      </Flex>
    </Layout>
  );
}

export default StaminaStore;
