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
      <Flex direction="column" justify="center" align="center" height="100%">
        <Flex
          justify="center"
          align="center"
          direction="column"
          style={{
            borderRadius: "0px",
            height: "100%",
            width: "80%",
            position: "relative",
          }}
        >
          <Text
            style={{
              fontFamily: "Font-title-light",
              color: "white",
              fontSize: "30px",
            }}
          >
            Line 2
          </Text>
          <Box
            style={{
              width: "70%",
              height: "60%",
              border: "1.5px solid white",
              borderRadius: "20px",
            }}
          ></Box>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "15%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "red",
            }}
          ></div>
          <Text
            style={{
              position: "absolute",
              top: "50%",
              left: "15%",
              transform: "translate(-50%, 50%)",
              fontFamily: "Font-title-light",
              color: "white",
              fontSize: "20px",
            }}
          >
            대전역
          </Text>
          <div
            style={{
              position: "absolute",
              top: "50%", // Box 컴포넌트의 중앙에 위치하도록 설정
              right: "15%", // 우측에 위치
              transform: "translate(50%, -50%)", // 수직으로 정확히 중앙으로 위치시키기 위해 사용
              width: "50px",
              height: "50px",
              borderRadius: "50%", // 원형으로 만들기 위해 50%의 borderRadius 사용
              backgroundColor: "blue", // 예시로 파란색 배경을 적용
            }}
          ></div>
          <Text
            style={{
              position: "absolute",
              top: "50%",
              right: "15%",
              transform: "translate(50%, 50%)",
              fontFamily: "Font-title-light",
              color: "white",
              fontSize: "20px",
            }}
          >
            유성온천역
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default EditMetroLine;
