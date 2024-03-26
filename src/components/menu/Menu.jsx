import React from "react";
import styles from './Menu.module.css'

export default function Menu(){
  return(
    <ul className={styles.ul}>
      <li className={styles.li}>
        <a href="" className={styles.a}>Order online</a>
      </li>
      <li className={styles.li}>
        <a href="" className={styles.a}>Home</a>
      </li>
      <li className={styles.li}>
        <a href="" className={styles.a}>Foods</a>
      </li>
      <li className={styles.li}>
        <a href="" className={styles.a}>Map</a>
      </li>
      <li className={styles.li}>
        <a href="" className={styles.a}>About</a>
      </li>
      
    </ul>
  )
}