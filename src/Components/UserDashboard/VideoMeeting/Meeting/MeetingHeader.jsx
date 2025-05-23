import React from 'react';

function MeetingHeader({ meeting, onLeave }) {
  return (
    <div className="meeting-header">
      <div className="meeting-header-info">
        <h2>{meeting.title}</h2>
        <p>{meeting.date}</p>
      </div>
      <div>
        <button 
          onClick={onLeave} 
          className="btn btn-danger"
        >
          Leave Meeting
        </button>
      </div>
    </div>
  );
}

export default MeetingHeader;