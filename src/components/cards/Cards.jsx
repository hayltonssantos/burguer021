import React from 'react'
import styles from './Cards.module.css'
import photo from '../../assets/photos/Hamburguer.png'


export default function Cards({food}) {
  const prices = String(food.price);
  const parts = prices.split(".");

  const parteInteira = parts[0]; 
  const parteDecimal = parts[1];
  return (
    <>
    <div className={styles.card}>
      <div className={styles.imgBox}>
        <img src={photo} alt={`Hamburguer ${food.name}`} className={styles.mouse}/>
      </div>
      <div className={styles.contentBox}>
        <h3>{food.name}</h3>
        <h4>{food.desc}</h4>
        <h2 className={styles.price}>{parteInteira}.<small>{parteDecimal}</small> €</h2>
        <a href="#" className={styles.buy}>Buy Now</a>
      </div>
    </div>
    </>
  )
}
