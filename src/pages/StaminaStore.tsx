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
    </Layout>
  );
}

export default StaminaStore;
