import { useState } from 'react';
import { Flex, Avatar, Button, VStack, Box } from '@chakra-ui/react';

interface SuggestedUserProps {
  name: string;
  followers: number;
  avatar: string;
}

const SuggestedUser = ({ name, followers, avatar }: SuggestedUserProps) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} name={name} size={'md'} />
        <VStack spacing={2} alignItems={'flex-start'}>
          <Box fontSize={12} fontWeight={'bold'}>
            {name}
          </Box>
          <Box fontSize={11} color={'gray.500'}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={14}
        bg={'transparent'}
        p={0}
        h={'max-content'}
        fontWeight={'medium'}
        color={'blue.400'}
        cursor={'pointer'}
        _hover={{ color: 'white' }}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
