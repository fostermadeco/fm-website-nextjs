/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable global-require */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
    // mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            headline: [
                'Formular',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji',
            ],
            text: ['Sailec', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        },
        colors: {
            black: '#232628',
            white: '#ffffff',
            lime: '#DADA50',
            ivory: '#F1F1E8',
            steel: '#9EA8AD',
        },
        container: {
            center: true,
            screens: {
                sm: '100%',
                md: '100%',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
        extend: {
            letterSpacing: {
                widest: '.15em',
            },
            gridTemplateColumns: {
                14: 'repeat(14, minmax(0, 1fr))',
            },
            lineHeight: {
                tighter: '1.06',
            },
            height: {
                'page-section-image-height-desktop': '39rem',
            },
            padding: {
                18: '4.5rem',
            },
            spacing: {
                34: '8.5rem',
            },
            transitionProperty: {
                fill: 'fill',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
