import { useState, useEffect } from 'react';

export const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getToken = () => localStorage.getItem('token');

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const token = getToken();
      
      const response = await fetch('https://pronet.ap-1.evennode.com/api/admin/getAllNews', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch announcements');
      }
      
      const data = await response.json();
      setAnnouncements(data.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch announcements. Please try again later.');
      console.error('Error fetching announcements:', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteAnnouncement = async (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      try {
        const token = getToken();
        
        const response = await fetch(`https://pronet.ap-1.evennode.com/api/admin/deleteNews/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete announcement');
        }
        
        fetchAnnouncements();
      } catch (err) {
        setError('Failed to delete announcement. Please try again later.');
        console.error('Error deleting announcement:', err);
      }
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return {
    announcements,
    loading,
    error,
    setError,
    fetchAnnouncements,
    deleteAnnouncement,
    getToken
  };
};