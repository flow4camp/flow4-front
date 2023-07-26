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
import { accVariants, clothesVariants, faceVariants, hatVariants, shoeVariants } from "../components/AssetVariants";
import { useUserContext } from '../context/UserContext';
import { ChevronRightIcon } from "@chakra-ui/icons";

function MyPage() {
  const theme = useTheme();
  const [name, setName] = useState("User1");
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [ghostName, setGhostName] = useState("유령이");
  const [isEditingGhostName, setIsEditingGhostName] = useState(false);
  const [inputValueGhostName, setInputValueGhostName] = useState("");
  const { user, setUser } = useUserContext();

  const handleEditClick = () => {
    setIsEditing(true);
    setInputValue(name);
    setIsEditingGhostName(true);
    setInputValueGhostName(ghostName);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setName(inputValue);
    setIsEditingGhostName(false);
    setGhostName(inputValueGhostName);
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
      {user &&
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
                usage={"profile"}
                selectedHat={user.hatVariants !== -1 ? hatVariants[user.hatVariants] : null}
                selectedAcc={user.accVariants !== -1 ? accVariants[user.accVariants] : null}
                selectedFace={user.faceVariants !== -1 ? faceVariants[user.faceVariants] : faceVariants[0]}
                selectedClothes={user.clothesVariants !== -1 ? clothesVariants[user.clothesVariants] : null}
                selectedShoe={user.shoeVariants !== -1 ? shoeVariants[user.shoeVariants] : null}
              />
            </Flex>
            <Flex direction="column" style={{ marginTop: "20px" }}>
              {isEditingGhostName ? (
                <Input
                  value={inputValueGhostName}
                  onChange={(e) => setInputValueGhostName(e.target.value)}
                  style={{ fontFamily: "Font-Title", alignSelf: "center" }}
                />
              ) : (
                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  style={{ fontFamily: "Font-Title", alignSelf: "center" }}
                  onClick={handleEditClick}
                >
                  {ghostName}
                </Text>
              )}
              {isEditing ? (
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  style={{ fontFamily: "Font-Title-light", alignSelf: "center" }}
                />
              ) : (
                <Text
                  style={{ fontFamily: "Font-Title-light", alignSelf: "center" }}
                  onClick={handleEditClick}
                >
                  {user.username}
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
            <Flex style={{ marginTop: "15px" }} direction="column">
              <Flex>
                <Image
                  src={require("../assets/fight.png")}
                  w="20px"
                  h="20px"
                  style={{ marginRight: "10px" }}
                />
                <Text style={{ fontFamily: "Font-content" }}>{`전적 ${user.win}승 ${user.lose}패`}</Text>
              </Flex>
              <Flex>
                <Image
                  src={require("../assets/coin.png")}
                  w="25px"
                  h="25px"
                  style={{ marginRight: "5px" }}
                />
                <Text style={{ fontFamily: "Font-content" }}>{`기력 ${user.power}`}</Text>
              </Flex>
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
                  marginTop: "20px",
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
              <ChevronRightIcon boxSize={5} color="black" />
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

              <Box>
                <ChevronRightIcon boxSize={5} color="black" />
              </Box>
            </Button>
          </Flex>
        </Flex>
      }
    </Layout>
  );
}

export default MyPage;
