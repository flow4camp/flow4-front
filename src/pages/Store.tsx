import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { background, useTheme } from "@chakra-ui/react";
import '../css/Store.css';
import Layout from '../components/layout';
import { Center, Image, Text, Box, Spacer, Flex } from '@chakra-ui/react';

const Store = () => {
  // 상태(State) 설정
  const [activeTab, setActiveTab] = useState('tab1'); // 기본적으로 첫 번째 탭이 선택되도록 설정
  const [selectedItem, setSelectedItem] = useState<string>("item1");
  const theme = useTheme();

  // 탭 변경 핸들러 함수
  const handleTabChange = (tab :string) => {
    setActiveTab(tab);
  };
  const handleItemTabChange = (item: string) => {
    setSelectedItem(item);
  };

  // 아이템 리스트 데이터 (여기서는 간단하게 배열로 구성)
  const tab1Items = ['Item 1A', 'Item 1B', 'Item 1C'];
  const tab2Items = ['Item 2A', 'Item 2B', 'Item 2C'];

  return (
    <Layout>
      <Box
          w='100%'
        >
          <Text
            w='fit-content'
            p={3}
            m={2}
            fontSize='2xl'
            style={{ fontFamily: 'Font-Title' }}
          >스토어</Text>
        </Box>
        {/* 탭 메뉴 */}
        <div className='tab-menu'>
          <button className={activeTab === 'tab1' ? 'active-tab' : 'tab-button'}onClick={() => handleTabChange('tab1')}><Text style={{ fontFamily: 'Font-Title' }}>아이템</Text></button>
          <button className={activeTab === 'tab2' ? 'active-tab' : 'tab-button'} onClick={() => handleTabChange('tab2')}><Text style={{ fontFamily: 'Font-Title' }}>커피</Text></button>
        </div>

        {/* 선택된 탭에 해당하는 아이템 리스트 렌더링 */}
        {activeTab === 'tab1' && (
          <div className='contents'>
          {<div>
            <div style={styles.tabContainer}>
              <button
                style={selectedItem === "hat" ? styles.activeTab : styles.tab}
                onClick={() => handleItemTabChange("hat")}
              >
                <img src="/icons/hat.png" style={{ width: "30px" }} alt='hats' />
              </button>
              <button
                style={selectedItem === "eyeglasses" ? styles.activeTab : styles.tab}
                onClick={() => handleItemTabChange("eyeglasses")}
              >
                <img src="/icons/glasses.png" style={{ width: "30px" }} alt='accessories' />
              </button>
              <button
                style={selectedItem === "ghost" ? styles.activeTab : styles.tab}
                onClick={() => handleItemTabChange("ghost")}
              >
                <img src="/icons/face_smile.png" style={{ width: "30px" }} alt='faces' />
              </button>
              <button
                style={selectedItem === "clothes" ? styles.activeTab : styles.tab}
                onClick={() => handleItemTabChange("clothes")}
              >
                <img src="/icons/clothes.png" style={{ width: "30px" }} alt='clothes' />
              </button>
              <button
                style={selectedItem === "shoes" ? styles.activeTab : styles.tab}
                onClick={() => handleItemTabChange("shoes")}
              >
                <img src="/icons/shoes.png" style={{ width: "30px" }} alt='shoes' />
              </button>
            </div>
            <div className="grid-container">
              <div className="grid-item">Item 1</div>
              <div className="grid-item">Item 2</div>
              <div className="grid-item">Item 3</div>
            </div>
            </div>
          }
          </div>
        )}

        {activeTab === 'tab2' && (
          <div className='contents'>
                    {
            <div className="one-grid-container">
              <div className="one-grid-item">Item 1</div>
              <div className="one-grid-item">Item 2</div>
            </div>
          }
          </div>
        )}
      </Layout>
  );
};

interface Styles {
  container: React.CSSProperties;
  charContainer: React.CSSProperties;
  tabContainer: React.CSSProperties;
  tab: React.CSSProperties;
  activeTab: React.CSSProperties;
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
    justifyContent: "space-evenly",
    width: "100%",
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
    borderRadius: "14px",
    background: "#ccc",
  },
};

export default Store;
