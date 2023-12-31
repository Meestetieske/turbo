import theme from "@repo/tailwind/theme.js";

export default {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "../web/components/**/*.{js,ts,jsx,tsx}",
    "../web/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme,
  plugins: [],
};
