import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import { Box, Image } from '@chakra-ui/react';

interface FeedPostProps {
  img: string;
  username: string;
  avatar: string;
}

const FeedPost = ({ img, username, avatar }: FeedPostProps) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={2} borderRadius={4} overflow="hidden">
        <Image src={img} alt={username} />
      </Box>
      <PostFooter username={username} />
    </>
  );
};

export default FeedPost;
