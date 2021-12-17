import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ><img src='./logo.png' width="100px" height="100px" alt="Logo"/></Heading>

        <Spacer></Spacer>
        <IconButton icon={<FaWhatsapp />} isRound='true' onClick={() =>
                        window.open("https://wa.me/+23408068945524")
                    }></IconButton>
        
        <IconButton ml={2} icon={<FaLinkedin />} isRound='true' onClick={() =>
                        window.open("https://www.linkedin.com/in/dejiadebayo/")
                    }></IconButton>
        
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={() =>
                        window.open("https://github.com/dhetex")
                    }></IconButton>

        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
