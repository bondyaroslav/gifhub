import styles from "./page.module.css";
import Header from "@/layout/Header/Header";
import Main from "@/layout/Main/Main";

export default function Home() {

    return (
        <div className={styles.page}>
            <Header/>
            <Main/>
        </div>
    );
}
