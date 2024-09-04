/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';
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
            'blue-5': '#E6ECF2',
            'black-0': '#000',
            black: '#14161f',
            white: '#fff',
            'gray-1': '#ebecf2',
            'gray-2': '#a3a7bf',
            'gray-3': '#777b8c',
            'gray-4': '#f2f2f2',
            'gray-5': '#f1f3f5',
        },
        fontFamily: {
            'font-family': "'Inter', sans-serif",
            'second-family': "'Usual', sans-serif",
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.scrollbar': {
                    'scrollbar-width': 'thin',
                    'scrollbar-color': '#b9d7fb #f1f3f5',
                },
            });
        }),
    ],
};
