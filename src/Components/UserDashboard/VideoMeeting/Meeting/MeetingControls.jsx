import React from 'react';
import { Mic, MicOff, Camera, CameraOff, MessageSquare, Users, Settings } from 'lucide-react';

function MeetingControls({ 
  isMicOn, 
  isCameraOn, 
  isMessagesPanelOpen, 
  isParticipantsPanelOpen,
  onToggleMic,
  onToggleCamera,
  onToggleMessages,
  onToggleParticipants
}) {
  return (
    <div className="meeting-controls">
      <button 
        onClick={onToggleMic} 
        className={`control-button ${isMicOn ? '' : 'off'}`}
        aria-label={isMicOn ? "Mute microphone" : "Unmute microphone"}
      >
        {isMicOn ? <Mic size={24} /> : <MicOff size={24} />}
      </button>
      
      <button 
        onClick={onToggleCamera} 
        className={`control-button ${isCameraOn ? '' : 'off'}`}
        aria-label={isCameraOn ? "Turn off camera" : "Turn on camera"}
      >
        {isCameraOn ? <Camera size={24} /> : <CameraOff size={24} />}
      </button>
      
      <button 
        onClick={onToggleMessages}
        className={`control-button ${isMessagesPanelOpen ? 'active' : ''}`}
      >
        <MessageSquare size={24} />
      </button>
      
      <button 
        onClick={onToggleParticipants}
        className={`control-button ${isParticipantsPanelOpen ? 'active' : ''}`}
      >
        <Users size={24} />
      </button>
      
      <button className="control-button">
        <Settings size={24} />
      </button>
    </div>
  );
}

export default MeetingControls;