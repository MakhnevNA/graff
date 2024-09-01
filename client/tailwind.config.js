/** @type {import('tailwindcss').Config} */

import { transperent, white } from 'tailwindcss/colors';

export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            transperent,
            white,
            'blue-1': '#798fff',
            'blue-2': '#6172cc',
            'blue-3': '#b9d7fb',
            'blue-4': '#e2eaf1',
            'black-0': '#000',
            black: '#14161f',
            white: '#fff',
            'gray-1': '#ebecf2',
            'gray-2': '#a3a7bf',
            'gray-3': '#777b8c',
        },
        fontFamily: {
            'font-family': "'Inter', sans-serif",
            'second-family': "'Usual', sans-serif",
        },
    },
    plugins: [],
};
