import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="epinsearch-bar">
      <div className="epinsearch-icon">
        <Search className="epinsearch-icon-svg" />
      </div>
      <input
        type="text"
        placeholder="Search E-pins..."
        className="epinsearch-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;