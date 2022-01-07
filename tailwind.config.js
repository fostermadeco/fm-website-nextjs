/* eslint-disable global-require */
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
        },
        // container: {
        //     maxWidth: {
        //         DEFAULT: '100%',
        //         sm: '2rem',
        //         lg: '4rem',
        //         xl: '5rem',
        //         '2xl': '6rem',
        //     },
        // },
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
        },
    },
    plugins: [],
};
