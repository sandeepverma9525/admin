import React from 'react';
import { Calendar, Clock, Users, Copy } from 'lucide-react';

function MeetingCard({ meeting, onJoin, onCopyLink }) {
  return (
    <div className="card meeting-card">
      <h2 className="text-xl font-bold meeting-card-title">{meeting.title}</h2>
      <p className="meeting-card-description">{meeting.description}</p>
      
      <div className="meeting-info-grid">
        <div className="meeting-info-item">
          <Calendar size={18} />
          <span>{meeting.date}</span>
        </div>
        <div className="meeting-info-item">
          <Clock size={18} />
          <span>{meeting.duration}</span>
        </div>
        <div className="meeting-info-item">
          <Users size={18} />
          <span>{meeting.participants} participants</span>
        </div>
      </div>
      
      {/* <div className="meeting-link-container">
        <span className="meeting-link-label">Meeting Link:</span>
        <span className="meeting-link">{meeting.link}</span>
        <button 
          onClick={() => onCopyLink(meeting.link)} 
          className="copy-button"
        >
          <Copy size={18} />
        </button>
      </div> */}
      
      <div className="meeting-card-footer">
        <div className="host-info">
          Host: {meeting.host}
        </div>
        <button 
          onClick={() => onJoin(meeting)} 
          className="btn btn-primary"
        >
          Join Meeting
        </button>
      </div>
    </div>
  );
}

export default MeetingCard;