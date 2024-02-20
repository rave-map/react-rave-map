import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';  
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  const [clubs, setClubs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    axios.get('https://rave-map-backend-server.adaptable.app/clubs')
      .then((response) => {
        setClubs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching club data:', error);
      });
  }, []);

  useEffect(() => {
    if (!searchQuery || searchQuery.length < 2) {
      setShowSuggestions(false);
      setSearchResult([]);
      return;
    }
    const result = clubs.filter((club) =>
      club.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(result);
    setShowSuggestions(true);
  }, [searchQuery, clubs]);

  const handleSearch = () => {
    setShowSuggestions(true);
    if (!searchQuery || searchQuery.length < 2) {
      setSearchResult([]);
      return;
    }
    const result = clubs.filter((club) =>
      club.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(result);
  };

  const handleClubClick = () => {
    setShowSuggestions(false); // Close suggestions when a club is clicked
  };

  return (
    <div>
      <div className='search-bar'>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a club..."
        />
        <button className='search-btn' onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {showSuggestions && (
        <div className="searchList">
          {searchResult.map((club) => (
            <div className="Club box" key={club.id} onClick={handleClubClick}>
              <Link to={`/clubs/${club.id}`}>
                <h3>{club.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
