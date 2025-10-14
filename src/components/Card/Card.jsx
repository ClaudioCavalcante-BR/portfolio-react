import React from 'react'
import styles from './Card.module.css'

export default function Card({ children, as: Tag = 'div', className = '' }) {
  return (
    <Tag className={`${styles.card} ${className}`}>
      {children}
    </Tag>
  )
}

