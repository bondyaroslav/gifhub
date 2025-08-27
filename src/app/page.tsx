import styles from "./page.module.css";
import Header from "@/components/layout/Header/Header";
import Main from "@/components/layout/Main/Main";

export default function Home() {

    return (
        <div className={styles.page}>
            <Header/>
            <Main/>
        </div>
    );
}
