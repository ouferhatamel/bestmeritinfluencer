import React, { useState } from 'react';

// Styles
import styles from './Categories.module.css';

const categoriesList = ['All', 'Health', 'Science', 'Tech', 'Education', 'Religion', 'Art', 'Podcast', 'Tourism', 'Charity', 'Literature', 'Travel', 'Business'];



export default function Categories({onCategoryChange}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  

  function handleClick(category) {
    setSelectedCategory(category)
    onCategoryChange(category)
  }

  return (
    <div className={styles.categories}>
      {categoriesList.map((cat, index) => (
        <span 
        key={index}
        onClick={() => {handleClick(cat)}}
        className={selectedCategory === cat ? styles.selected : ''}>{cat}</span>
      ))
      }
    </div>
  );
}
