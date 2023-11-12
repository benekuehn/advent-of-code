'use client';

import Image from 'next/image'
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
    textWrapper: {
        position: "absolute",
        top: "256px",
        left: "144px",
    },
});

export const LandingPage = () => {
    return (
        <>
            <div className={stylex(styles.textWrapper)}>
                <div style={{
                    color: "var(--Snow, #E5E5F0)",
                    fontSize: "64px",
                    fontWeight: "700",
                    background: "linear-gradient(132deg, #0007B0 -116.33%, rgba(0, 7, 176, 0.00) 115.09%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>Work in progress.</div >
                <div style={{
                    color: "var(--Snow, #E5E5F0)",
                    fontSize: "24px",
                    paddingTop: "24px",
                }}>This site is currently under construction.</div >
            </div>
            <Image src='loadingRobot.svg' alt="Under Construction" width={453} height={382} style={{
                position: "absolute",
                bottom: "160px",
                right: "120px",
            }} />
        </>
    )
};