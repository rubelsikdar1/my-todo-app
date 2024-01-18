import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

export const TabStyle = {
     variants: {
          primary: (props) => ({
               bg: "#00b894",
               letterSpacing: "2px",
               bgGradient: "#00b894",
               color: "white",
               _hover: {
                    bgGradient: "linear(to-br, #E80A89, #F15B2A)",
               },
          }),
     },
};
