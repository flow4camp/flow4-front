import React, {  ChangeEvent } from "react";
import { Box, Center, Image, Text, Input, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Signin() {

  const [inputName, setInputName] = useState('');
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');

  const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputName(e.target.value);
  };

  const onChangeId = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputId(e.target.value);
  };
  
  const onChangePwd = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputPwd(e.target.value);
  };

  return (
    <Center
      w='100%'
      h='100vh'
      alignContent="center"
      // bg='blue'
      // position='relative'
    >
      <Center
        w='70%'
        h="100vh"
        // bg='tomato'
        alignContent='center'
        // direction='column'
        // align='center'
        // justify='center'
      >
        <Flex
          direction='column'
          align='center'
          justify='center'
          // bg='blue'
          gap={5}
        >
          <Flex
            direction='column'
            align='center'
            justify='center'
            // bg='green'
          >
            <Image src='/logo192.png' w='50px' h='50px' />
            <Text
              fontSize='3xl'
              fontWeight='bold'
            >지하그라운드</Text>
            <Text>오 늘 도 생 존</Text>
          </Flex>
          <Flex
            direction='column'
            align='center'
            // bg='yellow'
            p={5}
            gap={3}
          >
            <Text marginBottom={3} >계정을 등록하세요</Text>
            <Center>
              <Input
                variant="outline"
                placeholder="Enter Name"
                size="md"
                type='text'
                value={inputName}
                onChange={onChangeName}
              />
            </Center>
            <Center>
              <Input
                variant="outline"
                placeholder="Enter Email"
                size="md"
                type='email'
                value={inputId}
                onChange={onChangeId}
              />
            </Center>
            <Center>
              <Input
                variant="outline"
                placeholder="Enter Password"
                size="md"
                type="password"
                value={inputPwd}
                onChange={onChangePwd}
              />
            </Center>
          </Flex>
          <Text fontSize="md">
            계정이 있으신가요?{' '}
            <Link to="/">
              <Text as="u">Log In</Text>
            </Link>
          </Text>
          <Flex
            direction='column'
            align='center'
            p={3}
            gap={3}
          >
            <Center>
              <Button
                w='200px'
              >
                회원가입
              </Button>
            </Center>
            <Center>
              <Button
                w='200px'
              >
                카카오 계정으로 회원가입
              </Button>
            </Center>
          </Flex>
        </Flex>
      </Center>
    </Center>
  );
}

export default Signin;
