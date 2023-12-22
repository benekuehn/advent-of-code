import Link from "next/link";
import { create, props, stylex } from "@stylexjs/stylex";
import { NavItem } from "@/duke/stories/navigation/nav-item/nav-item";
import { usePathname } from "next/navigation";

const styles = create({
  navigation: {
    position: "relative",
    top: "80px",
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
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav {...props(styles.navigation)}>
      <Link href={"/"} className={stylex(styles.link)}>
        <NavItem label="About this project" isActive={pathname == "/"} />
      </Link>
      <div className={stylex(styles.divider)}>
        <div>Advent of Code</div>
      </div>
      <Link href={"/challenges/1-1"} className={stylex(styles.link)}>
        <NavItem label="Day one-one" isActive={pathname == "/challenges/1-1"} />
      </Link>
      <Link href={"/challenges/1-2"} className={stylex(styles.link)}>
        <NavItem label="Day one-two" isActive={pathname == "/challenges/1-2"} />
      </Link>
      <Link href={"/challenges/2-1"} className={stylex(styles.link)}>
        <NavItem label="Day two-one" isActive={pathname == "/challenges/2-1"} />
      </Link>
    </nav>
  );
};
