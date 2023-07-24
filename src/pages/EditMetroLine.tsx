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
import { Link } from "react-router-dom";

function EditMetroLine() {
  const theme = useTheme();

  return (
    <Flex
      direction="column"
      style={{ backgroundColor: theme.colors.ziha_charcoal }}
    >
      <Box
        w="100%"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Text
          w="fit-content"
          p={3}
          m={2}
          fontSize="2xl"
          style={{ fontFamily: "Font-Title", color: "white" }}
          as={Link}
          to="/mypage"
        >
          &lt;
        </Text>
        <Text
          w="fit-content"
          p={3}
          m={2}
          fontSize="2xl"
          style={{ fontFamily: "Font-Title", color: "white" }}
        >
          내 노선
        </Text>
      </Box>
      <Flex flex={1}></Flex>
    </Flex>
  );
}

export default EditMetroLine;
