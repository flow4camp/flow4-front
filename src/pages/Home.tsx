// Home.tsx
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import UserCharacter from "../components/UserCharacter";
import {
  Center,
  Divider,
  Text,
  Box,
  Image,
  Flex,
  useToast,
  useTheme,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { accVariants, clothesVariants, faceVariants, hatVariants, shoeVariants } from "../components/AssetVariants";
import { useUserContext } from '../context/UserContext';
import { API_URL } from '../api';

function Home() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();
  const toast = useToast();
  const nickName = "유령이";    // 유령이름
  const attendance = 17;      // 누적 출석 일수
  const winNum = 1;
  const looseNum = 12;
  const lineNum = 1; // 등록된 출근 호선 번호
  const lineNumColor = theme.colors["line_" + lineNum + "_color"];
  const [dailyQuestList, setDailyQuestList] = useState([
    { id: 1, text: "지하철 탑승하기", isActive: false, isComplete: false },
    { id: 2, text: "1회 배틀하기", isActive: false, isComplete: false },
    { id: 3, text: "지하철에서 내리기", isActive: true, isComplete: false },
  ]);
  var specialQuestNum: number = 5;
  var specialQuestProgress: number = 5;
  const specialQuest = `배틀 ${specialQuestNum}회 이기기`;
  const [isSpecialActive, setIsSpecialActive] = useState(true);
  const [isSpecialComplete, setIsSpecialComplete] = useState(false);

  useEffect(() => {
    specialQuestProgress = user.win;
  }, []);

  useEffect(() => {
    setIsSpecialActive(specialQuestNum === specialQuestProgress);
  }, [specialQuestNum, specialQuestProgress]);

  function getDaysSinceCreation(createdAt: string) {
    const currentDate = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference = currentDate.getTime() - createdDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference + 1;
  }

  return (
    <Layout>
        {user &&
        <div style={styles.container}>
        <Box w='100%'>
          <Text
            w="fit-content"
            p={3}
            m={2}
            paddingBottom={0}
            marginBottom={0}
            fontSize='lg'
            style={{ fontFamily: 'Font-Title-Light' }}
          >{user.username}님,</Text>
          <Text
            w="fit-content"
            paddingLeft={3}
            marginLeft={2}
            fontSize="2xl"
            style={{ fontFamily: "Font-Title" }}
          >
            좋은 아침입니다!
          </Text>
        </Box>
        <div style={styles.userinfoContainer}>
          <div style={styles.userinfoChar}>
            <NavLink to="/edit-character">
              <UserCharacter
                usage={""}
                selectedHat={user.hatVariants !== -1 ? hatVariants[user.hatVariants] : null}
                selectedAcc={user.accVariants !== -1 ? accVariants[user.accVariants] : null}
                selectedFace={user.faceVariants!== -1 ?  faceVariants[user.faceVariants] : faceVariants[0]}
                selectedClothes={user.clothesVariants !== -1 ? clothesVariants[user.clothesVariants] : null}
                selectedShoe={user.shoeVariants !== -1 ?  shoeVariants[user.shoeVariants] : null}
              />     {/* selected stuffs are null for now!! */}
            </NavLink>
          </div>
          <div style={styles.userinfoText}>
            <div style={styles.userName}>{nickName}</div>
            <Text
              style={{ fontFamily: "Font-Content" }}
              p={3}
              paddingBottom={2}
            >지하출근 {getDaysSinceCreation(user.createdAt)}일차</Text>
            <Text style={{ fontFamily: "Font-Content-Light" }} fontSize='sm' >
              오늘도 출근!
            </Text>
            <Text style={{ fontFamily: "Font-Content-Light" }} fontSize='sm' >
              누적 전적 {user.win}승 {user.lose}패
            </Text>
          </div>
        </div>
        <Box
          w="90%"
          h="80px"
          borderRadius="1.3em"
          marginTop={4}
          bg="#e5e5e5"
          // bg='ziha_green_gray'
          onClick={() => navigate("/battle")} // 매칭 modal 바로 열리게 하기??
          boxShadow="0px 2px 6px rgba(0, 0, 0, 0.2)"
        >
          <Center w="100%" h="100%" position="relative">
            <Box position="absolute" w="100%" h="4px" bg={lineNumColor}></Box>
            <Box
              position="absolute"
              w="8px"
              h="8px"
              borderRadius="4px"
              bg="white"
              boxShadow={"0 0 0 3px " + lineNumColor}
              left={10}
            />
            <Box
              position="absolute"
              w="8px"
              h="8px"
              borderRadius="4px"
              bg="white"
              boxShadow={"0 0 0 3px " + lineNumColor}
              right={10}
            />
            <Flex
              position="absolute"
              direction="row"
              gap={2}
              p={2}
              bg="#e5e5e5"
              // bg='ziha_green_gray'
            >
              <Image src="/icons/dice-alt.svg" w={6} h={6} />
              <Text
                color="ziha_charcoal"
                style={{ fontFamily: "Font-Content" }}
                fontSize="lg"
              >
                {lineNum}호선 배틀 바로가기
              </Text>
            </Flex>
          </Center>
        </Box>
        <Box
          w="90%"
          borderRadius="2em"
          marginTop={4}
          boxShadow="0px 2px 6px rgba(0, 0, 0, 0.1)"
        >
          <Flex direction="column" gap={1} m={2} p={2} paddingTop={0}>
            <Text
              fontSize="lg"
              style={{ fontFamily: "Font-Content" }}
              w="fit-content"
              marginLeft={2}
              marginTop={2}
            >
              오늘의 퀘스트
            </Text>
            <Divider
              borderColor="ziha_charcoal_gray"
              w="50%"
              marginBottom={2}
            />
            {dailyQuestList.map((quest) => (
              <Flex align="center" justify="space-between">
                <Flex align="center">
                  <Image
                    h="15px"
                    marginRight="10px"
                    src={require("../assets/quest.png")}
                  ></Image>
                  <Box
                    key={quest.id}
                    style={{
                      fontFamily: "Font-Content-Light",
                      fontSize: "15px",
                    }}
                    w="fit-content"
                    marginLeft={1}
                    fontSize="lg"
                  >
                    {quest.text}
                  </Box>
                </Flex>
                <Box
                  w="80px"
                  style={{
                    border: "1px solid",
                    borderRadius: "5px",
                    fontSize: "13px",
                    fontFamily: "Font-Content-Light",
                    borderColor: quest.isActive
                      ? "black"
                      : theme.colors.ziha_purple_gray,
                    color: quest.isActive
                      ? "black"
                      : theme.colors.ziha_purple_gray,
                  }}
                  onClick={() => {
                    if (quest.isActive && !quest.isComplete) {
                      toast({
                        title: "보상을 받았습니다.",
                        description: "100 기력을 받았습니다!",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: "top",
                      });
                      fetch(API_URL + `/user/add-power/${user.id}`, {
                        method: 'put',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({power: 100}),
                      })
                        .then(response => response.json())
                        .then(data => {
                          user.power = data.power;
                          setUser(user);
                        })
                        .catch(error => {
                          console.error('Error:', error);
                        });
                      setDailyQuestList((prevQuests) =>
                        prevQuests.map((q) =>
                          q.id === quest.id ? { ...q, isComplete: true } : q
                        )
                      );
                    }
                  }}
                >
                  {quest.isComplete ? "완료" : "보상 받기"}
                </Box>
              </Flex>
            ))}
          </Flex>
        </Box>
        <Box
          w="90%"
          borderRadius="2em"
          marginTop={4}
          boxShadow="0px 2px 6px rgba(0, 0, 0, 0.1)"
          marginBottom={6}
        >
          <Flex direction="column" gap={1} m={2} p={2} paddingTop={0}>
            <Text
              fontSize="lg"
              style={{ fontFamily: "Font-Content" }}
              w="fit-content"
              marginLeft={2}
              marginTop={2}
            >
              특별 퀘스트
            </Text>
            <Divider
              borderColor="ziha_charcoal_gray"
              w="50%"
              marginBottom={2}
            />
            <Flex align="center" justify="space-between">
              <Flex align="center">
                <Image
                  h="15px"
                  marginRight="10px"
                  src={require("../assets/quest.png")}
                ></Image>
                <Flex direction="column">
                  <Box
                    style={{
                      fontFamily: "Font-Content-Light",
                      fontSize: "15px",
                    }}
                    w="fit-content"
                    marginLeft={1}
                  >
                    {specialQuest}
                  </Box>
                  <Box
                    marginTop={1}
                    w="100px"
                    h="10px"
                    style={{
                      border: "2px solid",
                      borderColor: theme.colors.ziha_purple_gray,
                      borderRadius: "5px",
                    }}
                  >
                    <Box
                      w={`${(user.win / specialQuestNum) * 100}%`}
                      h="100%"
                      style={{ backgroundColor: theme.colors.ziha_green }}
                    ></Box>
                    <Text
                      fontSize="7px"
                      style={{ transform: "translateY(-70%)" }}
                    >
                      {user.win}/{specialQuestNum}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Box
                w="80px"
                style={{
                  border: "1px solid",
                  borderRadius: "5px",
                  fontSize: "13px",
                  fontFamily: "Font-Content-Light",
                  borderColor: isSpecialActive
                    ? "black"
                    : theme.colors.ziha_purple_gray,
                  color: isSpecialActive
                    ? "black"
                    : theme.colors.ziha_purple_gray,
                }}
                onClick={() => {
                  if (isSpecialActive && !isSpecialComplete) {
                    toast({
                      title: "보상을 받았습니다.",
                      description: "300 기력을 받았습니다!",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                      position: "top",
                    });
                    fetch(API_URL + `/user/add-power/${user.id}`, {
                      method: 'put',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({power: 300}),
                    })
                      .then(response => response.json())
                      .then(data => {
                        user.power = data.power;
                        setUser(user);
                      })
                      .catch(error => {
                        console.error('Error:', error);
                      });
                    setIsSpecialComplete(true);
                  }
                }}
              >
                {isSpecialComplete ? "완료" : "보상 받기"}
              </Box>
            </Flex>
          </Flex>
            </Box>
        </div>
      }
    </Layout>
  );
}

interface Styles {
  container: React.CSSProperties;
  userinfoContainer: React.CSSProperties;
  questContainer: React.CSSProperties;
  userinfoText: React.CSSProperties;
  userinfoChar: React.CSSProperties;
  questType: React.CSSProperties;
  userName: React.CSSProperties;
  quest: React.CSSProperties;
}

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userinfoContainer: {
    marginTop: "5%",
    backgroundColor: "#5A5A5A",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "250px",
    width: "90%",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
  },
  userinfoText: {
    flex: 1,
    color: "white",
    marginRight: "20px",
  },
  userinfoChar: {},
  questContainer: {
    borderTop: "1px solid #ccc",
    marginTop: "10%",
    flex: 1,
    width: "80%",
  },
  questType: {
    marginTop: "4%",
    marginBottom: "4%",
    fontSize: "23px",
    fontFamily: "Font-Content",
  },
  userName: {
    fontSize: "35px",
    fontWeight: "600",
    fontFamily: "Font-Title",
  },
  quest: {
    borderBottom: "0.5px solid #ccc",
    paddingBottom: "7%",
    fontFamily: "Font-Content-Light",
  },
};

export default Home;
