import React, { useEffect, useState } from 'react';
import '../css/Store.css';
import Layout from '../components/layout';
import { Center, Image, Text, Box, Spacer, Flex } from '@chakra-ui/react';
import { StoreAccOptions, StoreClothesOptions, StoreFaceOptions, StoreHatOptions, StoreShoesOptions } from '../components/StoreOptions';
import { storeAccVariants, storeClothesVariants, storeFaceVariants, storeHatVariants, storeShoeVariants } from '../components/StoreVariants';
import { API_URL } from '../api';
import { useUserContext } from '../context/UserContext';
import { RealItemBacchus, RealItemCoffee, RealItemLemona } from '../components/RealItems';

const Store = () => {
  const { user, setUser } = useUserContext();
  const [myHat, setMyHat] = useState<number[]>([]);
  const [myAcc, setMyAcc] = useState<number[]>([]);
  const [myFace, setMyFace] = useState<number[]>([]);
  const [myClothes, setMyClothes] = useState<number[]>([]);
  const [myShoes, setMyShoes] = useState<number[]>([]);

  useEffect(() => {
    fetch(API_URL + `/buy/user/${user.id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.statusCode === 500) {
          console.log('아이템 정보를 가져오는 데 실패했습니다.');
        }
        else {
          var hat:number[] = [];
          var acc:number[] = [];
          var face:number[] = [];
          var clothes:number[] = [];
          var shoes:number[] = [];
          data.forEach((item: any) => {
            if (item.itemType === 'hat') {
              hat.push(item.itemId);
            } else if (item.itemType === 'acc') {
              acc.push(item.itemId);
            } else if (item.itemType === 'face') {
              face.push(item.itemId);
            } else if (item.itemType === 'clothes') {
              clothes.push(item.itemId);
            } else if (item.itemType === 'shoes') {
              shoes.push(item.itemId);
            }
            setMyHat(hat);
            setMyAcc(acc);
            setMyFace(face);
            setMyClothes(clothes);
            setMyShoes(shoes);
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  const [activeCategoryTab, setActiveCategoryTab] = useState('tab1'); // 기본적으로 첫 번째 탭이 선택되도록 설정

  // ** ItemTab 순서: hat, acc, face, clothes, shoe (0~4) **
  const [selectedItemTab, setSelectedItemTab] = useState<number>(0);

  // 탭 변경 핸들러 함수
  const handleCategoryTabChange = (tab :string) => {
    setActiveCategoryTab(tab);
  };
  const handleItemTabChange = (item: number) => {
    setSelectedItemTab(item);
  };

  return (
    <Layout scroll='none'>
      <Flex
        w='100%'
        justify={'space-between'}
        align={'center'}
        >
          <Text
            w='fit-content'
            p={3}
            m={2}
            fontSize='2xl'
            style={{ fontFamily: 'Font-Title' }}
        >스토어</Text>
        <Flex direction='row' align='center' justify='center' >
          <Image src={require('../assets/coin.png')} w={8} h={8} />
          <Text
            w='fit-content'
            p={3}
            m={2}
            paddingLeft={0}
            marginLeft={0}
            fontSize='xl'
            style={{ fontFamily: 'Font-Title' }}
          >{`${user.power}`}</Text>
        </Flex>
        </Flex>
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
          {
            selectedItemTab === 0 ? <StoreHatOptions variants={storeHatVariants} myList={myHat}  />
            : selectedItemTab === 1 ?<StoreAccOptions variants={storeAccVariants} myList={myAcc}  />
            : selectedItemTab === 2 ?<StoreFaceOptions variants={storeFaceVariants} myList={myFace}  />
            : selectedItemTab === 3? <StoreClothesOptions variants={storeClothesVariants} myList={myClothes}  />
            : selectedItemTab === 4 && <StoreShoesOptions variants={storeShoeVariants} myList={myShoes}  />
          }
          </div>
        )}

        {activeCategoryTab === 'tab2' && (
          <div className='contents'>
            <div className="one-grid-container">
              <RealItemCoffee />
              <RealItemBacchus />
              <RealItemLemona />
            </div>
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
