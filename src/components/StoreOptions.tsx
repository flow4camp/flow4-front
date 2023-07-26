import React, { useState } from "react";
import { Flex, Text, Image, Box, useToast } from "@chakra-ui/react";

type StoreVariant = {
    id: number;
    src: string;
    price: number;
} | null ;      // nullable

type StoreCategoryProps = {
    variants: StoreVariant[];
};
  
export const StoreHatOptions: React.FC<StoreCategoryProps> = ({ variants }) => {

    const toast = useToast();

    const buySelectedHat = (hat: StoreVariant) => {

        // 성공적으로 구매했음을 toast로 알려주기
        toast({
            position: 'bottom',
            // title: '구매 성공!',
            // description: '아이템을 성공적으로 구매하였습니다.',
            // status: 'success',
            duration: 3000,
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

export const StoreAccOptions: React.FC<StoreCategoryProps> = ({ variants }) => {

    const toast = useToast();

    const buySelectedAcc = (acc: StoreVariant) => {

        // 성공적으로 구매했음을 toast로 알려주기
        toast({
            position: 'bottom',
            // title: '구매 성공!',
            // description: '아이템을 성공적으로 구매하였습니다.',
            // status: 'success',
            duration: 3000,
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
                                backgroundSize: "90% auto",
                                backgroundPosition: "center center",
                                width: "140px",
                                height: "140px",
                                marginTop: '5px',
                                backgroundRepeat: 'no-repeat',
                                // marginLeft: '20px'
                            }}
                        />
                        <Flex
                            w='95%'
                            m={1}
                            align='center'
                            justify='center'
                            bg='ziha_charcoal_gray'
                            borderRadius='0.5em'
                            p={1}
                            onClick={() => buySelectedAcc(variant)}
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

export const StoreFaceOptions: React.FC<StoreCategoryProps> = ({ variants }) => {

    const toast = useToast();

    const buySelectedFace = (face: StoreVariant) => {

        // 성공적으로 구매했음을 toast로 알려주기
        toast({
            position: 'bottom',
            // title: '구매 성공!',
            // description: '아이템을 성공적으로 구매하였습니다.',
            // status: 'success',
            duration: 3000,
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
                                backgroundSize: "160% auto",
                                backgroundPosition: "top center",
                                width: "130px",
                                height: "130px",
                                marginLeft: '20px'
                            }}
                        />
                        <Flex
                            w='95%'
                            m={1}
                            align='center'
                            justify='center'
                            bg='ziha_charcoal_gray'
                            borderRadius='0.5em'
                            p={1}
                            onClick={() => buySelectedFace(variant)}
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

export const StoreClothesOptions: React.FC<StoreCategoryProps> = ({ variants }) => {

    const toast = useToast();

    const buySelectedClothes = (clothes: StoreVariant) => {

        // 성공적으로 구매했음을 toast로 알려주기
        toast({
            position: 'bottom',
            // title: '구매 성공!',
            // description: '아이템을 성공적으로 구매하였습니다.',
            // status: 'success',
            duration: 3000,
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
                                backgroundSize: "100% auto",
                                backgroundPosition: "center center",
                                width: "160px",
                                height: "160px",
                                // marginTop: '10px',
                                marginLeft: '2px'
                            }}
                        />
                        <Flex
                            w='95%'
                            m={1}
                            align='center'
                            justify='center'
                            bg='ziha_charcoal_gray'
                            borderRadius='0.5em'
                            p={1}
                            onClick={() => buySelectedClothes(variant)}
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

export const StoreShoesOptions: React.FC<StoreCategoryProps> = ({ variants }) => {

    const toast = useToast();

    const buySelectedShoe = (shoe: StoreVariant) => {

        // 성공적으로 구매했음을 toast로 알려주기
        toast({
            position: 'bottom',
            // title: '구매 성공!',
            // description: '아이템을 성공적으로 구매하였습니다.',
            // status: 'success',
            duration: 3000,
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
                                backgroundSize: "190% auto",
                                backgroundPosition: "bottom center",
                                width: "160px",
                                height: "160px",
                            }}
                        />
                        <Flex
                            w='95%'
                            m={1}
                            align='center'
                            justify='center'
                            bg='ziha_charcoal_gray'
                            borderRadius='0.5em'
                            p={1}
                            onClick={() => buySelectedShoe(variant)}
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

interface Styles {
    itemContainer: React.CSSProperties;
    item: React.CSSProperties;
    itemContainerWrapper: React.CSSProperties;
}

const styles: Styles = {
    itemContainerWrapper: {
        overflowY: "auto",
    },
    itemContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        // gridTemplateRows: 'auto',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: "7% 5%",
        padding: "14px",
        justifyContent: "center",
        justifyItems: "center",
        marginTop: '2%',
        // marginBottom: '10px',
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
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
    },
};