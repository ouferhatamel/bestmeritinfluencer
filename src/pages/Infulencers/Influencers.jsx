import React from 'react'
import styles from './Influencers.module.css'
import Countdown from '../../components/Countdown/Countdown'

export default function Influencers() {
  return (
    <div className={styles.influencers}>
      <Countdown/>
    </div>
  )
}
