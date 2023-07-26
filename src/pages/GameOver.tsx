import React from "react";
import { useLocation } from 'react-router-dom';
import { Center, Button, Text, Box, Spacer, Flex, Image, Spinner } from "@chakra-ui/react";

const GameOverWin = () => {
    return (
        <Center>

        </Center>
    );
};

const GameOverLose = () => {
    return (
        <Center w='100%' h='100vh' p={3}>
            <Flex direction='column'>
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
                <Flex direction='column'>
                    
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