import { FunctionComponent } from "react"
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
    navItem: {
        display: "flex",
        alignItems: "center",
        gap: "28px",
        width: "248px",
        height: "35px",
        borderRadius: "8px",
        color: "#898A96",
        fontSize: "16px",
        ':hover': {
            boxSizing: stylex.firstThatWorks("border-box", "-webkit-border-box"),
            borderWidth: "1px",
            borderStyle: "dashed",
            borderColor: "#898A96",
            gap: "27px", // 1px less than normal to offset the inner border
        },
    },
    navItemActive: {
        backgroundColor: "#2E2F3D",
        color: "var(--snow)",
    },
    navItemIndicator: {
        height: "16px",
        width: "4px",
        backgroundColor: "var(--duke)",
        visibility: "hidden",
    },
    navItemIndicatorActive: {
        visibility: "visible",
    },
    navItemLabel: {
        textDecoration: "none",
    },
});


type NavItemProps = {
    isActive: boolean;
    label: string;
}

export const NavItem: FunctionComponent<NavItemProps> = ({
    isActive,
    label,
}) => {
    return (
        <div className={stylex(styles.navItem, isActive && styles.navItemActive)}>
            <div className={stylex(styles.navItemIndicator, isActive && styles.navItemIndicatorActive)} />
            <div className={stylex(styles.navItemLabel)}>{label}</div>
        </div>
    )
}
