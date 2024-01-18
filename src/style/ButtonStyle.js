import { mode } from "@chakra-ui/theme-tools";
export const ButtonStyle = {
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
          secondary: (props) => ({
               // bg: "#000000",
               bgGradient: "linear(to-br,blackAlpha.400,blackAlpha.100)",
               letterSpacing: "2px",
               color: mode("#000000", "#fff")(props),
          }),
     },
};
