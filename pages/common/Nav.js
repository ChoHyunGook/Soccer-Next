import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function Nav(){
    return (
        <nav className={styles.nav}>
        <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/admin-link'>Sign</Link> </li>
        <li className={styles.li}> <Link href='/admin/dashboard'>DashBoard</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/board-link'>Board</Link> </li>
        <li className={styles.li}> <Link href='/todo/todo-list'>Todo</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/game-link'>Game</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/basic-link'>Basic</Link> </li>
        </ul>
        </nav>
    );
}