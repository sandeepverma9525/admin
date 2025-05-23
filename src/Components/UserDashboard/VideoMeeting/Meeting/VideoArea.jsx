import React from 'react';
import { Users, CameraOff } from 'lucide-react';

function VideoArea({ isCameraOn }) {
  return (
    <div className="video-area" >
      {isCameraOn ? (
        <div className="camera-display" 
        style={{width:"100%", height:'600px', display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column' }}
        >
          <div className="camera-avatar">
            <div className="camera-gradient"></div>
            <Users size={48} className="camera-icon" />
          </div>
          <p className="font-medium">Your Camera is On</p>
        </div>
      ) : (
        <div className="camera-off-indicator" style={{ width:"100%", height:'600px', display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
          <CameraOff size={48} />
          <p>Camera is turned off</p>
        </div>
      )}
    </div>
  );
}

export default VideoArea;