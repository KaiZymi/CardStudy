/** @type {import('tailwindcss').Config} */

import colors, {black, transparent, white} from 'tailwindcss/colors'

export default {
    // darkMode: 'selector',

    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            black,
            transparent,
            white,
            primary: '#405DE6',
            blue: {
                100: '#d2e6fa',
                400: '#F6F7FB',

            },
            purple:{
                500: '#0047AB'
            },
            orange: {
                400: '#FAC615',
                800: '#F98216'
            },
            pink: '#EC4795',

        },

        extend: {
            aspectRatio: {
                "4/3": "4 / 3",
                "3/2": "3 / 2",
                "2/3": "2 / 3",
                "9/16": "9 / 16"
            },
            gridTemplateColumns: {
                'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
                'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
            },
        }

    },
    plugins: [],
}

