import { createRoot } from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

const root = createRoot(document.querySelector("#root"));

root.render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
);
