import { Box, Heading, Image } from "@chakra-ui/react";
// import { Navbar } from "../components/Homepage/Navbar";
import Notes from "../assets/Notes.jpg";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Image position={"absolute"} right={0} w={1000} src={Notes} />
      <Heading
        mt={16}
        textAlign={"start"}
        size={"4xl"}
        position={"relative"}
        left={0}
      >
        Simple Note-Taking Application
      </Heading>
      </Box>
  );
}
