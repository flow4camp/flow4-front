import React, { useState } from "react";
import { Flex, Text, Image, Box, useToast } from "@chakra-ui/react";

type StoreVariant = {
    id: number;
    src: string;
    price: number;
} | null ;      // nullable

type StoreCategoryProps = {
    variants: StoreVariant[];
    // selectedVariant: StoreVariant;
};
  
export const StoreHatOptions: React.FC<StoreCategoryProps> = ({ variants }) => {

    // const [newSelectedHat, setNewSelectedHat] = useState(selectedVariant);
    const toast = useToast();

    const buySelectedHat = (hat: StoreVariant) => {

        // 성공적으로 구매했음을 toast로 알려주기
        toast({
            position: 'bottom',
            // title: '구매 성공!',
            // description: '아이템을 성공적으로 구매하였습니다.',
            // status: 'success',
            duration: 5000,
            isClosable: true,
            render: () => (
                <Box 
                    color='ziha_charcoal' 
                    p={3} 
                    bg='ziha_green_gray' 
                    m={3} 
                    boxShadow='0px 2px 6px rgba(0, 0, 0, 0.2)' 
                >
                    <Text style={{ fontFamily: 'Font-Content'}}
                    >구매 성공!</Text>
                    <Text fontSize='sm' style={{ fontFamily: 'Font-Content-Light'}}
                    >아이템을 성공적으로 구매하였습니다.</Text>
                </Box>
            ),
        });
    };

    return (
        <div style={styles.itemContainerWrapper}>
            <div style={styles.itemContainer}>
                {variants.map((variant) => (
                    <Flex 
                        key={variant?.id}
                        direction='column'
                        style={styles.item}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${variant?.src})`,
                                backgroundSize: "170% auto",
                                backgroundPosition: "top center",
                                width: "160px",
                                height: "160px",
                                marginTop: '20px',
                            }}
                            // onClick={() => setNewSelectedHat(variant)}
                        />
                        <Flex
                            w='95%'
                            m={1}
                            align='center'
                            justify='center'
                            bg='ziha_charcoal_gray'
                            borderRadius='0.5em'
                            p={1}
                            onClick={() => buySelectedHat(variant)}
                        >
                            <Image src={require('../assets/coin.png')} w={5} h={5} />
                            <Text
                                style={{ fontFamily: 'Font-Content'}}
                                color='white'
                                fontSize='sm'
                            >{variant?.price}</Text>
                        </Flex>
                    </Flex>
                ))}
            </div>
        </div>
    );
};

// export const StoreAccOptions: React.FC<StoreCategoryProps> = ({ variants, selectedVariant, setSelectedVariant }) => {

//     const [newSelectedAcc, setNewSelectedAcc] = useState(selectedVariant);
//     const handleSelectedAcc = (newSelectedAcc: AssetVariant) => {
//         setNewSelectedAcc(newSelectedAcc);
//         setSelectedVariant(newSelectedAcc);
//     }

//     return (
//         <div style={styles.itemContainerWrapper}>
//             <div style={styles.itemContainer}>
//                 <div style={newSelectedAcc === null ? styles.selectedItem : styles.item}>
//                     <img
//                         src={require("../assets/null.png")}
//                         alt="No Accessory"
//                         onClick={() => handleSelectedAcc(null)}
//                     />
//                 </div>
//                 {variants.map((variant) => (
//                     <div 
//                         key={variant?.id}
//                         // style={styles.item} 
//                         style={newSelectedAcc === variant ? styles.selectedItem : styles.item}
//                     >
//                         <div
//                             style={{
//                                 backgroundImage: `url(${variant?.src})`,
//                                 backgroundSize: "120% auto",
//                                 backgroundPosition: "center center",
//                                 width: "100px",
//                                 height: "100px",
//                                 marginTop: '20px',
//                                 marginLeft: '10px'
//                             }}
//                             onClick={() => handleSelectedAcc(variant)}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export const StoreFaceOptions: React.FC<StoreCategoryProps> = ({ variants, selectedVariant, setSelectedVariant }) => {

//     const [newSelectedFace, setNewSelectedFace] = useState(selectedVariant);
//     const handleSelectedAcc = (newSelectedFace: AssetVariant) => {
//         setNewSelectedFace(newSelectedFace);
//         setSelectedVariant(newSelectedFace);
//     }

//     return (
//         <div style={styles.itemContainerWrapper}>
//             <div style={styles.itemContainer}>
//                 {variants.map((variant) => (
//                     <div 
//                         key={variant?.id}
//                         style={newSelectedFace === variant ? styles.selectedItem : styles.item}
//                     >
//                         <div
//                             style={{
//                                 backgroundImage: `url(${variant?.src})`,
//                                 backgroundSize: "220% auto",
//                                 backgroundPosition: "center center",
//                                 width: "100px",
//                                 height: "100px",
//                                 marginTop: '70px',
//                                 marginLeft: '10px'
//                             }}
//                             onClick={() => handleSelectedAcc(variant)}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export const StoreClothesOptions: React.FC<StoreCategoryProps> = ({ variants, selectedVariant, setSelectedVariant }) => {

//     const [newSelectedClothes, setNewSelectedClothes] = useState(selectedVariant);
//     const handleSelectedClothes = (newSelectedClothes: AssetVariant) => {
//         setNewSelectedClothes(newSelectedClothes);
//         setSelectedVariant(newSelectedClothes);
//     }

//     return (
//         <div style={styles.itemContainerWrapper}>
//             <div style={styles.itemContainer}>
//                 <div style={newSelectedClothes === null ? styles.selectedItem : styles.item}>
//                     <img
//                         src={require("../assets/null.png")}
//                         alt="No Clothes"
//                         onClick={() => handleSelectedClothes(null)}
//                     />
//                 </div>
//                 {variants.map((variant) => (
//                     <div 
//                         key={variant?.id}
//                         style={newSelectedClothes === variant ? styles.selectedItem : styles.item}
//                     >
//                         <div
//                             style={{
//                                 backgroundImage: `url(${variant?.src})`,
//                                 backgroundSize: "120% auto",
//                                 backgroundPosition: "bottom center",
//                                 width: "100px",
//                                 height: "100px",
//                                 marginTop: '10px',
//                                 marginLeft: '2px'
//                             }}
//                             onClick={() => handleSelectedClothes(variant)}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export const StoreShoesOptions: React.FC<StoreCategoryProps> = ({ variants, selectedVariant, setSelectedVariant }) => {

//     const [newSelectedShoes, setNewSelectedShoes] = useState(selectedVariant);
//     const handleSelectedShoes = (newSelectedShoes: AssetVariant) => {
//         setNewSelectedShoes(newSelectedShoes);
//         setSelectedVariant(newSelectedShoes);
//     }

//     return (
//         <div style={styles.itemContainerWrapper}>
//             <div style={styles.itemContainer}>
//                 <div style={newSelectedShoes === null ? styles.selectedItem : styles.item}>
//                     <img
//                         src={require("../assets/null.png")}
//                         alt="No Shoes"
//                         onClick={() => handleSelectedShoes(null)}
//                     />
//                 </div>
//                 {variants.map((variant) => (
//                     <div 
//                         key={variant?.id}
//                         style={newSelectedShoes === variant ? styles.selectedItem : styles.item}
//                     >
//                         <div
//                             style={{
//                                 backgroundImage: `url(${variant?.src})`,
//                                 backgroundSize: "190% auto",
//                                 backgroundPosition: "bottom center",
//                                 width: "100px",
//                                 height: "100px",
//                                 marginBottom: '50px',
//                             }}
//                             onClick={() => handleSelectedShoes(variant)}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

interface Styles {
    itemContainer: React.CSSProperties;
    item: React.CSSProperties;
    selectedItem: React.CSSProperties;
    itemContainerWrapper: React.CSSProperties;
}

const styles: Styles = {
    itemContainerWrapper: {
        overflowY: "auto",
    },
    itemContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: 'auto',
        gap: "7% 5%",
        padding: "14px",
        justifyContent: "center",
        justifyItems: "center",
        marginTop: '2%',
    },
    item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "160px",
        height: "160px",
        backgroundColor: "#f0f0f0",
        border: 'none',
        borderRadius: '0.7em',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)'
    },
    selectedItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "160px",
        height: "160px",
        backgroundColor: "#f0f0f0",
        outline: '2px solid #5A5A5A',
        borderRadius: '0.7em',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.4)'
    }
};