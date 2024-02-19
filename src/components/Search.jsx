import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import { Link } from 'react-router-dom';

function Search() {
  const [clubs, setClubs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios.get('https://rave-map-backend-server.adaptable.app/clubs')
      .then((response) => {
        setClubs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching club data:', error);
      });
  }, []);

  const handleSearch = () => {
    const result = clubs.filter((club) =>
      club.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResult(result);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a club..."
      />
      <button onClick={handleSearch}>Search</button>

      <div className="clubList">
        {searchResult.length > 0 ? (
          
          searchResult.map((club) => (
            <div className="Club box" key={club.id}>
              <Link to={`/clubs/${club.id}`}>
                <h3>{club.name}</h3>
              </Link>
            </div>
          ))
        ) : (
          
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
