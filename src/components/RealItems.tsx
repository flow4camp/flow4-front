import React from "react";
import { Center, Image, Text, Box, Spacer, Flex, useToast } from '@chakra-ui/react';
import { useUserContext } from '../context/UserContext';

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

export const RealItemCoffee = () => {

    const toast = useToast();
    const { user, setUser } = useUserContext();
    const price = 3000;      // 가격

    const buySelectedItem = (price: number) => {
        if (user.power < price) {
            toast({
                position: 'bottom',
                duration: 3000,
                isClosable: true,
                render: failedToast,
            });
            return;
        } else {
            user.power -= price;
            setUser(user);
            toast({
                position: 'bottom',
                duration: 3000,
                isClosable: true,
                render: successToast,
            });
        }
    }

    return (
        <Flex 
            h='100px' 
            direction='row' 
            bg='#f0f0f0' 
            borderRadius='1em' 
            p={2}
            boxShadow='0px 2px 4px rgba(0, 0, 0, 0.2)'
            align='center'
            gap={3}
        >
        <Image src={require('../assets/realitems/item-coffee.jpeg')} w='85px' h='85px' borderRadius='0.8em' />
        <Flex direction='column' flex={1} gap={1} >
            <Text 
                style={{ fontFamily: "Font-Content"}} 
                color='ziha_charcoal' 
                fontSize='lg' 
                w='fit-content' 
                justifySelf='left' 
            >
            아이스 카페 아메리카노 T</Text>
            <Flex direction='row' justify='space-between' >
            <Flex direction='column' >
                <Text
                    style={{ fontFamily: "Font-Content-Light"}} 
                    color='ziha_charcoal' 
                    fontSize='sm' 
                    w='fit-content' 
                    justifySelf='left'
                >오늘도 아아 한 잔</Text>
                <Text
                    style={{ fontFamily: "Font-Content-Light"}} 
                    color='ziha_charcoal' 
                    fontSize='sm' 
                    w='fit-content' 
                    justifySelf='left'
                >출근유령이도 기력 충전하자.</Text>
            </Flex>
            <Flex 
                direction='row' 
                bg='ziha_charcoal_gray' 
                align='center' 
                justify='center' 
                paddingRight={3} 
                paddingLeft={2}
                paddingTop={0}
                paddingBottom={0}
                borderRadius='0.8em'
                boxShadow='0px 2px 4px rgba(0, 0, 0, 0.1)'
                onClick={() => buySelectedItem(price)}
            >
                <Image src={require('../assets/coin.png')} w={5} h={5} />
                <Text 
                    style={{ fontFamily: "Font-Content"}} 
                    fontSize='sm' 
                    color='white' 
                    paddingTop={1}
                >{price}</Text>
            </Flex>
            </Flex>
        </Flex>
        </Flex>
    );
}

