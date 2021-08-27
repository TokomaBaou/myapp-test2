import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css";
import { Router } from "./components/router/Router";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/setting">Setting</Link>
        <br />
        <br />
        <h1>Hello,World!!</h1>
        <h2>Enjoy</h2>

        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
