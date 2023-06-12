import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import AsideChip from './AsideChip'
import styles from './ProductDetail.module.css'



export default function ProductDetail({ product }) {
  const [showTransition, setShowTransition] = useState(false)

  useEffect(() => {
    setShowTransition(true)
  }, [product.id])
  useLayoutEffect(() => {
    setShowTransition(false)
  }, [product.id])


  return (
    <div className={`${styles['product-detail']} ${showTransition ? styles['animate'] : ''}`}>
      <AsideChip icon={product.icon} title={product.title} status={product.status} />
      <ul className={styles.features}>
        {product.features.map(feature => <li key={feature.id}>{feature.title}</li>)}
      </ul>
      <div className={styles.more}>
        <a href={product.learnMore}>Learn More</a>
        <span>&#x2794;</span>
      </div>
    </div>
  )
}
