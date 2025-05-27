
import React, { useState } from 'react';
import './MyTeam.css';
import TeamManagementHeader from './TeamManagementHeader';
import TabsNavigation from './TabsNavigation';
import TeamMembersTable from './TeamMembersTable';
import LevelStructure from './LevelStructure';
import BinaryTree from './BinaryTree';
// import DirectAffiliates from './DirectAffiliates';

const TeamManagement = () => {
  const [activeTab, setActiveTab] = useState('all-members');
  const [showPlacementForm, setShowPlacementForm] = useState(false);
  const [formData, setFormData] = useState({
    affiliate: '',
    placeUnder: '',
    position: 'left'
  });

  // Sample team members data
  const teamMembers = [
   
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlacementSubmit = () => {
    // Validate
    if (!formData.affiliate || !formData.placeUnder) {
      alert('Please select both an affiliate and a parent affiliate');
      return;
    }
    
    console.log('Placement Affiliate Data:', formData);
    // Here you would implement the actual placement logic
    alert(`Affiliate ${formData.affiliate} placed under ${formData.placeUnder} in position ${formData.position}`);
    setShowPlacementForm(false);
    setFormData({
      affiliate: '',
      placeUnder: '',
      position: 'left'
    });
  };

  const getInitialColor = (initials) => {
    // Generate consistent colors based on initials
    const colors = [
      '#ef4444', '#3b82f6', '#22c55e', 
      '#eab308', '#a855f7', '#ec4899'
    ];
    const sum = initials.charCodeAt(0) + (initials.charCodeAt(1) || 0);
    return colors[sum % colors.length];
  };

  const renderTabContent = () => {
  switch (activeTab) {
    case 'all-members':
      return (
        <TeamMembersTable 
          teamMembers={teamMembers} 
          getInitialColor={getInitialColor} 
        />
      );
    // case 'direct-affiliates':
    //   return <DirectAffiliates />;
    case 'level-structure':
      return <LevelStructure />;
    case 'binary-tree':
      return <BinaryTree />;
    default:
      return (
        <TeamMembersTable 
          teamMembers={teamMembers} 
          getInitialColor={getInitialColor} 
        />
      );
  }
};



  return (
    <div className="container">
      <div className="wrapper">
        <TeamManagementHeader setShowPlacementForm={setShowPlacementForm} />
        
        <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {renderTabContent()}
        
      </div>
    </div>
  );
};

export default TeamManagement;