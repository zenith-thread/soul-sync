import { Avatar, Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { Tooltip } from "@chakra-ui/react";
import {
  InstagramMobileLogo,
  InstagramLogo,
  SearchLogo,
  CreatePostLogo,
  NotificationsLogo,
} from "../../assets/constants";

import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Zenith tech" src="/profilepic.png" />,
      text: "Zenith",
      link: "/profile",
    },
  ];

  return (
    <>
      <Box
        height={"100vh"}
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={8}
        px={{ base: 2, md: 4 }}
        position={"sticky"}
        top={0}
        left={0}
      >
        <Flex flex={"column"} gap={10} width={"full"} height={"100px"}>
          {/* Instagram letter logo on bigger devices */}
          <Link
            to={"/"}
            as={RouterLink}
            pl={2}
            pt={2}
            display={{ base: "none", md: "block" }}
            cursor={"pointer"}
          >
            <InstagramLogo />
          </Link>

          {/* Instagram App logo on mobile devices */}
          <Link
            to={"/"}
            as={RouterLink}
            pl={2}
            pt={2}
            display={{ base: "block", md: "none" }}
            borderRadius={6}
            _hover={{
              bg: "whiteAlpha.200",
            }}
            w={10}
            h={10}
            cursor={"pointer"}
          >
            <InstagramMobileLogo />
          </Link>
        </Flex>
        {/* Tooltip for mobile devices*/}
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              openDelay={500}
              ml={1}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                gap={4}
                alignItems={"center"}
                as={RouterLink}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        {/* Log out */}
        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          openDelay={500}
          ml={1}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            to={"/auth"}
            gap={4}
            alignItems={"center"}
            as={RouterLink}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            mt="41vh"
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>Logout</Box>
          </Link>
        </Tooltip>
      </Box>
    </>
  );
};

export default Sidebar;
