import { Avatar, Flex, Text } from "@chakra-ui/react";

const Comment = ({ createdAt, username, profilePic, text }) => {
  return (
    <Flex gap={4}>
      <Avatar src={profilePic} name={username} size={"sm"} />

      <Flex direction={"column"} mb={3}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={12} fontWeight={"bold"}>
            {username}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>

        <Text fontSize={12} color={"gray"}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
