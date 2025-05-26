import React, { useState } from 'react';
import { useAnnouncements } from './DeleteAnnouncements';
import AnnouncementFilters from './AnnouncementFilters';
import AnnouncementTable from './AnnouncementTable';
import AddAnnouncementModal from './AddAnnouncementModal';
import EditAnnouncementModal from './EditAnnouncementModal';
import './Announcements.css';

export default function AnnouncementManagement() {
  const {
    announcements,
    loading,
    error,
    setError,
    fetchAnnouncements,
    deleteAnnouncement,
    getToken
  } = useAnnouncements();

  // State for filtered data
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('All Status');

  // State for modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Constants
  const categories = ['All Categories', 'Finance', 'System', 'Marketing', 'Promotion', 'Product']; 
  const statuses = ['All Status', 'active', 'schedule'];
  const visibilityOptions = [
    'All Affiliates', 'Iginator & Above', 'Spark & Above', 'Rise & Above', 
    'Pioneer & Above', 'Innovator & Above', 'Catalyst & Above', 'Trailbazer & Above', 
    'Vanguard & Above', 'Luminary & Above', 'Mogul & Above', 'Sovereigh & Above', 'Zenith & Above'
  ];

  // Handle new announcement button click
  const handleNewAnnouncement = () => {
    setShowAddModal(true);
  };

  // Handle edit button click
  const handleEdit = (announcement) => {
    setCurrentAnnouncement(announcement);
    setShowEditModal(true);
  };

  // Handle success messages
  const handleSuccess = (message) => {
    setSuccessMessage(message);
    fetchAnnouncements();
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Filter announcements based on search and filters
  const filteredAnnouncements = Array.isArray(announcements)
    ? announcements.filter(announcement => {
        const matchesSearch = searchTerm === '' || 
          announcement.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          announcement.category?.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = categoryFilter === 'All Categories' || 
          announcement.category === categoryFilter;

        const matchesStatus = statusFilter === 'All Status' || 
          announcement.type === statusFilter;

        return matchesSearch && matchesCategory && matchesStatus;
      })
    : [];

  return (
    <div className="announcement-management">
      <div className="header">
        <h1>Announcement Management</h1>
        <button className="new-button" onClick={handleNewAnnouncement}>
          + New Announcement
        </button>
      </div>

      {successMessage && (
        <div className="success-message">
          ✅ {successMessage}
        </div>
      )}

      <div className="announcement-container">
        <h2>All Announcements ({filteredAnnouncements.length})</h2>
        
        <AnnouncementFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          categories={categories}
          statuses={statuses}
        />
        
        <AnnouncementTable
          filteredAnnouncements={filteredAnnouncements}
          onEdit={handleEdit}
          onDelete={deleteAnnouncement}
          loading={loading}
          error={error}
        />
      </div>

      {/* Add Announcement Modal */}
      <AddAnnouncementModal
        showModal={showAddModal}
        setShowModal={setShowAddModal}
        onSuccess={handleSuccess}
        categories={categories}
        statuses={statuses}
        visibilityOptions={visibilityOptions}
        getToken={getToken}
      />

      {/* Edit Announcement Modal */}
      <EditAnnouncementModal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        currentAnnouncement={currentAnnouncement}
        onSuccess={handleSuccess}
        categories={categories}
        statuses={statuses}
        visibilityOptions={visibilityOptions}
        getToken={getToken}
      />
    </div>
  );
}

