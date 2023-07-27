import React, {  ChangeEvent } from "react";
import { Center, Image, Text, Input, Button, Flex } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_URL } from '../api';
import { useUserContext } from '../context/UserContext';
// import axios from 'axios';

function Signin() {

  const [inputName, setInputName] = useState('');
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputName(e.target.value);
  };

  const onChangeId = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputId(e.target.value);
  };

  const onChangePwd = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputPwd(e.target.value);
  };

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (inputId === '' || inputPwd === '' || inputName === '') {
      alert('빈 칸을 채워주세요.');
      return;
    }
    const requestData = {
      email: inputId,
      password: inputPwd,
      username: inputName,
    };

    fetch(API_URL + '/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        navigate('/home');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <Center
      w='100%'
      h='100vh'
      alignContent="center"
    >
      <Center
        w='70%'
        h="100vh"
        alignContent='center'
      >
        <Flex
          direction='column'
          align='center'
          justify='center'
          gap={2}
        >
          <Flex
            direction='column'
            align='center'
            justify='center'
          >
            <Image src='/logo192.png' w='80px' h='80px' m={3} />
            <Text
              fontSize='3xl'
              fontWeight='bold'
              style={{ fontFamily: 'Font-Title' }}
            >지하그라운드</Text>
            <Text
              style={{ fontFamily: 'Font-Title-Light' }}
            >오 늘 도 출 근</Text>
          </Flex>
          <Flex
            direction='column'
            align='center'
            p={5}
            gap={2}
          >
            <Text
              marginBottom={3}
              style={{ fontFamily: 'Font-Content' }}
            >계정을 등록하세요</Text>
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
          <Text
            fontSize="md"
            style={{ fontFamily: 'Font-Content' }}
          >
            계정이 있으신가요?{' '}
            <Link to="/">
              <Text as="u">Log In</Text>
            </Link>
          </Text>
          <Flex
            direction='column'
            align='center'
            p={3}
            gap={2}
          >
            <Center>
              <Button
                w='220px'
                style={{ fontFamily: 'Font-Content-Light' }}
                onClick={handleSignIn}
              >
                회원가입
              </Button>
            </Center>
            <Center>
              <Button
                w='220px'
                style={{ fontFamily: 'Font-Content-Light' }}
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
