import React from 'react'

// Styles
import styles from './VoteModal.module.css'

export default function VoteModal({influencer, onClose}) {
  return (
    <div className={styles.overlay}>
        <div className={styles.voteModal}>
            <img src={influencer.imgSrc} alt={influencer.name} />
            <h3>{influencer.name}</h3>
            <p>Confirm your choice</p>
            <div>Captcha</div>
            <div className={styles.buttons}>
                <button>Confirm</button>
                <button style={{ backgroundColor: 'gray' }} onClick={onClose}>Cancel</button>
            </div>
        </div>
    </div>
    
  )
}
