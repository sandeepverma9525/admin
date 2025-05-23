import React from 'react';
import { X } from 'lucide-react';
import ParticipantItem from './ParticipantItem';

function ParticipantsPanel({ meeting, onClose }) {
  return (
    <div className="side-panel">
      <div className="panel-header">
        <h3 className="font-medium">Participants ({meeting.participants})</h3>
        <button onClick={onClose}>
          <X size={18} />
        </button>
      </div>
      
      <div className="panel-content">
        <div className="participant-list">
          {/* You (Host) */}
          <ParticipantItem 
            name="You" 
            isHost={meeting.host === "You"}
            isYou={true}
          />
          
          {/* Meeting host if not you */}
          {meeting.host !== "You" && (
            <ParticipantItem 
              name={meeting.host} 
              isHost={true} 
              isYou={false}
            />
          )}
          
          {/* Additional participants */}
          {Array.from({ length: meeting.participants - (meeting.host !== "You" ? 2 : 1) }).map((_, index) => (
            <ParticipantItem 
              key={index} 
              name={`Participant ${index + 1}`} 
              isHost={false}
              isYou={false}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParticipantsPanel;