import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  const [clubs, setClubs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showInput, setShowInput] = useState(false);

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

  const toggleInput = () => {
    setShowInput(!showInput);
    setShowSuggestions(false); // Close suggestions when toggling input
  };

  const handleClubClick = () => {
    setShowSuggestions(false); // Close suggestions when a club is clicked
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    // Function to close suggestions and toggle when clicking anywhere outside the search area
    const handleClickOutside = (e) => {
      if (!e.target.closest('.search-bar')) {
        setShowSuggestions(false);
        setShowInput(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className='search-bar'>
        {showInput && (
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress} // Attach event listener here
            placeholder="Search for a club..."
          />
        )}
        <button className='search-btn' onMouseDown={toggleInput}>
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
