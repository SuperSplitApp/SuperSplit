/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        "inter-thin": ["Inter_100Thin"],
        "inter-extralight": ["Inter_200ExtraLight"],
        "inter-light": ["Inter_300Light"],
        "inter-regular": ["Inter_400Regular"],
        "inter-medium": ["Inter_500Medium"],
        "inter-semibold": ["Inter_600SemiBold"],
        "inter-bold": ["Inter_700Bold"],
        "inter-extrabold": ["Inter_800ExtraBold"],
        "inter-black": ["Inter_900Black"],
      },
    },
  },
  plugins: [],
};
