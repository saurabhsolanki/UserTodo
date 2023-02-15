import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const initial = {
  email: "",
  password: "",
};
export default function LoginCard() {
  const [data, setData] = useState(initial);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = data;

    let check = users.find((e) => e.email === email && e.password === password);
    if (check) {
      alert("login Successfull");
      axios.post("https://mockjson-0nv3.onrender.com/login", data).then((res) => {
        console.log(res.data, "successfull");
        localStorage.setItem("token", JSON.stringify(check));
        navigate(`/tasks/${check.id}`);
      });
    } else {
      alert("please check credentials");
    }
  }

  function verify() {
    fetch("https://mockjson-0nv3.onrender.com/signup", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }
  useEffect(() => {
    verify();
  }, []);
  return (
    <Flex
      minH={"10vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Enter your User name"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Enter your Password"
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={(e) => handleSubmit(e)}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
              <div id="already">
                Don't Have an Account ? <Link to="/">Register</Link>
              </div>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
