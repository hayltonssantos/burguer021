import React from 'react'
import styles from './Home.module.css'
import photo from '../../assets/photos/Hamburguer.png'
import back from '../../assets/photos/background/back.jpg'
import Header from '../../components/header/Header'
import Bottom from '../../components/bottom/Bottom'

export default function Home() {
  return (
    <>
      <Header/>
      <div className={styles.home}>
        <div  className={styles.title}>
          <h1 className={styles.text}>BURGUER 021</h1>{/* 
          <h1 className={styles.text2}>HOUSE</h1> */}
        {/* <div className={styles.desc}>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div> */}
        </div>
        <div className={styles.divImg}>
          <img className={styles.img} src={photo}></img>
        </div>
      </div>
      <Bottom/>
    </>
  )
}
