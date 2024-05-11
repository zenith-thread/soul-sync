import { Avatar, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Zenith tech" size={"lg"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          Zenith Tech
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "None" }}
        cursor={"pointer"}
      >
        Logout
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
