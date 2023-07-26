import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Center, Button, Text, Box, Spacer, Flex, Image, Spinner } from "@chakra-ui/react";
import UserCharacter from "../components/UserCharacter";
import { storeFaceVariants } from "../components/StoreVariants";

const GameOverWin = () => {
    return (
        <Center>

        </Center>
    );
};

const GameOverLose = () => {

    const navigate = useNavigate();

    return (
        <Center w='100%' h='100vh' p={3} bg='ziha_charcoal' >
            <Flex 
                direction='column' 
                bg='gray.300' 
                p={10} 
                borderRadius='3em'
                boxShadow='0px 2px 6px rgba(255, 255, 255, 0.5)'
            >
                <Flex direction='column' >
                    <Text style={{ fontFamily: 'Font-Title'}} fontSize='xl'
                    >
                        GAME OVER</Text>
                    <Flex direction='row' gap={3} align='center'>
                        <Image src={require('../assets/fight_gray.png')} w={8} h={8} />
                        <Text style={{ fontFamily: 'Font-Title'}} fontSize='4xl'
                        >DEFEAT</Text>
                        <Image src={require('../assets/fight_gray.png')} w={8} h={8} />
                    </Flex>
                </Flex>
                <Flex direction='column' >
                    <Box w='200px' h='230px' justifySelf='center' alignSelf='center' >
                        <UserCharacter
                        usage={''}
                        selectedHat={null}
                        selectedAcc={null}
                        selectedFace={storeFaceVariants[2]}
                        selectedClothes={null}
                        selectedShoe={null}
                        />
                    </Box>
                </Flex>
                <Flex direction='row' align='center' justify='center'>
                    <Image src={require('../assets/coin.png')} w={10} h={10} />
                    <Text style={{ fontFamily: 'Font-Title'}} fontSize='2xl' >- 20</Text>
                </Flex>
                <Flex justify='center' paddingTop={10}>
                    <Button 
                        style={{ fontFamily: 'Font-Content-Light'}}
                        bg='ziha_purple_sharp'
                        color='ziha_charcoal'
                        borderRadius='0.8em'
                        boxShadow='0px 2px 4px rgba(0, 0, 0, 0.2)'
                        onClick={() => navigate('/home')}
                    >
                        메인으로 돌아가기
                    </Button>
                </Flex>
            </Flex>
        </Center>
    );
};

const GameOver: React.FC = () => {
    const location = useLocation();
    const win = location.state?.win || false;
  
    return (
      <div>
        {win ? 
        <GameOverWin /> : 
        <GameOverLose />}
      </div>
    );
  };

export default GameOver;