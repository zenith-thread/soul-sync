import {
  Box,
  Image,
  VStack,
  Flex,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();

  // signUp useState
  const [isSignUp, setIsSignUp] = useState(false);
  const signUpHandler = () => {
    setIsSignUp(!isSignUp);
  };

  // =============================================
  //                   Auth
  // =============================================

  //   useState for InputFields
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  //   input change handler
  const inputFieldsChangeHandler = (e) => {
    const { value, name } = e.target;

    setInputFields({ ...inputFields, [name]: value });
  };

  //   Handle Authorization
  const handleAuth = () => {
    if (!inputFields.email || !inputFields.password) {
      alert("Please fill out the form");
      return;
    }
    navigate("/");
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5} fontSize={14}>
        {/* Form  */}
        <VStack spacing={2.5}>
          {/* Logo */}
          <Image src="logo.png" alt="Logo" cursor="pointer" />

          {/* ======================================
                        Input Fields
              ======================================                        */}

          {/* Email */}
          <Input
            placeholder="email"
            type="email"
            name="email"
            w="100%"
            py={5}
            fontSize={14}
            value={inputFields.email}
            onChange={inputFieldsChangeHandler}
          />

          {/* Password */}
          <Input
            placeholder="password"
            type="password"
            name="password"
            w="100%"
            py={5}
            fontSize={14}
            value={inputFields.password}
            onChange={inputFieldsChangeHandler}
          />

          {/* Conditionally rendering the Signup  */}
          {isSignUp ? (
            <Input
              placeholder="confirm password"
              type="password"
              name="confirm_password"
              w="100%"
              py={5}
              fontSize={14}
              value={inputFields.confirm_password}
              onChange={inputFieldsChangeHandler}
            />
          ) : undefined}

          {/* Sign in Button */}
          <Button
            w="100%"
            textAlign="center"
            my={3}
            fontSize={14}
            colorScheme="blue"
            size={"sm"}
            onClick={handleAuth}
          >
            {isSignUp ? "Sign up" : "Log in"}
          </Button>

          {/* OR text */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            w={"full"}
            my={4}
            gap={2}
          >
            <Box h={"1px"} bg={"gray.400"} flex={2} />
            <Text color="white" mx={1}>
              OR
            </Text>
            <Box h={"1px"} bg={"gray.400"} flex={2} />
          </Flex>

          {/* Log in with Google  */}
          <Flex justifyContent={"center"} alignItems={"center"} gap={2} my={2}>
            <Image w={5} src="google.png" alt="google logo" />
            <Text
              fontSize={14}
              fontWeight={"bold"}
              color="blue.400"
              cursor={"pointer"}
              _hover={{ color: "blue.300" }}
            >
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      {/* account confirmation */}
      <Box border={"1px solid gray"} borderRadius={4} fontSize={14} padding={5}>
        <Flex gap={2} justifyContent={"center"}>
          {isSignUp ? <p>Have an account? </p> : <p>Don't have an account? </p>}
          <Button variant="link" color={"blue.400"} onClick={signUpHandler}>
            {" "}
            {isSignUp ? "Log in" : "Sign up"}
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
