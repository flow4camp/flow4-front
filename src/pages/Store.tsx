import React, { useState } from 'react';
import '../css/Store.css';
import Layout from '../components/layout';
import { Center, Image, Text, Box, Spacer, Flex } from '@chakra-ui/react';
import { StoreAccOptions, StoreClothesOptions, StoreFaceOptions, StoreHatOptions, StoreShoesOptions } from '../components/StoreOptions';
import { storeAccVariants, storeClothesVariants, storeFaceVariants, storeHatVariants, storeShoeVariants } from '../components/StoreVariants';

const Store = () => {
  // 상태(State) 설정
  // // 아이템 혹은 상품권 -> CategoryTab
  const [activeCategoryTab, setActiveCategoryTab] = useState('tab1'); // 기본적으로 첫 번째 탭이 선택되도록 설정
  // // 모자, 악세서리, 표정, 옷, 신발 -> ItemTab
  // ** ItemTab 순서: hat, acc, face, clothes, shoe (0~4) **
  const [selectedItemTab, setSelectedItemTab] = useState<number>(0);

  // ItemTabOptions array
  const itemTabOptions = [<StoreHatOptions variants={storeHatVariants} />,
    <StoreAccOptions variants={storeAccVariants} />,
    <StoreFaceOptions variants={storeFaceVariants} />,
    <StoreClothesOptions variants={storeClothesVariants} />,
    <StoreShoesOptions variants={storeShoeVariants} />
  ];
  // ItemTabOption component state 관리
  const [selectedItemTabOption, setSelectedItemTabOption] = useState<JSX.Element>(itemTabOptions[0]);

  // 탭 변경 핸들러 함수
  const handleCategoryTabChange = (tab :string) => {
    setActiveCategoryTab(tab);
  };
  const handleItemTabChange = (item: number) => {
    setSelectedItemTab(item);
    setSelectedItemTabOption(itemTabOptions[item]);
  };

  return (
    <Layout scroll='none'>
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
          <button className={activeCategoryTab === 'tab1' ? 'active-tab' : 'tab-button'}onClick={() => handleCategoryTabChange('tab1')}><Text style={{ fontFamily: 'Font-Title' }}>아이템</Text></button>
          <button className={activeCategoryTab === 'tab2' ? 'active-tab' : 'tab-button'} onClick={() => handleCategoryTabChange('tab2')}><Text style={{ fontFamily: 'Font-Title' }}>상품권</Text></button>
        </div>

        {/* 선택된 탭에 해당하는 아이템 리스트 렌더링 */}
        {activeCategoryTab === 'tab1' && (
          <div className='contents'>
            <div style={styles.tabContainer}>
              <button
                style={selectedItemTab === 0 ? styles.activeTab : styles.tab}
                onClick={() => handleItemTabChange(0)}
              >
                <img src="/icons/hat.png" style={{ width: "30px" }} alt='hats' />
              </button>
              <button
                style={selectedItemTab === 1 ? styles.activeTab : styles.tab}
                onClick={() => handleItemTabChange(1)}
              >
                <img src="/icons/glasses.png" style={{ width: "30px" }} alt='accessories' />
              </button>
              <button
                style={selectedItemTab === 2 ? styles.activeTab : styles.tab}
                onClick={() => handleItemTabChange(2)}
              >
                <img src="/icons/face_smile.png" style={{ width: "30px" }} alt='faces' />
              </button>
              <button
                style={selectedItemTab === 3 ? styles.activeTab : styles.tab}
                onClick={() => handleItemTabChange(3)}
              >
                <img src="/icons/clothes.png" style={{ width: "30px" }} alt='clothes' />
              </button>
              <button
                style={selectedItemTab === 4 ? styles.activeTab : styles.tab}
                onClick={() => handleItemTabChange(4)}
              >
                <img src="/icons/shoes.png" style={{ width: "30px" }} alt='shoes' />
              </button>
            </div>
            {selectedItemTabOption}
          </div>
        )}

        {activeCategoryTab === 'tab2' && (
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
    marginBottom: "10px",
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
