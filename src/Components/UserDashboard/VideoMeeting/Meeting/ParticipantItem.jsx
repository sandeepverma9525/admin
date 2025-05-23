import React from 'react';

function ParticipantItem({ name, isHost, isYou, index }) {
  // Determine avatar class and initials
  let avatarClass = "participant-avatar";
  if (isHost) {
    avatarClass += " host";
  } else if (isYou) {
    avatarClass += " host"; // You might be the host
  } else {
    avatarClass += " attendee";
  }
  
  // Get initials for the avatar
  let initials;
  if (isYou) {
    initials = "You";
  } else if (name === "Sarah Johnson") {
    initials = "SJ";
  } else if (index !== undefined) {
    initials = `P${index}`;
  } else {
    // Default case: get initials from name
    initials = name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }
  
  return (
    <div className="participant-item">
      <div className="participant-content">
        <div className={avatarClass}>
          <span>{initials}</span>
        </div>
        <div>
          <p className="participant-name">
            {name} {isHost ? "(Host)" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ParticipantItem;