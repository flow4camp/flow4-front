import NavBar from "../components/NavBar";
import { Center, Image, Text, Box, Spacer, Flex } from '@chakra-ui/react';


function Battle() {
  return (
    <Flex
      direction='column'
      h='100vh'
    >
      <NavBar />
      <Flex
        direction='column'
        w='100%'
        flex='1'
        overflowY='auto'
      >
        <Box
          w='100%'
        >
          <Text 
            w='fit-content'
            p={3}
            m={2}
            fontSize='2xl'
            style={{ fontFamily: 'Font-Title' }}
          >지하배틀</Text>
        </Box>
        <Flex
          direction='column'
          w='100%'
          p={2}
          gap={5}
        >
          <Flex
            direction='row'
            w='100%'
          >
            <Text p={2} alignSelf='center' style={{ fontFamily: 'Font-Content' }} >1호선</Text>
            <Spacer />
            <Box bg='blue' w='250px' h='100px' justifySelf='right'></Box>
          </Flex>
          <Flex
            direction='row'
            w='100%'
          >
            <Text p={2} alignSelf='center' style={{ fontFamily: 'Font-Content' }} >2호선</Text>
            <Spacer />
            <Box bg='green' w='250px' h='100px' justifySelf='right'></Box>
          </Flex>
          <Flex
            direction='row'
            w='100%'
          >
            <Text p={2} alignSelf='center' style={{ fontFamily: 'Font-Content' }} >3호선</Text>
            <Spacer />
            <Box bg='orange' w='250px' h='100px' justifySelf='right'></Box>
          </Flex>
          <Flex
            direction='row'
            w='100%'
          >
            <Text p={2} alignSelf='center' style={{ fontFamily: 'Font-Content' }} >4호선</Text>
            <Spacer />
            <Box bg='aqua' w='250px' h='100px' justifySelf='right'></Box>
          </Flex>
          <Flex
            direction='row'
            w='100%'
          >
            <Text p={2} alignSelf='center' style={{ fontFamily: 'Font-Content' }} >5호선</Text>
            <Spacer />
            <Box bg='purple' w='250px' h='100px' justifySelf='right'></Box>
          </Flex>
          <Flex
            direction='row'
            w='100%'
          >
            <Text p={2} alignSelf='center' style={{ fontFamily: 'Font-Content' }} >6호선</Text>
            <Spacer />
            <Box bg='brown' w='250px' h='100px' justifySelf='right'></Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Battle;
