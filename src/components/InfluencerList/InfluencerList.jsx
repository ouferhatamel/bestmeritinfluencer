import React from 'react'
import { FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';

// Styles
import styles from './InfluencerList.module.css'

export default function InfluencerList({list}) {
  return (
    <div className={styles.influencerList}>
        {list.map((influencer,index)=>{
            return (
                <div className={styles.influencerCard} key={index}>
                    <img src={influencer.imgSrc} alt="influencer Image" />
                    <h3>{influencer.name}</h3>
                    <div className={styles.description}>
                      <div className={styles.socialMedia}>
                        {influencer.socialMedia.Youtube && <FaYoutube size='22px'/>}
                        {influencer.socialMedia.Instagram && <FaInstagram size='22px'/>}
                        {influencer.socialMedia.Tiktok && <FaTiktok size='22px'/>}
                      </div>
                      <button>VOTE</button>
                    </div>
                    
                </div>
            )
        })}
    </div>
  )
}
