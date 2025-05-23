import React from 'react';
import { Calendar, Video } from 'lucide-react';

function TabNavigation({ activeTab, onTabChange }) {
  return (
    <div className="tab-nav">
      <button
        className={`tab-button ${activeTab === "scheduled" ? "active" : ""}`}
        onClick={() => onTabChange("scheduled")}
      >
        <Calendar size={18} />
        Scheduled Meetings
      </button>
      <button
        className={`tab-button ${activeTab === "recordings" ? "active" : ""}`}
        onClick={() => onTabChange("recordings")}
      >
        <Video size={18} />
        Recordings
      </button>
    </div>
  );
}

export default TabNavigation;