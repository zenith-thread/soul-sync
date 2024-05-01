// Chakra Color mode
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Setting up styles for our theme config
const styles = {
  globals: (props) => ({
    body: {
      bg: mode("#E2DFD0", "#0C0C0C")(props),
      color: mode("#32012F", "#481E14")(props),
    },
  }),
};

// Chakra Color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, styles });
