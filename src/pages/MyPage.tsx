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
import UserCharacter from "../components/UserCharacter";
import { faceVariants } from "../components/AssetVariants";

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

  const firstBorderColor = theme.colors.line_1_color;
  const secondBorderColor = theme.colors.line_2_color;

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
              width: "200px",
              height: "200px",
              borderRadius: "50%",
            }}
          >
            <UserCharacter
              usage={''}
              selectedHat={null}
              selectedAcc={null}
              selectedFace={faceVariants[0]}
              selectedClothes={null}
              selectedShoe={null}
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

          <Flex
            as={Link}
            to="/edit-metroline"
            align="center"
            justify="center"
            style={{
              borderRadius: "20px",
              height: "150px",
              width: "80%",
              marginTop: "50px",
              backgroundColor: theme.colors.ziha_charcoal,
              position: "relative",
            }}
          >
            {/* 첫번째 역 */}
            <Flex direction="column" align="center">
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  border: "3px solid #ccc",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              ></div>
              <Text
                style={{
                  fontFamily: "Font-title-light",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                신설동
              </Text>
            </Flex>

            <Box
              style={{
                width: "20%",
                height: "0",
                border: `2px solid ${firstBorderColor}`,
                borderRadius: "20px",
                top: "50%",
              }}
            ></Box>
            {/* 두번째 역 */}
            <Flex direction="column" align="center">
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  border: "3px solid #ccc",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              ></div>
              <Text
                style={{
                  fontFamily: "Font-title-light",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                시청역
              </Text>
            </Flex>
            <Box
              style={{
                width: "20%",
                height: "0",
                border: `2px solid ${secondBorderColor}`,
                borderRadius: "20px",
                top: "50%",
              }}
            ></Box>
            {/* 세번째 역 */}
            <Flex direction="column" align="center">
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  border: "3px solid #ccc",
                  borderRadius: "50%", // 원형으로 만들기 위해 50%의 borderRadius 사용
                  backgroundColor: "white", // 예시로 파란색 배경을 적용
                }}
              ></div>
              <Text
                style={{
                  fontFamily: "Font-title-light",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                합정역
              </Text>
            </Flex>
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
