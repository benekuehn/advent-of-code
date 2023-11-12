import stylex from '@stylexjs/stylex';

// const DARK = '@media (prefers-color-scheme: dark)';

const COLOR_VALUES = {
    duke: '#0007B0',
    space: '#000110',
    snow: '#E5E5F0',
};

export const colors = stylex.defineVars({
    // primaryText: { default: '#000110', '@media (prefers-color-scheme: dark)': '#E5E5F0' },
    primaryText: COLOR_VALUES.snow,
    accentColor: COLOR_VALUES.duke,
    backgroundColor: COLOR_VALUES.space,
});
