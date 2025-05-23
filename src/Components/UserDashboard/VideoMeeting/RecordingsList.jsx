import React from 'react';
import { Video } from 'lucide-react';

function RecordingsList({ recordings }) {
  if (recordings.length === 0) {
    return (
      <div className="card">
        <div className="empty-recordings">
          <Video size={48} />
          <p className="empty-recordings-title">No recordings available</p>
          <p className="empty-recordings-text">Past meeting recordings will appear here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="recordings-grid">
        {recordings.map((recording) => (
          <div key={recording.id} className="recording-item">
            <div className="flex align-center">
              <Video className="mr-4" size={24} />
              <div className="flex-1">
                <h3 className="font-bold">{recording.title}</h3>
                <p className="text-muted text-sm">{recording.date} • {recording.duration}</p>
              </div>
              <button className="btn btn-secondary">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecordingsList;