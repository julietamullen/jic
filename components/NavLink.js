import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function NavLink({
  navRef,
  handleRef,
  id,
  text,
  link,
  className,
}) {
  return (
    <Link href={link} key={id}>
      <a onClick={handleRef}>
        <li
          id={id}
          className={className}
          style={
            navRef.current == id
              ? { fontWeight: "700", pointerEvents: "none" }
              : { fontWeight: "300" }
          }
        >
          {text}
        </li>
      </a>
    </Link>
  );
}
