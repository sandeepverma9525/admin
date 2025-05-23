import React from 'react';
import { X } from 'lucide-react';

function MessagePanel({ 
  messages, 
  newMessage, 
  onClose, 
  onSend, 
  onInputChange, 
  onKeyDown
}) {
  return (
    <div className="side-panel">
      <div className="panel-header">
        <h3 className="font-medium">Messages</h3>
        <button onClick={onClose}>
          <X size={18} />
        </button>
      </div>
      
      <div className="panel-content">
        <div className="message-list">
          {messages.length > 0 ? (
            messages.map(message => (
              <div key={message.id} className="message-item">
                <div className="message-header">
                  <span>{message.sender}</span>
                  <span>{message.time}</span>
                </div>
                <p>{message.text}</p>
              </div>
            ))
          ) : (
            <p className="text-muted text-center text-sm">No messages yet</p>
          )}
        </div>
      </div>
      
      <div className="panel-footer">
        <div className="message-input-container">
          <input
            type="text"
            value={newMessage}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            placeholder="Type a message..."
            className="message-input"
          />
          <button 
            onClick={onSend} 
            className="send-button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessagePanel;