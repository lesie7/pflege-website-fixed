module.exports = {
    purge: ['themes/layouts/**/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            'white': '#ffffff',
            "pg-gray": "#ebeee1",
            'pg-green': {
                100: '#f8fbee',
                500: '#a5c928',
                900: '#5d711a',
            },
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}