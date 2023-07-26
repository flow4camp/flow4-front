import React, { useEffect, useState } from "react";
import { Flex, Text, Image, Box, useToast } from "@chakra-ui/react";
import { API_URL } from '../api';
import { useUserContext } from '../context/UserContext';

type StoreVariant = {
    id: number;
    src: string;
    price: number;
} | null ;      // nullable

type StoreCategoryProps = {
    variants: StoreVariant[];
    myList: number[];
};

const failedToast = () => (
    <Box
        color='ziha_charcoal'
        p={3}
        bg='ziha_purple'
        m={3}
        boxShadow='0px 2px 6px rgba(0, 0, 0, 0.2)'
    >
        <Text style={{ fontFamily: 'Font-Content' }}
        >구매 실패</Text>
        <Text fontSize='sm' style={{ fontFamily: 'Font-Content-Light' }}
        >기력이 부족해 구매할 수 없습니다.</Text>
    </Box>
);

const successToast = () => (
    <Box
        color='ziha_charcoal'
        p={3}
        bg='ziha_green_gray'
        m={3}
        boxShadow='0px 2px 6px rgba(0, 0, 0, 0.2)'
    >
        <Text style={{ fontFamily: 'Font-Content' }}
        >구매 성공!</Text>
        <Text fontSize='sm' style={{ fontFamily: 'Font-Content-Light' }}
        >아이템을 성공적으로 구매하였습니다.</Text>
    </Box>
);

export const StoreHatOptions: React.FC<StoreCategoryProps> = ({ variants, myList }) => {
    const toast = useToast();
    const { user, setUser } = useUserContext();

    const buySelectedHat = (hat: StoreVariant) => {
        if (user.power < hat!.price) {
            toast({
                position: 'bottom',
                duration: 3000,
                isClosable: true,
                render: failedToast,
            });
            return;
        }
        const requestData = {
            itemType: 'hat',
            itemId: hat!.id,
            userId: user.id,
            price: hat!.price,
        };

        fetch(API_URL + '/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => {
            if (response.status === 201) {
                myList.push(hat!.id);
                user.power -= hat!.price;
                setUser(user);
                toast({
                    position: 'bottom',
                    duration: 3000,
                    isClosable: true,
                    render: successToast,
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
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
                        { myList.includes(variant!.id) ?
                        <Flex
                                w='95%'
                                m={1}
                                align='center'
                                justify='center'
                                bg='ziha_gray'
                                borderRadius='0.5em'
                                p={1}
                            >
                                <Text
                                    style={{ fontFamily: 'Font-Content' }}
                                    color='white'
                                    fontSize='sm'
                                >구매 완료</Text>
                            </Flex>
                            : <Flex
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
                                    style={{ fontFamily: 'Font-Content' }}
                                    color='white'
                                    fontSize='sm'
                                >{variant?.price}</Text>
                            </Flex>
                        }
                    </Flex>
                ))}
            </div>
        </div>
    );
};

export const StoreAccOptions: React.FC<StoreCategoryProps> = ({ variants, myList  }) => {

    const toast = useToast();
    const { user, setUser } = useUserContext();

    const buySelectedAcc = (acc: StoreVariant) => {
        if (user.power < acc!.price) {
            toast({
                position: 'bottom',
                duration: 3000,
                isClosable: true,
                render: failedToast,
            });
            return;
        }
        const requestData = {
            itemType: 'acc',
            itemId: acc!.id,
            userId: user.id,
            price: acc!.price,
        };

        fetch(API_URL + '/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => {
            if (response.status === 201) {
                myList.push(acc!.id);
                user.power -= acc!.price;
                setUser(user);
                toast({
                    position: 'bottom',
                    duration: 3000,
                    isClosable: true,
                    render: successToast,
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
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
                                width: "140px",
                                height: "140px",
                                marginTop: '5px',
                                // marginLeft: '20px'
                            }}
                        />
                        {myList.includes(variant!.id) ?
                            <Flex
                                w='95%'
                                m={1}
                                align='center'
                                justify='center'
                                bg='ziha_gray'
                                borderRadius='0.5em'
                                p={1}
                            >
                                <Text
                                    style={{ fontFamily: 'Font-Content' }}
                                    color='white'
                                    fontSize='sm'
                                >구매 완료</Text>
                            </Flex>
                            : <Flex
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
                                    style={{ fontFamily: 'Font-Content' }}
                                    color='white'
                                    fontSize='sm'
                                >{variant?.price}</Text>
                            </Flex>
                        }
                    </Flex>
                ))}
            </div>
        </div>
    );
};

