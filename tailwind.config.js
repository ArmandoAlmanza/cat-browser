/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                nav_bg: "rgba(0, 0, 0, 0.75)",
                body: "rgba(221,221,221, 0.40)",
            },
            fontFamily: {
                primary: ["Montserrat", "sans-serif"],
                second: ["Mukta", "sans-serif"],
            },
        },
    },
    plugins: [],
};
