// Chakra Color mode
import { mode } from "@chakra-ui/theme-tools";

// Setting up styles for our theme config
export const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "#000")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
    },
  }),
};

// Chakra Color mode config
export const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
