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
  const [selectedLine, setSelectedLine] = useState("Line 1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [borderColor, setBorderColor] = useState(theme.colors.line_1_color);

  const handleLineClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLineSelection = (line: string) => {
    setSelectedLine(line);
    setIsModalOpen(false);

    switch (line) {
      case "Line 1":
        setBorderColor(theme.colors.line_1_color);
        break;
      case "Line 2":
        setBorderColor(theme.colors.line_2_color);
        break;
      case "Line 3":
        setBorderColor(theme.colors.line_3_color);
        break;
      case "Line 4":
        setBorderColor(theme.colors.line_4_color);
        break;
      case "Line 5":
        setBorderColor(theme.colors.line_5_color);
        break;
      case "Line 6":
        setBorderColor(theme.colors.line_6_color);
        break;
      case "Line 7":
        setBorderColor(theme.colors.line_7_color);
        break;
      case "Line 8":
        setBorderColor(theme.colors.line_8_color);
        break;
      case "Line 9":
        setBorderColor(theme.colors.line_9_color);
        break;
      default:
        setBorderColor(theme.colors.line_1_color);
        break;
    }
  };

  const metroLineOptions = [
    "Line 1",
    "Line 2",
    "Line 3",
    "Line 4",
    "Line 5",
    "Line 6",
    "Line 7",
    "Line 8",
    "Line 9",
  ];

  useEffect(() => {
    setBorderColor(selectedLine);
  });

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
            onClick={handleLineClick}
          >
            {selectedLine}
          </Text>
          <Box
            style={{
              width: "70%",
              height: "60%",
              border: `7px solid ${borderColor}`,
              borderRadius: "20px",
              position: "relative",
            }}
          ></Box>

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "15%",
              transform: "translate(-50%, -50%)",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "3px solid #ccc",
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
              top: "50%",
              right: "15%",
              transform: "translate(50%, -50%)",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "3px solid #ccc",
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
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent style={{ width: "80%", opacity: "0.5" }}>
          <ModalHeader style={{ textAlign: "center" }}>
            Choose Metro Line
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
