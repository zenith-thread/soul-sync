import {
  Container,
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
  useStatStyles,
} from "@chakra-ui/react";

import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} width={"200px"} />
                <Skeleton height={"10px"} width={"100px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost img="/img1.png" username="fakegirl" avatar="/img1.png" />
          <FeedPost img="/img2.png" username="coolguy" avatar="/img2.png" />
          <FeedPost img="/img3.png" username="blondehoe" avatar="/img3.png" />
          <FeedPost
            img="/img4.png"
            username="natureaf_or_boomer"
            avatar="/img4.png"
          />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
