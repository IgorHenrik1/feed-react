import { Header } from '../components/Header';
import { Post } from '../components/Post';
import { Sidebar } from '../components/Sidebar';

import styles from './Page.module.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/LucasCavalheriNSC.png',
            name: 'Lucas Cavalheri',
            role: 'CT0 @ Grupo NSC',
        },
        content: [
            {
                type: 'paragraph',
                content: 'Fala galeraa 👋',
            },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            {
                type: 'link',
                content: 'jane.design/doctorcare',
            },
            {
                type: 'link',
                content: '#novoprojeto',
            },
            {
                type: 'link',
                content: '#rockseat',
            },
        ],
        publishedAt: new Date('2022-02-27'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/hspDiogo.png',
            name: 'Diogo',
            role: 'CT0 @ Grupo Polgo',
        },
        content: [
            {
                type: 'paragraph',
                content: 'Fala galeraa 👋',
            },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            {
                type: 'link',
                content: 'jane.design/doctorcare',
            },
            {
                type: 'link',
                content: '#novoprojeto',
            },
            {
                type: 'link',
                content: '#rockseat',
            },
        ],
        publishedAt: new Date('2022-04-03'),
    },
];
export default function Home() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        );
                    })}
                </main>
            </div>
        </div>
    );
}
