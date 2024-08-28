import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <Box border={'1px solid gray'} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        <Image src="/logo.png" h={24} cursor={'pointer'} alt="Instagram" />
        <Input placeholder="Email" fontSize={14} type="email" />
        <Input placeholder="Password" fontSize={14} type="password" />

        {!isLogin ? (
          <Input placeholder="Confirm password" fontSize={14} type="password" />
        ) : null}

        <Button
          onClick={() => navigate('/')}
          w={'full'}
          colorScheme="blue"
          size={'sm'}
          fontSize={14}
        >
          {isLogin ? 'Log in' : 'Sign up'}
        </Button>

        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          my={4}
          gap={1}
          w={'full'}
        >
          <Box flex={2} h={'1px'} bg={'gray.400'} />
          <Text mx={1} color={'white'}>
            OR
          </Text>
          <Box flex={2} h={'1px'} bg={'gray.400'} />
        </Flex>

        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          cursor={'pointer'}
        >
          <Image src="/google.png" w={5} alt="Google" />
          <Text color={'blue'} mx={2}>
            Log in with Google
          </Text>
        </Flex>

        <Box border={'1px solid gray'} borderRadius={4} padding={5}>
          <Flex justifyContent={'center'} alignItems={'center'}>
            <Box mx={2} fontSize={14}>
              {isLogin ? "Don't have an account" : 'Already have an account'}
            </Box>
            <Box
              onClick={() => setIsLogin(!isLogin)}
              color={'blue.500'}
              cursor={'pointer'}
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default AuthForm;
