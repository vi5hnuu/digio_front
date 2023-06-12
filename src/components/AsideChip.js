import React from 'react'
import styles from './AsideChip.module.css'

export default function AsideChip({ status, title, icon }) {
  return (
    <div className={styles.chip}>
      <div className={styles['chip-image']}>
        <img src={icon} alt='docs digio' />
      </div>
      <span className={styles['chip-title']}>{title}</span>
      <span className={styles.status}>{status}</span>
    </div>
  )
}