export const StoreFaceOptions: React.FC<StoreCategoryProps> = ({ variants, myList }) => {

    const toast = useToast();
    const { user, setUser } = useUserContext();

    const buySelectedFace = (face: StoreVariant) => {
        if (user.power < face!.price) {
            toast({
                position: 'bottom',
                duration: 3000,
                isClosable: true,
                render: failedToast,
            });
            return;
        }
        const requestData = {
            itemType: 'face',
            itemId: face!.id,
            userId: user.id,
            price: face!.price,
        };

        fetch(API_URL + '/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => {
            if (response.status === 201) {
                myList.push(face!.id);
                user.power -= face!.price;
                setUser(user);
                toast({
                    position: 'bottom',
                    duration: 3000,
                    isClosable: true,
                    render: successToast,
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
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
                        {myList.includes(variant!.id) ?
                            <Flex
                                w='95%'
                                m={1}
                                align='center'
                                justify='center'
                                bg='ziha_gray'
                                borderRadius='0.5em'
                                p={1}
                            >
                                <Text
                                    style={{ fontFamily: 'Font-Content' }}
                                    color='white'
                                    fontSize='sm'
                                >구매 완료</Text>
                            </Flex>
                            :
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
                                    style={{ fontFamily: 'Font-Content' }}
                                    color='white'
                                    fontSize='sm'
                                >{variant?.price}</Text>
                            </Flex>
                        }
                    </Flex>
                ))}
            </div>
        </div>
    );
};

export const StoreClothesOptions: React.FC<StoreCategoryProps> = ({ variants, myList }) => {

    const toast = useToast();
    const { user, setUser } = useUserContext();

    const buySelectedClothes = (clothes: StoreVariant) => {
        if (user.power < clothes!.price) {
            toast({
                position: 'bottom',
                duration: 3000,
                isClosable: true,
                render: failedToast,
            });
            return;
        }
        const requestData = {
            itemType: 'clothes',
            itemId: clothes!.id,
            userId: user.id,
            price: clothes!.price,
        };
        fetch(API_URL + '/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => {
            if (response.status === 201) {
                myList.push(clothes!.id);
                user.power -= clothes!.price;
                setUser(user);
                toast({
                    position: 'bottom',
                    duration: 3000,
                    isClosable: true,
                    render: successToast,
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
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
                        {myList.includes(variant!.id) ?
                            <Flex
                                w='95%'
                                m={1}
                                align='center'
                                justify='center'
                                bg='ziha_gray'
                                borderRadius='0.5em'
                                p={1}
                            >
                                <Text
                                    style={{ fontFamily: 'Font-Content' }}
                                    color='white'
                                    fontSize='sm'
                                >구매 완료</Text>
                            </Flex>
                            :
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
                                    style={{ fontFamily: 'Font-Content' }}
                                    color='white'
                                    fontSize='sm'
                                >{variant?.price}</Text>
                            </Flex>
                        }
                    </Flex>
                ))}
            </div>
        </div>
    );
};

export const StoreShoesOptions: React.FC<StoreCategoryProps> = ({ variants, myList }) => {

    const toast = useToast();
    const { user, setUser } = useUserContext();

    const buySelectedShoe = (shoe: StoreVariant) => {
        if (user.power < shoe!.price) {
            toast({
                position: 'bottom',
                duration: 3000,
                isClosable: true,
                render: failedToast,
            });
            return;
        }
        const requestData = {
            itemType: 'shoes',
            itemId: shoe!.id,
            userId: user.id,
            price: shoe!.price,
        };
        fetch(API_URL + '/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => {
            if (response.status === 201) {
                myList.push(shoe!.id);
                user.power -= shoe!.price;
                setUser(user);
                toast({
                    position: 'bottom',
                    duration: 3000,
                    isClosable: true,
                    render: successToast,
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
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
                        {myList.includes(variant!.id) ?
                            <Flex
                                w='95%'
                                m={1}
                                align='center'
                                justify='center'
                                bg='ziha_gray'
                                borderRadius='0.5em'
                                p={1}
                            >
                                <Text
                                    style={{ fontFamily: 'Font-Content' }}
                                    color='white'
                                    fontSize='sm'
                                >구매 완료</Text>
                            </Flex>
                            :
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
                                    style={{ fontFamily: 'Font-Content' }}
                                    color='white'
                                    fontSize='sm'
                                >{variant?.price}</Text>
                            </Flex>
                        }
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
        flex: 1,
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