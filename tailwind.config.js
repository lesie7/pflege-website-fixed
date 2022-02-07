module.exports = {
    purge: [
        'themes/layouts/**/*.html',
        'themes/layouts/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'hero': "url('/img/header-img.jpg')",
               },
            dropShadow: {
                '3xl': '0 35px 35px rgba(93, 113, 26, 0.25)',
              }
        },
        colors: {
            'white': '#ffffff',
            "pg-gray": "#ebeee1",
            'pg-green': {
                100: '#f8fbee',
                500: '#a5c928',
                900: '#5d711a',
            },
            "grey" : {
                50: "#F9FAFB",
                100: "#F3F4F6",
                200: "#E5E7EB",
                300: "#D1D5DB",
            },
            "green-gray" : "EBEEE2",
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