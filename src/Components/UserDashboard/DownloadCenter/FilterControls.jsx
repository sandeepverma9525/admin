export default function FilterControls({ 
  searchTerm, 
  setSearchTerm, 
  categoryFilter, 
  setCategoryFilter, 
  categories 
}) {
  return (
    <div className="download-filter-controls">
      <div className="download-filter-search">
        <span className="download-filter-icon">
          <svg className="download-filter-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search resources..."
          className="download-filter-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="download-filter-dropdown">
        <select
          className="download-filter-select"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option>All Categories</option>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
    </div>
  );
}