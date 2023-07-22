// Home.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import Layout from "../components/layout";

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
        <div style={styles.userinfoContainer}>
          <div style={styles.userinfoChar}>
            <NavLink to="/edit-character">
              <img src="/images/test_img.gif" alt="Edit Character" />
            </NavLink>
          </div>
          <div style={styles.userinfoText}>
            <div style={styles.userName}>{nickName}</div>
            <div style={{ fontFamily: "Font-Title-Light" }}>
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
  },
  userinfoContainer: {
    marginTop: "5%",
    backgroundColor: "#EBEEF3",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    width: "90%",
  },
  userinfoText: { flex: 1 },
  userinfoChar: {},
  questContainer: {
    borderTop: "1px solid #ccc",
    marginTop: "13%",
    flex: 1,
    width: "80%",
  },
  questType: {
    marginTop: "4%",
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
