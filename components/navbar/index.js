import Link from "next/link";

import styles from "../../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/products">
            Produtos
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/abaut">
            Sobre nós
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/todos">
            Todos
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/contact">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
