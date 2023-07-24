import React, { Component, useState } from "react";
import { Button, useTheme } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";
import UserCharacter from "../components/UserCharacter";
import { hatVariants, faceVariants, accVariants, clothesVariants, shoeVariants } from "../components/AssetVariants";
import { HatOptions, AccOptions } from "../components/AssetOptions";

type AssetVariant = {
  id: number;
  src: string;
} | null ;      // nullable

function EditCharacter() {
  const navigate = useNavigate();

  // tab option 중 선택한 item state 관리 
  const [selectedHat, setSelectedHat] = useState<AssetVariant>(null);
  const [selectedAcc, setSelectedAcc] = useState<AssetVariant>(null);

  // ** tab 순서: hat, acc, face, clothes, shoe (0~4) **
  const tabOptions = [<HatOptions variants={hatVariants} selectedVariant={selectedHat} setSelectedVariant={setSelectedHat} />, 
    <AccOptions variants={accVariants} selectedVariant={selectedAcc} setSelectedVariant={setSelectedAcc} />,
  ];

  // tab state 관리
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedTabOptions, setSelectedTabOptions] = useState<JSX.Element>(tabOptions[0]);

  const handleTabClick = (tab: number) => {
    setSelectedTab(tab);
    setSelectedTabOptions(tabOptions[tab]);
  };
  const theme = useTheme();
  // const itemNumbers = Array.from({ length: 36 }, (_, index) => index + 1);

  return (
    <div style={styles.container}>
      <div
        style={{
          height: "50%",
          backgroundColor: theme.colors.ziha_charcoal,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: 'relative'
        }}
      >
        <UserCharacter edit={true} selectedHat={selectedHat} selectedAcc={selectedAcc} />
        <ChevronLeftIcon 
          boxSize={10} 
          color='white' 
          position='absolute' 
          left={0} 
          top={0} 
          m={2}
          onClick={() => (navigate('/home'))}
        />
        <Button
          position='absolute' 
          right={0} 
          top={0} 
          m={2}
          p={2}
          style={{ fontFamily: "Font-Content-Light" }}
          fontSize='md'
          bg='transparent'
          color='white'
          _active={{ backgroundColor: 'whiteAlpha.400' }}
          _focus={{ backgroundColor: 'whiteAlpha.400' }}
        >
          저장하기
        </Button>
      </div>
      <div style={styles.tabContainer}>
        <button
          style={selectedTab === 0 ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick(0)}
        >
          <img src="/icons/hat.png" style={{ width: "30px" }} alt="hat tab" />
        </button>
        <button
          style={selectedTab === 1 ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick(1)}
        >
          <img src="/icons/glasses.png" style={{ width: "30px" }} alt="accessory tab" />
        </button>
        <button
          style={selectedTab === 2 ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick(2)}
        >
          <img src="/icons/face_smile.png" style={{ width: "30px" }} alt="face tab" />
        </button>
        <button
          style={selectedTab === 3 ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick(3)}
        >
          <img src="/icons/clothes.png" style={{ width: "30px" }} alt="clothes tab" />
        </button>
        <button
          style={selectedTab === 4 ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick(4)}
        >
          <img src="/icons/shoes.png" style={{ width: "30px" }} alt="shoes tab" />
        </button>
      </div>
      {/* <div style={styles.itemContainerWrapper}>
        <div style={styles.itemContainer}>
          {itemNumbers.map((itemNumber) => (
            <div key={itemNumber} style={styles.item}>
              {itemNumber}
            </div>
          ))}
        </div>
      </div> */}
      {/* <HatOptions  
        variants={hatVariants}
        selectedVariant={selectedHat}
        setSelectedVariant={setSelectedHat}
      /> */}
      {/* <AccOptions  
        variants={accVariants}
        selectedVariant={selectedAcc}
        setSelectedVariant={setSelectedAcc}
      /> */}
      {selectedTabOptions}
    </div>
  );
}

interface Styles {
  container: React.CSSProperties;
  charContainer: React.CSSProperties;
  tabContainer: React.CSSProperties;
  tab: React.CSSProperties;
  activeTab: React.CSSProperties;
  // itemContainer: React.CSSProperties;
  // item: React.CSSProperties;
  // itemContainerWrapper: React.CSSProperties;
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
    padding: "5px 16px",
    margin: "4px 5px",
    cursor: "pointer",
    border: "none",
    background: "transparent",
  },
  activeTab: {
    padding: "5px 16px",
    margin: "4px 5px",
    cursor: "pointer",
    border: "none",
    background: "#ccc",
    borderRadius: '0.5em',
  },
  // itemContainerWrapper: {
  //   overflowY: "auto",
  // },
  // itemContainer: {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(4, 1fr)",
  //   gridTemplateRows: "repeat(4, 1fr)",
  //   rowGap: "1%",
  //   justifyContent: "center",
  //   justifyItems: "center",
  // },
  // item: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "80px",
  //   height: "80px",
  //   backgroundColor: "green",
  // },
};

export default EditCharacter;
