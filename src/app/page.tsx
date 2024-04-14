import { Header } from '../components/Header';

import styles from './Page.module.css';

export default function Home() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <aside>side bar</aside>
                <main>posts</main>
            </div>
        </div>
    );
}
