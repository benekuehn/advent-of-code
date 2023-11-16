'use client';

import { Logo } from "@/duke/stories/logo";
import { ReactNode } from "react"
import { create, props } from '@stylexjs/stylex';
import { Navigation } from "../navigation";

const styles = create({
    wrapper: {
        position: "relative",
        display: "flex",
        gap: "64px",
        top: "80px",
        maxWidth: "1280px",
        margin: "0 auto",
    },
});


export const GlobalWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div {...props(styles.wrapper)}>
                <div>
                    <Logo />
                    <Navigation />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>

    )
}
