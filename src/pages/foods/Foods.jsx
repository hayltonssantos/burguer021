import React, { useContext, useState } from "react";
import Header from '../../components/header/Header'
import Cards from "../../components/cards/Cards";
import styles from './Foods.module.css'
import { HamburguersContext } from "../../context/hamburguers";

export default function Foods(){
  const {foods} = useContext(HamburguersContext)
  return(
      <div>
        <Header header={'relativeHeader'}/>
        <div className={styles.cardsBox}>
          {foods.map((food)=><Cards key={food.id} food={food}/>)}
        </div>
      </div>
  )
}