/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable global-require */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
    // mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            headline:
                'Formular, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
            text: 'Sailec, ui-serif, Georgia, Cambria, Times New Roman, Times, serif',
        },
        colors: {
            black: '#232628',
            white: '#ffffff',
            lime: '#DADA50',
            ivory: '#F1F1E8',
            steel: {
                200: '#eeeeee',
                DEFAULT: '#9EA8AD',
                500: '#82898c',
            },
            poppy: '#CC5A33',
            green: '#22c55e',
        },
        container: {
            center: true,
            screens: {
                sm: '100%',
                md: '100%',
                lg: '100%',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
        fontSize: {
            xs: ['0.75rem', { lineHeight: '1rem' }],
            sm: ['0.875rem', { lineHeight: '1.25rem' }],
            base: ['1rem', { lineHeight: '1.5rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '1.75rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            // h4 - 32px
            '3xl': ['2rem', { lineHeight: '2.5rem' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            '5xl': ['3rem', { lineHeight: '1' }],
            // h3 - 54px
            '6xl': ['3.375rem', { lineHeight: '1' }],
            // h2 - 68px
            '6.5xl': ['4.25rem', { lineHeight: '1' }],
            // h1 - 76px (desktop)
            '7xl': ['4.75rem', { lineHeight: '1.1' }],
            '8xl': ['6rem', { lineHeight: '1' }],
            '9xl': ['8rem', { lineHeight: '1' }],
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
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.black'),
                        h4: {
                            fontSize: theme('fontSize.3xl')[0],
                            fontWeight: theme('fontWeight.normal'),
                            fontFamily: theme('fontFamily.headline'),
                        },
                        h5: {
                            marginBottom: '1rem',
                            fontFamily: theme('fontFamily.headline'),
                            fontSize: '0.75rem',
                            lineHeight: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '.15em',
                            color: theme('colors.black'),
                            // TODO: not working
                            '&::before': {
                                'padding-right': '6px',
                                content: '/',
                            },
                        },
                        ul: {
                            'list-style-type': 'square',
                        },
                        li: {
                            // not working without important
                            '&::marker': {
                                color: `${theme('colors.black')} !important`,
                            },
                        },
                    },
                },
                xl: {
                    css: {
                        ul: {
                            paddingLeft: '1em',
                        },
                        li: {
                            marginBottom: '1em',
                            fontSize: theme('fontSize.xl')[0],
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
