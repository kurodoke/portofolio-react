/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Arial"', defaultTheme.fontFamily.sans],
                serif: ['"EB Garamond"', defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [],
};
