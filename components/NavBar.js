import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>

      <style jsx>{`
        nav {
        }
        a {
          text-decoration: none;
          color: black;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
