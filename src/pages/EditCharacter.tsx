import React, { useState } from "react";
import { background, useTheme } from "@chakra-ui/react";

function EditCharacter() {
  const [selectedItem, setSelectedItem] = useState<string>("item1");

  const handleTabClick = (item: string) => {
    setSelectedItem(item);
  };
  const theme = useTheme();
  const itemNumbers = Array.from({ length: 36 }, (_, index) => index + 1);

  return (
    <div style={styles.container}>
      <div
        style={{
          height: "50%",
          backgroundColor: theme.colors.ziha_charcoal,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={require("../assets/ghost-basic-0.png")}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={styles.tabContainer}>
        <button
          style={selectedItem === "clothes" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("clothes")}
        >
          <img src="/icons/clothes.png" style={{ width: "30px" }} />
        </button>
        <button
          style={selectedItem === "eyeglasses" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("eyeglasses")}
        >
          <img src="/icons/eyeglasses.png" style={{ width: "30px" }} />
        </button>
        <button
          style={selectedItem === "hat" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("hat")}
        >
          <img src="/icons/hat.png" style={{ width: "30px" }} />
        </button>
        <button
          style={selectedItem === "shoes" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("shoes")}
        >
          <img src="/icons/shoes.png" style={{ width: "30px" }} />
        </button>
        <button
          style={selectedItem === "ghost" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("ghost")}
        >
          <img src="/icons/ghost.png" style={{ width: "30px" }} />
        </button>
      </div>
      <div style={styles.itemContainerWrapper}>
        <div style={styles.itemContainer}>
          {itemNumbers.map((itemNumber) => (
            <div key={itemNumber} style={styles.item}>
              {itemNumber}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface Styles {
  container: React.CSSProperties;
  charContainer: React.CSSProperties;
  tabContainer: React.CSSProperties;
  tab: React.CSSProperties;
  activeTab: React.CSSProperties;
  itemContainer: React.CSSProperties;
  item: React.CSSProperties;
  itemContainerWrapper: React.CSSProperties;
}

const styles: Styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  charContainer: {
    height: "50%",
  },
  tabContainer: {
    display: "flex",
    alignItems: "center",
  },
  tab: {
    padding: "8px 16px",
    margin: "0 5px",
    cursor: "pointer",
    border: "none",
    background: "transparent",
  },
  activeTab: {
    padding: "8px 16px",
    margin: "0 5px",
    cursor: "pointer",
    border: "none",
    background: "#ccc",
  },
  itemContainerWrapper: {
    overflowY: "auto",
  },
  itemContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    rowGap: "1%",
    justifyContent: "center",
    justifyItems: "center",
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80px",
    height: "80px",
    backgroundColor: "green",
  },
};

export default EditCharacter;
