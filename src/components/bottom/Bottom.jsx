import React from "react";
import styles from './Bottom.module.css'
import { FaFacebookF } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default function Bottom(){
  return(
    <bottom className={styles.bottom}>
      <div className={styles.icons}>
        <FaFacebookF style={{color: 'white', fontSize: '30px', padding:'10px'}}/>
        <FaInstagram style={{color: 'white', fontSize: '30px', padding:'10px'}}/>
        <FaWhatsapp style={{color: 'white', fontSize: '30px', padding:'10px'}}/>
      </div>
      <div className={styles.text}>
        <h3>Creating burger magic since 2024</h3>
      </div>
      <div className={styles.more}>
        More -
      </div>
    </bottom>
  )
}