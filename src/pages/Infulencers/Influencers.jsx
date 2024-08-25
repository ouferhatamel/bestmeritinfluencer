import React, {useState} from 'react'
// Styles
import styles from './Influencers.module.css'
// Components
import Countdown from '../../components/Countdown/Countdown'
import InfluencerList from '../../components/InfluencerList/InfluencerList'
import Categories from '../../components/Categories/Categories'
import SearchInfluencer from '../../components/SearchInfluencer/SearchInfluencer'

const list =  
[
  {
    id: '1',
    name: 'Amel Ouferhat',
    imgSrc: '/src/assets/images/hero-image-728w.webp',
    categories : ['Education', 'Tech', 'Science', 'Podcast'],
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
  {
    id: '2',
    name: 'Chaib Yucef',
    imgSrc: '/src/assets/images/hero-image-728w.webp',
    categories : ['Education','Podcast'],
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
  {
    id: '3',
    name: 'Sid Ali Elmouhri',
    imgSrc: '/src/assets/images/hero-image-728w.webp',
    categories : ['Education','Podcast', 'Literature'],
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
  {
    id: '4',
    name: 'Khoubaib Kouas',
    imgSrc: '/src/assets/images/hero-image-728w.webp',
    categories : ['Tourism', 'Travel'],
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
  {
    name: 'Rahou Oussama',
    imgSrc: '/src/assets/images/hero-image-728w.webp',
    categories : ['Edication', 'Business'],
    socialMedia : {
      Youtube : 'Youtube',
      Tiktok : 'Tiktok',
      Instagram : 'Instagram'
    }
  },
]

export default function Influencers() {
  const [filteredList, setFilteredList] = useState(list)

  function filterList (category) {
    if(category === 'All') setFilteredList(list)
    else setFilteredList(list.filter(influencer => influencer.categories.includes(category)))
  }

  return (
    <div className={styles.influencers}>
      <h1>VOTES FINISHES IN</h1>
      <Countdown/>
      <SearchInfluencer list={list}/>
      <Categories onCategoryChange={filterList}/>
      <InfluencerList list={filteredList}/>
    </div>
  )
}
