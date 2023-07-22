import React, { useState } from "react";

function EditCharacter() {
  const [selectedItem, setSelectedItem] = useState<string>("item1");

  const handleTabClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div style={styles.container}>
      <div style={styles.charContainer}></div>
      <div style={styles.tabContainer}>
        <button
          style={selectedItem === "clothes" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("clothes")}
        >
          <img src="/icons/clothes.png" style={{ width: "25px" }} />
        </button>
        <button
          style={selectedItem === "eyeglasses" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("eyeglasses")}
        >
          <img src="/icons/eyeglasses.png" style={{ width: "25px" }} />
        </button>
        <button
          style={selectedItem === "hat" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("hat")}
        >
          <img src="/icons/hat.png" style={{ width: "25px" }} />
        </button>
        <button
          style={selectedItem === "shoes" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("shoes")}
        >
          <img src="/icons/shoes.png" style={{ width: "25px" }} />
        </button>
        <button
          style={selectedItem === "ghost" ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick("ghost")}
        >
          <img src="/icons/ghost.png" style={{ width: "25px" }} />
        </button>
      </div>
      <div style={styles.itemContainer}>
        {selectedItem === "item1" && <div>Content for Item 1</div>}
        {selectedItem === "item2" && <div>Content for Item 2</div>}
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
}

const styles: Styles = {
  container: {
    height: "100vh",
  },
  charContainer: {
    height: "50%",
  },
  tabContainer: {
    display: "flex",
    alignItems: "center",
    // padding: "10px",
    borderBottom: "1px solid #ccc",
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
  itemContainer: {},
};

export default EditCharacter;
