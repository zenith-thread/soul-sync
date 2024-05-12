import {
  Flex,
  Box,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";
import {
  NotificationsLogo,
  UnlikeLogo,
  CommentLogo,
} from "../../assets/constants";

const PostFooter = ({ username, isProfileModal }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(100);

  const handleLikes = () => {
    setIsLiked(!isLiked);
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
  };

  return (
    <Box mb={10} mt={"auto"}>
      <Flex alignItems={"center"} gap={2} w={"full"} pt={0} mb={2} mt={"auto"}>
        <Box onClick={handleLikes} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>

      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {!isProfileModal && (
        <>
          <Text fontSize={"sm"} fontWeight={700}>
            {username}{" "}
            <Text as={"span"} fontWeight={600}>
              feeling good
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            View all 84 comments
          </Text>
        </>
      )}

      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder="Share your thoughts..."
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              bg={"transparent"}
              _hover={{ color: "white" }}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
