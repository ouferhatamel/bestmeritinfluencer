import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import styles from './Home.module.css'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>VOTE YOUR BEST MERIT INFLUENCER</h1>
      <Link className={`button ${styles.cta}`} to='Influencers'>VOTE</Link>
    </div>
  )
}
