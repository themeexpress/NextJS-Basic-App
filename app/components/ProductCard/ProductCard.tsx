import React from 'react'
import AddtoCard from '../AddtoCard/AddtoCard'
import styles from './ProductCart.module.css';

const ProductCard = () => {
  return (
    <div className={styles.card}>
        <AddtoCard/>
    </div>
  )
}

export default ProductCard