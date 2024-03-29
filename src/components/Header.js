import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import Typical from "react-typical";
import "../App.css";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hey!👋, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Deji Adebayo
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            SFS - Full Stack Web Developer | Driven Web Developer With 5+ Years Experience | JavaScript | React | Node.js | SQL | UI/UX | Power BI | Hospitality | SIA Security | Entrepreneur 🗣
          </Text>{" "}
          <h1>
            {" "}
            <Typical
              className="features"
              steps={[
                "Full Stack Developer 👨‍💻",
                1000,
                "PHP Developer ⚛️",
                1000,
                "React Developer🔥",
                1000,
                "JavaScript Developer👍",
                1000,
                "SQL Expert🤓",
                1000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h1>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() =>
              window.open(
                "https://www.dropbox.com/scl/fi/yk7dy8od0ipc7suofscpe/sfsCV.pdf?rlkey=kohh23lv36bttl4d3wl8ar9pj&dl=0"
              )
            }
          >
            Resume
          </Button>
          <Button
            mt={8}
            ml={10}
            colorScheme="cyan"
           
            onClick={() => window.open("https://wa.me/+23408068945524")}
          >
            Hire me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="200px"
          src="https://github.com/dhetex.png"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
