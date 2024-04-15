import { Header } from '../components/Header';
import { Post } from '../components/Post';
import { Sidebar } from '../components/Sidebar';

import styles from './Page.module.css';

export default function Home() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    <Post />
                    <Post />
                </main>
            </div>
        </div>
    );
}
