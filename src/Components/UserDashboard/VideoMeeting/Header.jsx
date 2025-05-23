import React from 'react';

function Header({ onJoinMeeting }) {
  return (
    <div className="dashboard-header">
      <div className="flex justify-between align-center">
        <div>
          <h1 className="text-3xl font-bold">Meetings</h1>
          <p className="text-muted">Schedule, join, and manage your video meetings</p>
        </div>
        <div className="dashboard-buttons">
          <button 
            onClick={onJoinMeeting}
            className="btn btn-secondary"
          >
            Join Meeting
          </button>
          {/* <button 
            className="btn btn-primary"
            onClick={() => alert("Schedule Meeting functionality would open a form here!")}
          >
            <span className="mr-1">+</span> Schedule Meeting
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;