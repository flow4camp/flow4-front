// Home.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/layout";
import UserCharacter from "../components/UserCharacter";
import { Center, Button, Text, Box, Spacer, Flex } from '@chakra-ui/react';

function Home() {

  const nickName = "user1";
  const winNum = 1;
  const looseNum = 12;
  const dailyQuestList = [
    { id: 1, text: "첫 번째 퀘스트" },
    { id: 2, text: "두 번째 퀘스트" },
    { id: 3, text: "세 번째 퀘스트" },
  ];
  const specialQuest = "특별 퀘스트";

  return (
    <Layout>
      <div style={styles.container}>
      <Box w='100%'>
          <Text
            w='fit-content'
            p={3}
            m={2}
            paddingBottom={0}
            marginBottom={0}
            fontSize='2xl'
            style={{ fontFamily: 'Font-Title' }}
          >지하그라운드</Text>
        </Box>
        <div style={styles.userinfoContainer}>
          <div style={styles.userinfoChar}>
            <NavLink to="/edit-character">
              <UserCharacter edit={false} selectedHat={null} selectedAcc={null} />     {/* selected stuffs are null for now!! */}
            </NavLink>
          </div>
          <div style={styles.userinfoText}>
            <div style={styles.userName}>{nickName}</div>
            <div style={{ fontFamily: "Font-Content" }}>
              전적 {winNum}승 {looseNum}패
            </div>
          </div>
        </div>
        <div style={styles.questContainer}>
          <div style={styles.questType}>일일 퀘스트</div>
          <div style={styles.quest}>
            {dailyQuestList.map((quest) => (
              <div key={quest.id}>{quest.text}</div>
            ))}
          </div>
          <div style={styles.questType}>특별 퀘스트</div>
          <div style={styles.quest}>{specialQuest}</div>
        </div>
      </div>
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
  },
  userinfoText: { flex: 1, color: 'white' },
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
    fontSize: "40px",
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
