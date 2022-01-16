import React from 'react'
import styles from './header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img src="./images/logo.png" alt="logo" className={styles.logo} />
            <h1 className={styles.title}>Card Maker</h1>
        </header>
    )
}
export default Header;