import type { Config } from "tailwindcss";
// const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [],
  plugins: [],
  darkMode: ["class", "[theme*='dark']"],
  theme: {
    colors: {
      current: "currentColor",
      dark: "#272727",
      "success-50": "#ebfef8",
      "success-100": "#cefdec",
      "success-200": "#a1f9de",
      "success-300": "#64f1cd",
      "success-400": "#27e0b7",
      "success-500": "#02d6ae",
      "success-600": "#00a285",
      "success-700": "#00826e",
      "success-800": "#006658",
      "success-900": "#00544a",
      "success-950": "#00302b",

      "primary-50": "#fff1f1",
      "primary-100": "#ffe0e0",
      "primary-200": "#ffc6c6",
      "primary-300": "#ff9e9e",
      "primary-400": "#ff6767",
      "primary-500": "#fc3737",
      "primary-600": "#ea1818",
      "primary-700": "#cf1111",
      "primary-800": "#a21212",
      "primary-900": "#861616",
      "primary-950": "#490606",

      "accent-primary-50": "#fff7ec",
      "accent-primary-100": "#ffecd3",
      "accent-primary-200": "#ffd5a5",
      "accent-primary-300": "#ffb76c",
      "accent-primary-400": "#ff8d31",
      "accent-primary-500": "#ff6d09",
      "accent-primary-600": "#f65000",
      "accent-primary-700": "#d63c02",
      "accent-primary-800": "#a22d0a",
      "accent-primary-900": "#82280c",
      "accent-primary-950": "#461104",

      "secundary-50": "#f3f1ff",
      "secundary-100": "#ebe5ff",
      "secundary-200": "#d9ceff",
      "secundary-300": "#bea6ff",
      "secundary-400": "#9f75ff",
      "secundary-500": "#843dff",
      "secundary-600": "#7916ff",
      "secundary-700": "#6b04fd",
      "secundary-800": "#5a03d5",
      "secundary-900": "#4b05ad",
      "secundary-950": "#2c0076",

      "pink-50": "#fff2fd",
      "pink-100": "#ffe4fc",
      "pink-200": "#ffc8f8",
      "pink-300": "#ff9def",
      "pink-400": "#ff62e3",
      "pink-500": "#ff28e1",
      "pink-600": "#f207d9",
      "pink-700": "#d602bb",
      "pink-800": "#a4048d",
      "pink-900": "#850a71",
      "pink-950": "#5b004c",

      "persian-blue-50": "#e7f5ff",
      "persian-blue-100": "#d4edff",
      "persian-blue-200": "#b1dcff",
      "persian-blue-300": "#82c2ff",
      "persian-blue-400": "#5198ff",
      "persian-blue-500": "#2a6eff",
      "persian-blue-600": "#063eff",
      "persian-blue-700": "#0039ff",
      "persian-blue-800": "#0233d6",
      "persian-blue-900": "#0d34a2",
      "persian-blue-950": "#081c5e",
    },
    spacing: {
      xsm: "4px",
      sm: "8px",
      md: "12px",
      lg: "24px",
      "2xlg": "32px",
      "3xlg": "64px",
      "4xlg": "80px",
    },
    fontSize: {
      small: [
        "12px",
        {
          lineHeight: "16px",
        },
      ],
      normal: [
        "1rem",
        {
          lineHeight: "20px",
        },
      ],
      medium: [
        "24px",
        {
          lineHeight: "26px",
        },
      ],
      large: [
        "32px",
        {
          lineHeight: "34px",
        },
      ],
      biggest: [
        "80px", {
          lineHeight: "80px"
        }
      ]
    },
    extend: {
      gap: ({ theme }) => ({
        ...theme("spacing"),
      }),
      padding: ({ theme }) => ({
        ...theme("spacing"),
      }),
      borderRadius: {
        xsm: "4px",
        sd: "8px",
        md: "12px",
        lg: "24px",
      },
      aspectRatio: {
        portrait: "9/16",
      },
    },
  },
} satisfies Config;
