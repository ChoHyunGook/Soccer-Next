import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function MyBasic(){
    return (
        <nav>
        <ul>
        <li className={styles.li}> <Link href='/basic/counter'>Counter</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/basic/calc'>Calc</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/basic/bmi'>Bmi</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/basic/grade'>Grade</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/basic/rps'>가위바위보</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/basic/enchant'>무기강화 게임</Link> </li><br/><br/>
        <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
        </ul>
        </nav>
    );
}