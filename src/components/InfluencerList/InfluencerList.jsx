import React from 'react';
import { FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';

// Styles
import styles from './InfluencerList.module.css';

export default function InfluencerList({ list, result }) {
  // Check if a search result is provided and valid
  if (result && Object.keys(result).length > 0) {
    return (
      <div className={styles.influencerList}>
        <div className={styles.influencerCard}>
          <img src={result.imgSrc} alt="influencer Image" />
          <h3>{result.name}</h3>
          <div className={styles.description}>
            <div className={styles.socialMedia}>
              {result.socialMedia.Youtube && <FaYoutube size='22px' />}
              {result.socialMedia.Instagram && <FaInstagram size='22px' />}
              {result.socialMedia.Tiktok && <FaTiktok size='22px' />}
            </div>
            <button>VOTE</button>
          </div>
        </div>
      </div>
    );
  }

  // If no search result, render the list of influencers
  if (list.length === 0) {
    return <div className={styles.influencerList}>No Influencer in this category</div>;
  } else {
    return (
      <div className={styles.influencerList}>
        {list.map((influencer, index) => (
          <div className={styles.influencerCard} key={index}>
            <img src={influencer.imgSrc} alt="influencer Image" />
            <h3>{influencer.name}</h3>
            <div className={styles.description}>
              <div className={styles.socialMedia}>
                {influencer.socialMedia.Youtube && <FaYoutube size='22px' />}
                {influencer.socialMedia.Instagram && <FaInstagram size='22px' />}
                {influencer.socialMedia.Tiktok && <FaTiktok size='22px' />}
              </div>
              <button>VOTE</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
