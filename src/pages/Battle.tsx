import NavBar from "../components/NavBar";
import { Center, Button, Text, Box, Spacer, Flex } from '@chakra-ui/react';
import Layout from '../components/layout';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/modal';
import { useDisclosure } from '@chakra-ui/hooks';

function Battle() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModalForMatch = () => {
    onOpen();
  }

  return (
    <Layout>
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
            onClick={openModalForMatch}
          >
            <Spacer />
            <Text p={2} alignSelf='center' style={{ fontFamily: 'Font-Content' }} >1호선</Text>
            <Spacer />
            <Box bg='blue' w='250px' h='100px' justifySelf='right'></Box>
          </Flex>
          <Flex
            direction='row'
            w='100%'
            onClick={openModalForMatch}
          >
            <Spacer />
            <Text p={2} alignSelf='center' style={{ fontFamily: 'Font-Content' }} >2호선</Text>
            <Spacer />
            <Box bg='green' w='250px' h='100px' justifySelf='right'></Box>
          </Flex>
          <Flex
            direction='row'
            w='100%'
            onClick={openModalForMatch}
          >
            <Spacer />
            <Text p={2} alignSelf='center' style={{ fontFamily: 'Font-Content' }} >3호선</Text>
            <Spacer />
            <Box bg='orange' w='250px' h='100px' justifySelf='right'></Box>
          </Flex>
          <Flex
            direction='row'
            w='100%'
            onClick={openModalForMatch}
          >
            <Spacer />
            <Text p={2} alignSelf='center' style={{ fontFamily: 'Font-Content' }} >4호선</Text>
            <Spacer />
            <Box bg='aqua' w='250px' h='100px' justifySelf='right'></Box>
          </Flex>
          <Flex
            direction='row'
            w='100%'
            onClick={openModalForMatch}
          >
            <Spacer />
            <Text p={2} alignSelf='center' style={{ fontFamily: 'Font-Content' }} >5호선</Text>
            <Spacer />
            <Box bg='purple' w='250px' h='100px' justifySelf='right'></Box>
          </Flex>
          <Flex
            direction='row'
            w='100%'
            onClick={openModalForMatch}
          >
            <Spacer />
            <Text p={2} alignSelf='center' style={{ fontFamily: 'Font-Content' }} >6호선</Text>
            <Spacer />
            <Box bg='brown' w='250px' h='100px' justifySelf='right'></Box>
          </Flex>
        </Flex>
        <Modal
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
          size='sm'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Header</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Body</ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>취소</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Layout>
  );
}

export default Battle;
