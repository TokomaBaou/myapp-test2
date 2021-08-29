import { Box, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css";
import { Router } from "./components/router/Router";
import theme from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <br />
        <br />
        <h1>Hello</h1>
        <h2>Enjoy</h2>

        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
