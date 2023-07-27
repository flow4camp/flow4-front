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
          w="600px"
          h="300px"
          style={{
            backgroundColor: theme.colors.ziha_charcoal,
            borderRadius: "30PX",
          }}
        >
          <Flex direction="column" m={10}>
            <Text
              w="fit-content"
              fontSize="2xl"
              style={{ fontFamily: "Font-Title", color: "white" }}
            >
              직장인 패키지
            </Text>
            <Flex align="center">
              <Text
                w="fit-content"
                fontSize="xl"
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
                fontSize="2xl"
                marginLeft="10px"
                style={{
                  fontFamily: "Font-Title-light",
                  color: "red",
                }}
              >
                → 9,990
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}

export default StaminaStore;
