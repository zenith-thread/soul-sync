import { Flex, Container, Box, Image, VStack } from "@chakra-ui/react";

import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex justifyContent="center" alignItems="center" minH="100vh" px={4}>
      <Container maxW="container.md" padding={0}>
        <Flex justifyContent="center" alignItems="center" gap={3}>
          {/* Left Side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="auth.png" h={650} w={600} alt="Phone Image" />
          </Box>

          {/* Right Side */}
          <VStack spacing={4} align="stretch" textAlign="center">
            <AuthForm />
            <Box>Get the App</Box>
            <Flex gap={5} justify="center">
              <Image h={10} src="playstore.png" alt="Playstore logo" />
              <Image h={10} src="microsoft.png" alt="Microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
