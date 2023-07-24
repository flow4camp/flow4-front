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
import { useState, useEffect } from "react";

function EditMetroLine() {
  const theme = useTheme();
  const [firstSelectedLine, setFirstSelectedLine] = useState("1호선");
  const [secondSelectedLine, setSecondSelectedLine] = useState("2호선");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondLine, setIsSecondLine] = useState(false);
  const [firstBorderColor, setFirstBorderColor] = useState(
    theme.colors.line_1_color
  );
  const [secondBorderColor, setSecondBorderColor] = useState(
    theme.colors.line_2_color
  );

  const handleLineClick = (isSecondLine: boolean) => {
    setIsModalOpen(true);
    setIsSecondLine(isSecondLine);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getLineColor = (line: string) => {
    switch (line) {
      case "1호선":
        return theme.colors.line_1_color;
      case "2호선":
        return theme.colors.line_2_color;
      case "3호선":
        return theme.colors.line_3_color;
      case "4호선":
        return theme.colors.line_4_color;
      case "5호선":
        return theme.colors.line_5_color;
      case "6호선":
        return theme.colors.line_6_color;
      case "7호선":
        return theme.colors.line_7_color;
      case "8호선":
        return theme.colors.line_8_color;
      case "9호선":
        return theme.colors.line_9_color;
      default:
        return theme.colors.line_1_color;
    }
  };
  const handleLineSelection = (line: string) => {
    if (isSecondLine) {
      setSecondSelectedLine(line);
      setSecondBorderColor(getLineColor(line));
    } else {
      setFirstSelectedLine(line);
      setFirstBorderColor(getLineColor(line));
    }
    setIsModalOpen(false);
  };

  const metroLineOptions = [
    "1호선",
    "2호선",
    "3호선",
    "4호선",
    "5호선",
    "6호선",
    "7호선",
    "8호선",
    "9호선",
  ];

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
          }}
        >
          {/* 첫번째 역 */}
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "3px solid #ccc",
            }}
          ></div>
          <Text
            style={{
              fontFamily: "Font-title-light",
              color: "white",
              fontSize: "20px",
            }}
          >
            대전역
          </Text>
          {/* 첫번째 노선선 */}
          <Box
            style={{
              width: "0",
              height: "10%",
              border: `4px solid ${firstBorderColor}`,
              borderRadius: "20px",
            }}
          ></Box>
          <Text
            style={{
              fontFamily: "Font-title-light",
              color: "white",
              fontSize: "30px",
            }}
            onClick={() => handleLineClick(false)}
          >
            {firstSelectedLine}
          </Text>
          <Box
            style={{
              width: "0",
              height: "10%",
              border: `4px solid ${firstBorderColor}`,
              borderRadius: "20px",
            }}
          ></Box>
          {/* 두번째 역 */}
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "3px solid #ccc",
            }}
          ></div>
          <Text
            style={{
              fontFamily: "Font-title-light",
              color: "white",
              fontSize: "20px",
            }}
          >
            대전역
          </Text>
          {/* 두번쨰 노선 */}
          <Box
            style={{
              width: "0",
              height: "10%",
              border: `4px solid ${secondBorderColor}`,
              borderRadius: "20px",
            }}
          ></Box>
          <Text
            style={{
              fontFamily: "Font-title-light",
              color: "white",
              fontSize: "30px",
            }}
            onClick={() => handleLineClick(true)}
          >
            {secondSelectedLine}
          </Text>
          <Box
            style={{
              width: "0",
              height: "10%",
              border: `4px solid ${secondBorderColor}`,
              borderRadius: "20px",
            }}
          ></Box>
          {/* 마지막 도착역 */}
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "3px solid #ccc",
            }}
          ></div>
          <Text
            style={{
              fontFamily: "Font-title-light",
              color: "white",
              fontSize: "20px",
            }}
          >
            유성온천역
          </Text>
        </Flex>
      </Flex>
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent style={{ width: "80%", opacity: "0.5" }}>
          <ModalHeader style={{ textAlign: "center" }}>
            호선 선택하기
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {metroLineOptions.map((line) => (
              <Button
                key={line}
                onClick={() => handleLineSelection(line)}
                w="100%"
              >
                {line}
              </Button>
            ))}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default EditMetroLine;
