// Home.tsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import UserCharacter from "../components/UserCharacter";
import { Center, Divider, Text, Box, Image, Flex, Checkbox, useTheme } from '@chakra-ui/react';
import { faceVariants } from "../components/AssetVariants";
import { useUserContext } from '../context/UserContext';

function Home() {

  const theme = useTheme();
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();

  const nickName = "유령이";    // 유령이름
  const attendance = 17;      // 누적 출석 일수
  const winNum = 1;
  const looseNum = 12;
  const lineNum = 1;          // 등록된 출근 호선 번호
  const lineNumColor = theme.colors['line_' + lineNum + '_color'];
  const dailyQuestList = [
    { id: 1, text: "첫 번째 퀘스트" },
    { id: 2, text: "두 번째 퀘스트" },
    { id: 3, text: "세 번째 퀘스트" },
  ];
  const specialQuest = "특별 퀘스트";

  return (
    <Layout>
        {user &&
        <div style={styles.container}>
        <Box w='100%'>
          <Text
            w='fit-content'
            p={3}
            m={2}
            paddingBottom={0}
            marginBottom={0}
            fontSize='lg'
            style={{ fontFamily: 'Font-Title-Light' }}
          >{user.username}님,</Text>
          <Text
            w='fit-content'
            paddingLeft={3}
            marginLeft={2}
            fontSize='2xl'
            style={{ fontFamily: 'Font-Title' }}
          >
            좋은 아침입니다!
          </Text>
        </Box>
        <div style={styles.userinfoContainer}>
          <div style={styles.userinfoChar}>
            <NavLink to="/edit-character">
              <UserCharacter
                edit={false}
                selectedHat={null}
                selectedAcc={null}
                selectedFace={faceVariants[0]}
                selectedClothes={null}
                selectedShoe={null}
              />     {/* selected stuffs are null for now!! */}
            </NavLink>
          </div>
          <div style={styles.userinfoText}>
            <div style={styles.userName}>{nickName}</div>
            <Text
              style={{ fontFamily: "Font-Content" }}
              p={3}
              paddingBottom={2}
            >지하출근 {attendance}일차</Text>
            <Text style={{ fontFamily: "Font-Content-Light" }} fontSize='sm' >
              오늘의 전적 {winNum}승 {looseNum}패
            </Text>
            <Text style={{ fontFamily: "Font-Content-Light" }} fontSize='sm' >
              누적 전적 {winNum+10}승 {looseNum+15}패
            </Text>
          </div>
        </div>
        <Box
          w='90%'
          h='80px'
          borderRadius='1.3em'
          marginTop={4}
          bg='#e5e5e5'
          onClick={() => (navigate('/battle'))}   // 매칭 modal 바로 열리게 하기??
          boxShadow='0px 2px 6px rgba(0, 0, 0, 0.1)'
        >
          <Center w='100%' h='100%' position='relative' >
            <Box position='absolute' w='100%' h='4px' bg={lineNumColor}></Box>
            <Box
              position='absolute'
              w='8px' h='8px'
              borderRadius='4px'
              bg='white'
              boxShadow={'0 0 0 3px ' + lineNumColor}
              left={10} />
            <Box
              position='absolute'
              w='8px' h='8px'
              borderRadius='4px'
              bg='white'
              boxShadow={'0 0 0 3px ' + lineNumColor}
              right={10} />
            <Flex position='absolute' direction='row' gap={2} p={2} bg='#e5e5e5'>
              <Image src='/icons/dice-alt.svg' w={6} h={6} />
              <Text
                color='ziha_charcoal'
                style={{ fontFamily: "Font-Content" }}
                fontSize='lg'
              >{lineNum}호선 배틀 바로가기</Text>
            </Flex>
          </Center>
        </Box>
        {/* <div style={styles.questContainer}>
          <div style={styles.questType}>일일 퀘스트</div>
          <div style={styles.quest}>
            {dailyQuestList.map((quest) => (
              <div key={quest.id}>{quest.text}</div>
            ))}
          </div>
          <div style={styles.questType}>특별 퀘스트</div>
          <div style={styles.quest}>{specialQuest}</div>
        </div> */}
        <Box
          w='90%'
          borderRadius='2em'
          marginTop={4}
          boxShadow='0px 2px 6px rgba(0, 0, 0, 0.1)'
        >
          <Flex
            direction='column'
            gap={1}
            m={2}
            p={2}
            paddingTop={0}
          >
            <Text
              fontSize='lg'
              style={{ fontFamily: "Font-Content" }}
              w='fit-content'
              marginLeft={2}
              marginTop={2}
            >오늘의 퀘스트</Text>
            <Divider borderColor='ziha_charcoal_gray' w='50%' marginBottom={2}/>
            {dailyQuestList.map((quest) => (
              <Checkbox
                key={quest.id}
                size='sm'
                style={{ fontFamily: "Font-Content-Light" }}
                w='fit-content'
                marginLeft={1}
                fontSize='lg'
              >{quest.text}</Checkbox>
            ))}
          </Flex>
        </Box>
        <Box
          w='90%'
          borderRadius='2em'
          marginTop={4}
          boxShadow='0px 2px 6px rgba(0, 0, 0, 0.1)'
          marginBottom={6}
        >
          <Flex
            direction='column'
            gap={1}
            m={2}
            p={2}
            paddingTop={0}
          >
            <Text
              fontSize='lg'
              style={{ fontFamily: "Font-Content" }}
              w='fit-content'
              marginLeft={2}
              marginTop={2}
            >특별 퀘스트</Text>
            <Divider borderColor='ziha_charcoal_gray' w='50%' marginBottom={2} />
              <Checkbox
                size='sm'
                style={{ fontFamily: "Font-Content-Light" }}
                w='fit-content'
                marginLeft={1}
              >{specialQuest}</Checkbox>
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
    // height: "30%",
    height: '250px',
    width: "90%",
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)'
  },
  userinfoText: {
    flex: 1,
    color: 'white',
    marginRight: '20px',
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
