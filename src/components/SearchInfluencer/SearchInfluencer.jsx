import React, { useState } from 'react';

// Styles
import styles from './SearchInfluencer.module.css';

export default function SearchInfluencer({ list }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    function handleInputChange(e) {
        const value = e.target.value;
        setSearchValue(value);

        if (value.length === 0) {
            setSearchResult([]);
            return;
        }

        const filteredResults = list.filter(influencer =>
            influencer.name.toLowerCase().startsWith(value.toLowerCase())
        );

        setSearchResult(filteredResults);
    }

    function handleFocus() {
        setIsFocused(true);
    }

    function handleBlur() {
        setIsFocused(false);
    }

    return (
        <div className={styles.seachInfluencer}>
            <input
                type="text"
                placeholder="Search Influencer name"
                onChange={handleInputChange}
                value={searchValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <div className={styles.searchResults}>
                {isFocused && searchValue && searchResult.length === 0 && (
                    <p>No results found</p>
                )}
                {/* You can render your search results here */}

                <div className={styles.searchResults}>
        {searchResult.length > 0 && (
          searchResult.map((influencer, index) => (
            <p key={index}>{influencer.name}</p>
          ))
        )}
      </div>
            </div>
        </div>
    );
}
//////////////