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
            "text-color": "#4D525D",
            'pg-green': {
                100: '#f8fbee',
                300: '#EBEEE1',
                500: '#a5c928',
                700: "#85A029",
                900: '#5d711a',
            },
            "grey" : {
                50: "#F9FAFB",
                100: "#F3F4F6",
                200: "#E5E7EB",
                300: "#D1D5DB",
                900: "#111827",
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