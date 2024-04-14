import igniteLogo from '@/assets/ignite-logo.svg';
import Image from 'next/image';
import styles from './Header.module.css';

console.log(igniteLogo);

export function Header() {
    return (
        <header className={styles.header}>
            <Image src={igniteLogo} alt="Ignite Logo" />
        </header>
    );
}
