import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/photos/Logo.png'
import Menu from '../menu/Menu'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.menu}>
        <Menu/>
      </div>
      <div className={styles.text}>
        <span>
          <span className={styles.call}>Call and Order in</span> - WhatsApp
        </span>
        <span className={styles.number}>963 733 935</span>
      </div>
    </header>
  )
}
