export default function NotificationsTab() {
  return (
    <div>
      <div className="panel-header">
        <h2>Notification Preferences</h2>
        <p>Manage your notification settings</p>
      </div>
      
      <div>
        <div className="notification-item">
          <div className="notification-info">
            <h3>Email Notifications</h3>
            <p>Receive updates via email</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <div className="toggle-bg active">
              <div className="toggle-circle"></div>
            </div>
          </label>
        </div>
        
        <div className="notification-item">
          <div className="notification-info">
            <h3>SMS Notifications</h3>
            <p>Receive updates via text message</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <div className="toggle-bg">
              <div className="toggle-circle"></div>
            </div>
          </label>
        </div>
        
        <div className="notification-item">
          <div className="notification-info">
            <h3>Marketing Communications</h3>
            <p>Receive promotional offers and updates</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <div className="toggle-bg">
              <div className="toggle-circle"></div>
            </div>
          </label>
        </div>
      </div>
      
      <div className="form-actions">
        <button className="button-primary">
          Save Preferences
        </button>
      </div>
    </div>
  );
}
