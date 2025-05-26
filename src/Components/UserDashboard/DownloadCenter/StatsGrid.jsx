import react from "react";

export default function StatsGrid({ totalResources, totalDownloads, totalCategories }) {
    
  return (
    <div className="download-stats-grid">
      <div className="download-stats-card">
        <div className="download-stats-label">Total Resources</div>
        <h2 className="download-stats-count">{totalResources}</h2>
        <p className="download-stats-text">Available for download</p>
      </div>

      <div className="download-stats-card">
        <div className="download-stats-label">Total Downloads</div>
        <h2 className="download-stats-count">{totalDownloads}</h2>
        <p className="download-stats-text">All resources combined</p>
      </div>

      <div className="download-stats-card">
        <div className="download-stats-label">Resource Categories</div>
        <h2 className="download-stats-count">{totalCategories}</h2>
        <p className="download-stats-text">Different categories</p>
      </div>
    </div>
  );
}