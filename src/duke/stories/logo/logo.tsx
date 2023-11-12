'use client';

import stylex from '@stylexjs/stylex';
import { colors } from '../../tokens/colors.stylex';

const styles = stylex.create({
    wrapper: {
        display: 'flex',
    },
    logoType: {
        fontFamily: 'Geist, Inter, sans-serif',
        fontSize: '24px',
        fontWeight: 700,
        paddingLeft: '32px',
        color: colors.primaryText,
    },
});

export const Logo = ({ style }: { style: Readonly<{}> }) => {
    return (
        <div className={stylex(styles.wrapper, style)}>
            <svg width="38" height="56" viewBox="0 0 38 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 46.5L19 0L0 46.5H15.4285V56H23.592V46.5H38Z" fill="#0007B0" />
            </svg>
            <div className={stylex(styles.logoType)}>Advent< br />of code</div>
        </div>

    )
}