export const RealItemBacchus = () => {

    const toast = useToast();
    const { user, setUser } = useUserContext();
    const price = 1000;      // 가격

    const buySelectedItem = (price: number) => {
        if (user.power < price) {
            toast({
                position: 'bottom',
                duration: 3000,
                isClosable: true,
                render: failedToast,
            });
            return;
        } else {
            user.power -= price;
            setUser(user);
            toast({
                position: 'bottom',
                duration: 3000,
                isClosable: true,
                render: successToast,
            });
        }
    }

    return (
        <Flex 
            h='100px' 
            direction='row' 
            bg='#f0f0f0' 
            borderRadius='1em' 
            p={2}
            boxShadow='0px 2px 4px rgba(0, 0, 0, 0.2)'
            align='center'
            gap={3}
        >
        <Image src={require('../assets/realitems/item-bacchus.jpeg')} w='85px' h='85px' borderRadius='0.8em' />
        <Flex direction='column' flex={1} gap={1} >
            <Text 
                style={{ fontFamily: "Font-Content"}} 
                color='ziha_charcoal' 
                fontSize='lg' 
                w='fit-content' 
                justifySelf='left' 
            >
            동아제약 박카스 F 120ml</Text>
            <Flex direction='row' justify='space-between' >
            <Flex direction='column' >
                <Text
                    style={{ fontFamily: "Font-Content-Light"}} 
                    color='ziha_charcoal' 
                    fontSize='sm' 
                    w='fit-content' 
                    justifySelf='left'
                >피로회복이 필요할 때</Text>
                <Text
                    style={{ fontFamily: "Font-Content-Light"}} 
                    color='ziha_charcoal' 
                    fontSize='sm' 
                    w='fit-content' 
                    justifySelf='left'
                >가볍게 기운을 내자.</Text>
            </Flex>
            <Flex 
                direction='row' 
                bg='ziha_charcoal_gray' 
                align='center' 
                justify='center' 
                paddingRight={3} 
                paddingLeft={2}
                paddingTop={0}
                paddingBottom={0}
                borderRadius='0.8em'
                boxShadow='0px 2px 4px rgba(0, 0, 0, 0.1)'
                onClick={() => buySelectedItem(price)}
            >
                <Image src={require('../assets/coin.png')} w={5} h={5} />
                <Text 
                    style={{ fontFamily: "Font-Content"}} 
                    fontSize='sm' 
                    color='white' 
                    paddingTop={1}
                >{price}</Text>
            </Flex>
            </Flex>
        </Flex>
        </Flex>
    );
}

export const RealItemLemona = () => {

    const toast = useToast();
    const { user, setUser } = useUserContext();
    const price = 2000;      // 가격

    const buySelectedItem = (price: number) => {
        if (user.power < price) {
            toast({
                position: 'bottom',
                duration: 3000,
                isClosable: true,
                render: failedToast,
            });
            return;
        } else {
            user.power -= price;
            setUser(user);
            toast({
                position: 'bottom',
                duration: 3000,
                isClosable: true,
                render: successToast,
            });
        }
    }

    return (
        <Flex 
            h='100px' 
            direction='row' 
            bg='#f0f0f0' 
            borderRadius='1em' 
            p={2}
            boxShadow='0px 2px 4px rgba(0, 0, 0, 0.2)'
            align='center'
            gap={3}
        >
        <Image src={require('../assets/realitems/item-lemona.jpeg')} w='85px' h='85px' borderRadius='0.8em' />
        <Flex direction='column' flex={1} gap={1} >
            <Text 
                style={{ fontFamily: "Font-Content"}} 
                color='ziha_charcoal' 
                fontSize='lg' 
                w='fit-content' 
                justifySelf='left' 
            >
            경남 레모나산 10입</Text>
            <Flex direction='row' justify='space-between' >
            <Flex direction='column' >
                <Text
                    style={{ fontFamily: "Font-Content-Light"}} 
                    color='ziha_charcoal' 
                    fontSize='sm' 
                    w='fit-content' 
                    justifySelf='left'
                >상큼한 비타민</Text>
                <Text
                    style={{ fontFamily: "Font-Content-Light"}} 
                    color='ziha_charcoal' 
                    fontSize='sm' 
                    w='fit-content' 
                    justifySelf='left'
                >사무실에 두고 챙겨먹자.</Text>
            </Flex>
            <Flex 
                direction='row' 
                bg='ziha_charcoal_gray' 
                align='center' 
                justify='center' 
                paddingRight={3} 
                paddingLeft={2}
                paddingTop={0}
                paddingBottom={0}
                borderRadius='0.8em'
                boxShadow='0px 2px 4px rgba(0, 0, 0, 0.1)'
                onClick={() => buySelectedItem(price)}
            >
                <Image src={require('../assets/coin.png')} w={5} h={5} />
                <Text 
                    style={{ fontFamily: "Font-Content"}} 
                    fontSize='sm' 
                    color='white' 
                    paddingTop={1}
                >{price}</Text>
            </Flex>
            </Flex>
        </Flex>
        </Flex>
    );
}