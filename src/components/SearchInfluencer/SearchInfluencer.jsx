import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";

// Styles
import styles from './SearchInfluencer.module.css';

export default function SearchInfluencer({ list, onResultClick }) {
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
        const filteredResults = list.filter(influencer => {
            const words = influencer.name.toLowerCase().split(' '); // Split the name into words
            return words.some(word => word.startsWith(value.toLowerCase())); // Check if any word starts with the input value
        });
        setSearchResult(filteredResults);
    }
    function handleResultClick (influencer) {
        onResultClick(influencer);
        setSearchResult([]); // Optionally clear the search results
        setIsFocused(false); // Close the search results

    }
    function handleFocus() {
        setIsFocused(true);
    }
    function handleBlur() {
        setIsFocused(false);
    }
    return (
        <div className={styles.seachInfluencer}>
            <div className={styles.searchInput}>
                <input
                    type="text"
                    placeholder="Search Influencer name"
                    onChange={handleInputChange}
                    value={searchValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <span><FiSearch size='20px'/></span>
            </div>
            
            <div className={styles.searchResults}>
                {isFocused && searchValue && searchResult.length === 0 && (
                    <ul>
                        <li>No results found</li>
                    </ul>
                )}
                <ul>
                    {searchResult.length > 0 && (
                        searchResult.map(influencer => (
                            <li key={influencer.id} onClick={()=> handleResultClick(influencer)}>{influencer.name}</li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}