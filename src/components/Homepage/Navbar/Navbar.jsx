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
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../../Redux/users/user.types";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const { auth, user } = useSelector((state) => state.userReducer);

  const nav = useNavigate();
  return (
    <>
      <Box
        zIndex={1000}
        position={"fixed"}
        top={0}
        w={"100%"}
        boxShadow={
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        }
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(18,36,47,1) 0%, rgba(25,41,51,1) 50%, rgba(18,37,49,1) 100%)",
        }}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            fontWeight={"bold"}
            cursor={"pointer"}
            onClick={() => {
              nav("/");
            }}
            color="white"
          >
            Simple Note-Taking Application
          </Box>

          <Flex alignItems={"center"}>
            <Stack alignItems={"center"} direction={"row"} spacing={7}>
              <Button
                display={auth === true ? "none" : "block"}
                bg={"white"}
                fontWeight={"bold"}
                color={"black"}
                onClick={() => {
                  nav("/register");
                }}
              >
                Sign up
              </Button>
              <Button
                display={auth === true ? "none" : "block"}
                bg={"white"}
                fontWeight={"bold"}
                color={"black"}
                onClick={() => {
                  nav("/login");
                }}
              >
                Login
              </Button>
              <Button bg={"white"} color={"black"} onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {/* Logout Button */}

              <Menu>
                <MenuButton
                  display={auth ? "block" : "none"}
                  as={Button}
                  border="3px solid white"
                  padding={2}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.veryicon.com%2Ficons%2Finternet--web%2Fprejudice%2Fuser-128.html&psig=AOvVaw2Jas3oORg_Z1skV_7x0SNz&ust=1711692576609000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDv5_WlloUDFQAAAAAdAAAAABAE"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://www.svgrepo.com/show/350417/user-circle.svg"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{user}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem
                    onClick={() => {
                      dispatch({ type: LOGOUT });
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
