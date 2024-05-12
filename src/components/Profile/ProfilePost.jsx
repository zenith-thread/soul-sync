import {
  GridItem,
  Flex,
  Box,
  Text,
  Image,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { useDisclosure } from "@chakra-ui/react";

import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";

const ProfilePost = ({ img }) => {
  //useDiscloser hook (importing from chakra) for the modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        {/* Overlay */}
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>

            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Images */}
        <Image
          src={img}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      {/* Modal for the profile post */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
              >
                <Image src={img} alt="profile post" />
              </Box>
              <Flex
                flex={1}
                flexDirection={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src="/profilepic.png"
                      alt="Profile picture"
                      size={"sm"}
                      name="Zenith Tech"
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      Zenith Tech
                    </Text>
                  </Flex>

                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>

                <Divider my={4} bg={"gray.500"} />

                {/* Comment Section */}

                <VStack
                  w={"full"}
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >
                  <Comment
                    createdAt="1d ago"
                    username="Renold watermelon"
                    profilePic="data:image/jpeg;base64,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"
                    text={"Noice"}
                  />
                  <Comment
                    createdAt="1d ago"
                    username="Diana FC"
                    profilePic="data:image/jpeg;base64,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"
                    text={"Yum"}
                  />
                  <Comment
                    createdAt="2d ago"
                    username="Chadwick Kong"
                    profilePic="data:image/jpeg;base64,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"
                    text={"Noice"}
                  />
                </VStack>

                <Divider my={4} bg={"gray.800"} />
                <PostFooter isProfileModal={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
