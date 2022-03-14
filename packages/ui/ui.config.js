/** this config can be replaced by windicss.config.js or tailwind.config.js */

const { defineConfig } = require('cosmic-util');

module.exports = defineConfig({
    theme: {
        opacity: {
            0: '0',
            5: '.5',
            10: '.1',
            20: '.2',
            25: '.25',
            30: '.3',
            40: '.4',
            50: '.5',
            60: '.6',
            70: '.7',
            75: '.75',
            80: '.8',
            90: '.9',
            95: '.95',
            100: '1',
        },
        spacing: {
            0: '0',
            1: 'var(--spacing-1)',
            2: 'var(--spacing-2)',
            4: 'var(--spacing-4)',
            6: 'var(--spacing-6)',
            8: 'var(--spacing-8)',
            10: 'var(--spacing-10)',
            12: 'var(--spacing-12)',
            14: 'var(--spacing-14)',
            16: 'var(--spacing-16)',
            18: 'var(--spacing-18)',
            20: 'var(--spacing-20)',
            26: 'var(--spacing-26)',
            32: 'var(--spacing-32)',
            40: 'var(--spacing-40)',
            50: 'var(--spacing-50)',
            60: 'var(--spacing-60)',
            80: 'var(--spacing-80)',
            90: 'var(--spacing-90)',
        },
        extend: {
            fontSize: {
                'xs': ['var(--font-xs)', 'var(--leading-xs)'],
                'sm': ['var(--font-sm)', 'var(--leading-xs)'],
                'md': ['var(--font-md)', 'var(--leading-xs)'],
                'lg': ['var(--font-lg)', 'var(--leading-xs)'],
                'xl': ['var(--font-xl)', 'var(--leading-xs)'],
                '2xl': ['var(--font-2xl)', 'var(--leading-xs)'],
            },
            // extends
        },
    },
});
