'use client';

import { Logo } from "@/duke/stories/logo";
import { ReactNode } from "react"
import { create } from '@stylexjs/stylex';
import { Navigation } from "../navigation";

const styles = create({
    logo: {
        position: "absolute",
        top: "80px",
        left: "80px",
    },
});


export const GlobalWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div>
                <Logo style={styles.logo} />
                <Navigation />
                {children}
            </div>
        </>

    )
}
