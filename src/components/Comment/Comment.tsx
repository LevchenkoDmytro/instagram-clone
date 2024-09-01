import { Flex, Avatar, Text } from '@chakra-ui/react';

interface CommentProps {
  createAt: string;
  username: string;
  profilePic: string;
  text: string;
}

const Comment = ({ createAt, username, profilePic, text }: CommentProps) => {
  return (
    <Flex gap={4}>
      <Avatar src={profilePic} name={username} size={'sm'} />
      <Flex direction={'column'}>
        <Flex gap={2}>
          <Text fontWeight={'bold'} fontSize={12}>
            {username}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text fontSize={12} color={'gray'}>
          {createAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
