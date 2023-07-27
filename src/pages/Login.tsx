import React, { ChangeEvent } from "react";
import { Center, Image, Text, Input, Button, Flex } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { API_URL } from '../api';
import { useUserContext } from '../context/UserContext';

function Login() {

  const navigate = useNavigate();

  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const { user, setUser } = useUserContext();

  const onChangeId = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputId(e.target.value);
  };

  const onChangePwd = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputPwd(e.target.value);
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (inputId === '' || inputPwd === '') {
      alert('빈 칸을 채워주세요.');
      return;
    }
    const requestData = {
      email: inputId,
      password: inputPwd,
    };

    fetch(API_URL + '/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.statusCode === 401) {
          console.log('아이디/비밀번호가 일치하지 않습니다.')
        }
        else {
          setUser(data);
          navigate('/home');
        }
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
              >계정에 로그인하세요</Text>
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
            계정이 없으신가요?{' '}
            <Link to="/signin">
              <Text as="u">Sign Up</Text>
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
                onClick={handleLogin}       // for now!
              >
                로그인
              </Button>
            </Center>
            <Center>
              <Button
                w='220px'
                style={{ fontFamily: 'Font-Content-Light' }}
              >
                카카오 계정으로 로그인
              </Button>
            </Center>
          </Flex>
        </Flex>
      </Center>
    </Center>
  );
}

export default Login;
