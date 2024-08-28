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
    id: '5',
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
  const [searchedInfluencer, setSearchedInfluencer] = useState({})

  function filterList (category) {
    setSearchedInfluencer({}); 
    if(category === 'All') setFilteredList(list)
    else setFilteredList(list.filter(influencer => influencer.categories.includes(category)))
  }
  function searchInfluencerResult (influencer) {
    setSearchedInfluencer(influencer)
  }

  return (
    <div className={styles.influencers}>
      <Countdown/>
      <SearchInfluencer list={list} onResultClick={searchInfluencerResult}/>
      <Categories onCategoryChange={filterList}/>
      <InfluencerList list={filteredList} result={searchedInfluencer}/>
    </div>
  )
}
