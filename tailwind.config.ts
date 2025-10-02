import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors: {
      "green-5": "#e4f1ed",
      "green-10": "#bcddd0",
      "green-20": "#95c8b3",
      "green-30": "#72b298",
      "green-40": "#5ea185",
      "green-50": "#529174",
      "green-60": "#4c8469",
      "green-70": "#44745b",
      "green-80": "#3c644f",
      "green-90": "#304838",
      "orange-5": "#ffedd6",
        "orange-10": "#fad2a1",
        "orange-20": "#f2b569",
        "orange-30": "#eb982f",
        "orange-40": "#e68400",
        "orange-50": "#e16f00",
        "orange-60": "#dd6400",
        "orange-70": "#d85400",
        "orange-80": "#d14100",
        "orange-90": "#c81a00",
        "orange-95": "#3D2200",
    },
  },
  },
  plugins: [

  ],
};
export default config;
