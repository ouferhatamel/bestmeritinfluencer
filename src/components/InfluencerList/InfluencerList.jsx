import React, { useState } from 'react';
import { FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';

// Components
import VoteModal from '../VoteModal/VoteModal';

// Styles
import styles from './InfluencerList.module.css';

export default function InfluencerList({ list, result }) {
  const [clickedInfluencer, setClickedInfluencer] = useState(null);

  function handleVoteClick(influencer) {
    setClickedInfluencer(influencer);
  }

  function handleCloseModal() {
    setClickedInfluencer(null);
  }

  return (
    <div className={styles.influencerList}>
      {/* Render the VoteModal if clickedInfluencer is not null */}
      {clickedInfluencer && (
        <VoteModal influencer={clickedInfluencer} onClose={handleCloseModal} />
      )}

      {/* Check if a search result is provided and valid */}
      {result && Object.keys(result).length > 0 ? (
        <div className={styles.influencerCard}>
          <img src={result.imgSrc} alt="influencer Image" />
          <h3>{result.name}</h3>
          <div className={styles.description}>
            <div className={styles.socialMedia}>
              {result.socialMedia.Youtube && <FaYoutube size='22px' />}
              {result.socialMedia.Instagram && <FaInstagram size='22px' />}
              {result.socialMedia.Tiktok && <FaTiktok size='22px' />}
            </div>
            <button onClick={() => handleVoteClick(result)}>VOTE</button>
          </div>
        </div>
      ) : list.length === 0 ? (
        <div>No Influencer in this category</div>
      ) : (
        list.map((influencer, index) => (
          <div className={styles.influencerCard} key={index}>
            <img src={influencer.imgSrc} alt="influencer Image" />
            <h3>{influencer.name}</h3>
            <div className={styles.description}>
              <div className={styles.socialMedia}>
                {influencer.socialMedia.Youtube && <FaYoutube size='22px' />}
                {influencer.socialMedia.Instagram && <FaInstagram size='22px' />}
                {influencer.socialMedia.Tiktok && <FaTiktok size='22px' />}
              </div>
              <button onClick={() => handleVoteClick(influencer)}>VOTE</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
