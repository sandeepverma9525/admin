import React from 'react';

const AnnouncementTable = ({
  filteredAnnouncements,
  onEdit,
  onDelete,
  loading,
  error
}) => {
  const formatDate = (dateStr) => {
    if (!dateStr || isNaN(new Date(dateStr))) return '-';
    return new Date(dateStr).toLocaleDateString();
  };

  if (loading) {
    return <div className="loading">Loading announcements...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Date</th>
            <th>Visibility</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAnnouncements.length === 0 ? (
            <tr>
              <td colSpan="7" className="no-results">No announcements found</td>
            </tr>
          ) : (
            [...filteredAnnouncements].reverse().map(announcement => (
              <tr key={announcement._id}>
                <td>{announcement._id.substring(0, 6)}...</td>
                <td>
                  <div className="title-cell">
                    <span className="notification-icon">🔔</span>
                    {announcement.title}
                  </div>
                </td>
                <td>{announcement.category || '-'}</td>
                <td>{formatDate(announcement.type === 'scheduled' ? announcement.schdule_date : announcement.date)}</td>
                <td>{announcement.user ? `${announcement.user.length} Users` : 'All Users'}</td>
                <td>
                  <span className={`status-badge ${announcement.type}`}>
                    {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="edit-button" onClick={() => onEdit(announcement)}>
                      ✏️
                    </button>
                    <button className="delete-button" onClick={() => onDelete(announcement._id)}>
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
};

export default AnnouncementTable;