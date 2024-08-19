import React from 'react'
import { Outlet } from 'react-router-dom'

// Styles
import styles from './Root.module.css'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Root() {
  return (
    <div className={styles.root}>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
