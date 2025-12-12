// tailwind.config.js
const config = {
    content: [
        "./src/app/**/*.{js,jsx,ts,tsx,html,css}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx,html}",
    ],
    theme: {
        extend: {
            colors: { accent: "var(--accent)" },
        },
    },
    darkMode: "class",
    plugins: [],
};

export default config;
