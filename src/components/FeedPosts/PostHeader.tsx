import { Flex, Avatar, Box, Text } from '@chakra-ui/react';

interface PostHeaderProps {
  username: string;
  avatar: string;
}

const PostHeader = ({ username, avatar }: PostHeaderProps) => {
  return (
    <>
      <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={2}>
        <Flex alignItems={'center'} gap={2}>
          <Avatar src={avatar} size={'sm'} />
          <Flex fontSize={12} fontWeight={'bold'} gap={2}>
            {username}
          </Flex>
          <Box color={'gray.500'}>• 1w </Box>
        </Flex>
        <Box cursor={'pointer'}>
          <Text
            fontSize={12}
            color={'blue.500'}
            fontWeight={'bold'}
            _hover={{ color: 'white' }}
            transition={'0.2s ease-in-out'}
          >
            Unfollow
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default PostHeader;
