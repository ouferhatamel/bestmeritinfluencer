import React from 'react'
// Styles
import styles from './Influencers.module.css'
// Components
import Countdown from '../../components/Countdown/Countdown'
import InfluencerList from '../../components/InfluencerList/InfluencerList'

const list = 
[
  {
    name: 'Amel Ouferhat',
    imgSrc: '/vite.svg',
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
  {
    name: 'Youcef Chaib',
    imgSrc: '/vite.svg',
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
  {
    name: 'Youcef Chaib',
    imgSrc: '/vite.svg',
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
  {
    name: 'Youcef Chaib',
    imgSrc: '/vite.svg',
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
  {
    name: 'Amel Ouferhat',
    imgSrc: '/vite.svg',
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
  {
    name: 'Youcef Chaib',
    imgSrc: '/vite.svg',
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
  {
    name: 'Youcef Chaib',
    imgSrc: '/vite.svg',
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
  {
    name: 'Youcef Chaib',
    imgSrc: '/vite.svg',
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
]

export default function Influencers() {
  return (
    <div className={styles.influencers}>
      <h1>VOTES FINISHES IN</h1>
      <Countdown/>
      <div className={styles.influencerList}>
        {/*<Categories/>*/}
        <InfluencerList list={list}/>
      </div>
    </div>
  )
}
