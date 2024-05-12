import {
  Avatar,
  AvatarGroup,
  Flex,
  Box,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdRMobiledata } from "react-icons/md";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      {/* Profile picture on the left  */}
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          name="Zenith Tech"
          src="/profilepic.png"
          alt="profile picture"
        />
      </AvatarGroup>

      {/* User's profile info on the right */}
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>Zenith Tech</Text>

          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex
          fontSize={{ base: "xs", md: "sm" }}
          alignItems={"center"}
          gap={{ base: 2, sm: 4 }}
        >
          <Text>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              169
            </Text>
            Followers
          </Text>
          <Text>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              123
            </Text>
            Following
          </Text>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Zenith Tech
          </Text>
        </Flex>
        <Text fontSize={"sm"}>
          Finishing this project on the last day {":("}
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
