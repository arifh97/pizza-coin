/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {

            }
        },
        container: {
            center: true,
        },
        screens: {
            'xs': '390px',
            'sm': '414px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
            '2xl': '1320px',
            '3xl': '1440px'
        },
        fontFamily: {
            Helvetica: `"Helvetica Neue",sans-serif`,
            FormulaCondensedBold: `"FormulaCondensedBold",sans-serif`,
            FormulaCondensedLight: `"FormulaCondensedLight",sans-serif`,
            dm: `'DM Sans',sans-serif`
        },
    },
    darkMode: "class",
    plugins: [],
}