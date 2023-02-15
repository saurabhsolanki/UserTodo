import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={8}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap="10" minWidth="max-content">
            <Box
              as="button"
              borderRadius="md"
              bg="blue.600"
              color="white"
              _hover={{ bg: "tomato" }}
              px={6}
              h={9}
            >
              {" "}
              <Link to="/">Signup</Link>{" "}
            </Box>
            <Box
              as="button"
              borderRadius="md"
              bg="blue.600"
              color="white"
              _hover={{ bg: "tomato" }}
              px={6}
              h={9}
            >
              {" "}
              <Link to="/login">Login</Link>{" "}
            </Box>
            <Box
              as="button"
              borderRadius="md"
              bg="blue.600"
              color="white"
              _hover={{ bg: "tomato" }}
              px={6}
              h={9}
            >
              {" "}
              <Link to="/tasks/:id">Tasks</Link>{" "}
            </Box>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
