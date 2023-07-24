import {
  Image,
  Text,
  Box,
  Button,
  Flex,
  useTheme,
  Input,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import React, { useState } from "react";
import Layout from "../components/layout";
import { Link } from "react-router-dom";

function MyPage() {
  const theme = useTheme();
  const [name, setName] = useState("User1");
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
    setInputValue(name);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setName(inputValue);
  };

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
          마이페이지
        </Text>
      </Box>
      <Flex
        direction="column"
        justify="center"
        align="center"
        width="100%"
        height="90%"
      >
        <Flex direction="column" justify="center" align="center" width="90%">
          <Flex
            justify="center"
            align="center"
            style={{
              backgroundColor: theme.colors.ziha_charcoal,
              width: "150px",
              height: "150px",
              borderRadius: "50%",
            }}
          >
            <Image
              src={require("../assets/ghost-basic-0.png")}
              w="100px"
              h="100px"
              m={3}
            />
          </Flex>

          <Flex justify="space-between" style={{ marginTop: "30px" }}>
            {isEditing ? (
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ fontFamily: "Font-Title", alignSelf: "center" }}
              />
            ) : (
              <Text
                fontSize="3xl"
                fontWeight="bold"
                style={{ fontFamily: "Font-Title", alignSelf: "center" }}
                onClick={handleEditClick}
              >
                {name}
              </Text>
            )}
            {isEditing && (
              <Button
                onClick={handleSaveClick}
                style={{ backgroundColor: "transparent", fontSize: "13px" }}
              >
                저장
              </Button>
            )}
          </Flex>
          <Flex
            style={{ width: "50%", marginTop: "15px" }}
            justify="space-between"
          >
            <Text style={{ fontFamily: "Font-content" }}>전적 1승 2패</Text>
            <Text style={{ fontFamily: "Font-content" }}>기력 149</Text>
          </Flex>
          {/* <Button style={{ backgroundColor: "transparent" }}>
            <Image src="/icons/edit.png" w="10px" />
          </Button> */}
          <Flex
            as={Link}
            to="/edit-metroline"
            direction="column"
            align="center"
            style={{
              borderRadius: "20px",
              height: "150px",
              width: "80%",
              marginTop: "50px",
              backgroundColor: theme.colors.ziha_charcoal,
              position: "relative",
            }}
          >
            <Box
              style={{
                width: "70%",
                height: "60%",
                border: "4px solid white",
                borderColor: "red",
                borderRadius: "20px",
                position: "absolute",
                transform: "translate(0, -50%)",
                top: "50%",
              }}
            ></Box>
            <Text
              style={{
                position: "absolute",
                top: "50%",
                fontFamily: "Font-title-light",
                transform: "translate(0, -50%)",
                color: "white",
              }}
            >
              Line 2
            </Text>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "15%",
                transform: "translate(-50%, -50%)",
                width: "15px",
                height: "15px",
                border: "3px solid #ccc",
                borderRadius: "50%",
                backgroundColor: "white",
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
                fontSize: "10px",
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
                width: "15px",
                height: "15px",
                border: "3px solid #ccc",
                borderRadius: "50%", // 원형으로 만들기 위해 50%의 borderRadius 사용
                backgroundColor: "white", // 예시로 파란색 배경을 적용
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
                fontSize: "10px",
              }}
            >
              유성온천역
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" style={{ width: "80%", marginTop: "50px" }}>
          <Button
            as={Link}
            to="/stamina-store"
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "transparent",
              borderTop: "1px solid #ccc",
              borderBottom: "1px solid #ccc",
            }}
          >
            <Text>기력 충전하기</Text>
            <Text>&gt;</Text>
          </Button>
          <Button
            as={Link}
            to="/store"
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "transparent",
              borderBottom: "1px solid #ccc",
              transition: "background-color 0.2s",
            }}
          >
            <Text>내 유령 꾸미기</Text>
            <Text>&gt;</Text>
          </Button>
        </Flex>
      </Flex>
    </Layout>
  );
}

export default MyPage;
