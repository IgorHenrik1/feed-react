import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

import styles from './Page.module.css';

export default function Home() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>posts</main>
            </div>
        </div>
    );
}
