import { VStack, Flex, Text } from '@chakra-ui/react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';
const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.400'} cursor={'pointer'}>
          See All
        </Text>
      </Flex>
      <SuggestedUser name="Dima" followers={1392} avatar={'https://bit.ly/dima'} />
      <SuggestedUser name="Sasha" followers={567} avatar={'https://bit.ly/sasha'} />
      <SuggestedUser name="Ivan" followers={759} avatar={'https://bit.ly/ivan'} />

      <Text fontSize={12} color={'gray.500'} mt={5} textTransform={'uppercase'}>
        © 2024 Instagram from Meta
      </Text>
    </VStack>
  );
};

export default SuggestedUsers;
