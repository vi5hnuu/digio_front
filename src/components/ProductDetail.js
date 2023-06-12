import React from 'react'
import AsideChip from './AsideChip'
import styles from './ProductDetail.module.css'



export default function ProductDetail({ product }) {
  return (
    <div className={styles['product-detail']}>
      <AsideChip icon={product.icon} title={product.title} status={product.status} />
      <ul className={styles.features}>
        {product.features.map(feature => <li key={feature.id}>{feature.title}</li>)}
      </ul>
    </div>
  )
}
