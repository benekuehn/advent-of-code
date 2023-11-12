import Link from "next/link"
import { create, props, stylex } from '@stylexjs/stylex';
import { NavItem } from "@/duke/stories/navigation/nav-item/nav-item";

const styles = create({
    navigation: {
        position: "absolute",
        top: "220px",
        left: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
    },
    link: {
        textDecoration: "none",
    },
    divider: {
        width: "248px",
        height: "35px",
        paddingTop: "16px",
        paddingLeft: "32px",
        color: "#fff",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
    },
});

export const Navigation = () => {
    return (
        <nav {...props(styles.navigation)}>
            <Link href={"#"} className={stylex(styles.link)}><NavItem label="About this project" isActive={true} /></Link>
            <div className={stylex(styles.divider)}><div>Advent of Code</div></div>
            <Link href={"#"} className={stylex(styles.link)}><NavItem label="Day one" isActive={false} /></Link>
            <Link href={"#"} className={stylex(styles.link)}><NavItem label="Day two" isActive={false} /></Link>
            <Link href={"#"} className={stylex(styles.link)}><NavItem label="Day three" isActive={false} /></Link>
            <Link href={"#"} className={stylex(styles.link)}><NavItem label="Day four" isActive={false} /></Link>
            <Link href={"#"} className={stylex(styles.link)}><NavItem label="Day five" isActive={false} /></Link>
            <Link href={"#"} className={stylex(styles.link)}><NavItem label="Day six" isActive={false} /></Link>
        </nav>
    )
}
