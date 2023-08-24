import React from 'react'
import styles from '../styles/header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
           <ul> <li className={styles.logo}>fianancely.</li></ul>
            <ul><li className={styles.logout_button}>Logout</li></ul>
        </nav>
    </div>
  )
}

export default Header