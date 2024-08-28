import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
        <Link to='/' className={styles.logo}>
          <div>BEST MERIT</div>
          <div>INFLUENCER</div>
        </Link>
    </div>
  )
}
