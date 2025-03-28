/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "hsl(220, 98%, 61%)",
        lmLightGray: "#FAFAFA",
        lmVeryLightGrayBlue: "#EDEDF5",
        lmLightGrayBlue: "#D2D3E0",
        lmDarkGrayBlue: "#9799A8",
        lmVeryDarkGrayBlue: "#5D6476",

        dmVeryBlue: "#1C2028",
        dmDarkDesBlue: "#252D37",
        dmLightGrayBlue: "#D1D5DB",
        dmLightGrayBlueHover: "#EDEDF5",
        dmDarkGrayBlue: "#848A9D",
        dmVeryDarkGrayBlue: "#3A4158",
      },
      backgroundImage: {
        imgBgMobileLight: "url('/images/bg-mobile-light.jpg')",
        imgBgMobileDark: "url('/images/bg-mobile-dark.jpg')",
        imgBgDesktopLight: "url('/images/bg-desktop-light.jpg')",
        imgBgDesktopDark: "url('/images/bg-desktop-dark.jpg')",
        checkGradientBg:
          "linear-gradient(90deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      },
    },
  },
  plugins: [],
};
