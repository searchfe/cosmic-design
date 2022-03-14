const { defineConfig } = require('cosmic-util');

module.exports = defineConfig({
    theme: {
        extend: {
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
            },
        },
    },
});