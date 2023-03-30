/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                firstColor: "hsl(260, 100%, 66%)",
                secondColor: "hsl(328, 100%, 66%)",
                gradientColor: "linear-gradient(75deg, var(secondColor) 12%, var(firstColor) 90%)",
                firstColorLight: "hsl(260, 88%, 92%)",
                firstColorDark: " hsl(260, 80%, 16%)",
                titleColor: " hsl(260, 80%, 18%)",
                textColor: " hsl(260, 24%, 32%)",
                textColorLight: " hsl(260, 16%, 65%)",
                whiteColor: "hsl(0, 0%, 100%)",
                bodyColor: "hsl(260, 100%, 97%)",
                containerColor: "hsl(0, 0%, 100%)",
            },
        },
    },
    plugins: [],
}
