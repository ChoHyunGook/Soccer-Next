import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function MyBasic(){
    return (
        <nav>
        <ul>
        <li className={styles.li}> <Link href='/user/sign-in'>SignIn</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/user/sign-up'>SignUp</Link> </li><br/><br/><br/>
        <li className={styles.li}> <Link href='/user/user-list'>UserList</Link> </li><br/><br/><br/>
        <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
        </ul>
        </nav>
    );
}