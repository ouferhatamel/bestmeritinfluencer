import React, {useState, useEffect} from 'react'

// Styles
import styles from './Countdown.module.css'

// Hooks
import useCountdown from '../../hooks/useCountdown'

const endDate = new Date(2024, 8, 19, 0, 0, 0)


//const remainTime = endDate - today;

export default function Countdown() {
    const remainTime = useCountdown(endDate)


  return (
    <div className={styles.countdown}>
        <span id='days'>
            <h2>{remainTime.days}:</h2>
            <h4>dd</h4>
        </span>
        <span id='hours'>
            <h2>{remainTime.hours}:</h2>
            <h4>hh</h4>
        </span>
        <span id='minutes'>
            <h2>{remainTime.minutes}:</h2>
            <h4>mm</h4>
        </span>
        <span id='seconds'>
            <h2>{remainTime.seconds}</h2>
            <h4>ss</h4>
        </span>
    </div>
  )
}
