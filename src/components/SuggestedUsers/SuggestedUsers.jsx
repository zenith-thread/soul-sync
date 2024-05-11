import { Box, VStack, Flex, Text } from "@chakra-ui/react";

import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"gray.400"}
          cursor={"pointer"}
          _hover={{ color: "gray.500" }}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        name="Dan Abrahmov"
        followers={1832}
        avatar={
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <SuggestedUser
        name="Daniel Cyka"
        followers={2352}
        avatar={
          "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <SuggestedUser
        name="Elizabeth Nom"
        followers={753}
        avatar={
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
        &#169; 2024. All rights reserved
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
