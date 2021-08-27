import { ChakraProvider } from "@chakra-ui/react";
import "./styles.css";

export default function App() {
  return (
    <ChakraProvider>
      <h1>Hello,World!!</h1>
      <h2>Enjoy</h2>
    </ChakraProvider>
  );
}
