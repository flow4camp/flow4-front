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
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

function EditMetroLine() {
  const navigate = useNavigate(); // navigator
  const theme = useTheme();
  const [firstSelectedLine, setFirstSelectedLine] = useState("1호선");
  const [secondSelectedLine, setSecondSelectedLine] = useState("2호선");
  const [firstSelectedStation, setFirstSelectedStation] = useState("대전역");
  const [secondSelectedStation, setSecondSelectedStation] = useState("대전역");
  const [thirdSelectedStation, setThirdSelectedStation] = useState("대전역");

  const [isLineModalOpen, setIsLineModalOpen] = useState(false);
  const [isStationModalOpen, setIsStationModalOpen] = useState(false);

  const [isSecondLine, setIsSecondLine] = useState(false);
  const [stationNumber, setStationNumber] = useState(1);

  const [firstBorderColor, setFirstBorderColor] = useState(
    theme.colors.line_1_color
  );
  const [secondBorderColor, setSecondBorderColor] = useState(
    theme.colors.line_2_color
  );

  const handleStationClick = (stationNum: number) => {
    setIsStationModalOpen(true);
    setStationNumber(stationNum);
  };
  const handleLineClick = (isSecondLine: boolean) => {
    setIsLineModalOpen(true);
    setIsSecondLine(isSecondLine);
  };

  const handleCloseLineModal = () => {
    setIsLineModalOpen(false);
  };
  const handleCloseStationModal = () => {
    setIsStationModalOpen(false);
  };
  const handleLineSelection = (line: string) => {
    if (isSecondLine) {
      setSecondSelectedLine(line);
      setSecondBorderColor(getLineColor(line));
    } else {
      setFirstSelectedLine(line);
      setFirstBorderColor(getLineColor(line));
    }
    setIsLineModalOpen(false);
  };
  const handleStationSelection = (station: string) => {
    if (stationNumber === 1) {
      setFirstSelectedStation(station);
    } else if (stationNumber === 2) {
      setSecondSelectedStation(station);
    } else if (stationNumber === 3) {
      setThirdSelectedStation(station);
    }
    setIsStationModalOpen(false);
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

  const stationOptions = ["대전역", "춘천역", "유성온천역"];
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
          alignItems: "center",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
        }}
      >
        <Box>
          <ChevronLeftIcon
            boxSize={10}
            color="white"
            m={2}
            onClick={() => navigate("/mypage")}
          />
        </Box>

        <Text
          w="fit-content"
          p={3}
          m={2}
          fontSize="xl"
          style={{ fontFamily: "Font-Title-light", color: "white" }}
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
            onClick={() => handleStationClick(1)}
          >
            {firstSelectedStation}
          </Text>
          {/* 첫번째 노선 */}
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
            onClick={() => handleStationClick(2)}
          >
            {secondSelectedStation}
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
            onClick={() => handleStationClick(3)}
          >
            {thirdSelectedStation}
          </Text>
        </Flex>
      </Flex>
      {/* 호선 선택 Modal */}
      <Modal isOpen={isLineModalOpen} onClose={handleCloseLineModal}>
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
      {/* 역 선택 모달 */}
      <Modal isOpen={isStationModalOpen} onClose={handleCloseStationModal}>
        <ModalOverlay />
        <ModalContent style={{ width: "80%", opacity: "0.5" }}>
          <ModalHeader style={{ textAlign: "center" }}>역 선택하기</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {stationOptions.map((station) => (
              <Button
                key={station}
                onClick={() => handleStationSelection(station)}
                w="100%"
              >
                {station}
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
