import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  //   brand: {
  //     900: '#1a365d',
  //     800: '#153e75',
  //     700: '#2a69ac',
  //   },
  ziha_charcoal: "#323232",
  ziha_charcoal_gray: "#5A5A5A",
  ziha_gray: "#999999",
  ziha_green: "#CDF082",
  ziha_green_gray: "#C3DB90",
  ziha_purple: "#B1A6D2",
  ziha_purple_gray: "#B9B3CA",

  // 지하철 노선도 색
  line_1_color: "#0052A4",
  line_2_color: "#00A84D",
  line_3_color: "#EF7C1C",
  line_4_color: "#00A5DE",
  line_5_color: "#996CAC",
  line_6_color: "#CD7C2F",
  line_7_color: "#747F00",
  line_8_color: "#E6186C",
  line_9_color: "#BB8336",
};

const theme = extendTheme({ colors });

export default theme;
