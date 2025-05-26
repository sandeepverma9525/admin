import React, { useState, useEffect } from 'react';
import './AffiliateTree.css';

// Sample affiliate data structure
const initialAffiliates = {
  root: {
    id: 'jd001',
    name: 'John Doe',
    level: 'Root Affiliate',
    email: 'john.doe@example.com',
    joinDate: '2023-01-15',
    earnings: '$15,750',
    referrals: 3,
    children: ['as002', 'bj003', 'cw004']
  },
  as002: {
    id: 'as002',
    name: 'Alice Smith',
    level: 'Gold Affiliate',
    email: 'alice.smith@example.com',
    joinDate: '2023-03-10',
    earnings: '$8,920',
    referrals: 2,
    children: ['db005', 'ed006']
  },
  bj003: {
    id: 'bj003',
    name: 'Bob Johnson',
    level: 'Silver Affiliate',
    email: 'bob.johnson@example.com',
    joinDate: '2023-02-22',
    earnings: '$5,340',
    referrals: 1,
    children: ['fm007']
  },
  cw004: {
    id: 'cw004',
    name: 'Carol Williams',
    level: 'Gold Affiliate',
    email: 'carol.williams@example.com',
    joinDate: '2023-04-05',
    earnings: '$9,150',
    referrals: 2,
    children: ['gw008', 'hm009']
  },
  db005: {
    id: 'db005',
    name: 'Dave Brown',
    level: 'Bronze Affiliate',
    email: 'dave.brown@example.com',
    joinDate: '2023-05-18',
    earnings: '$2,430',
    referrals: 0,
    children: []
  },
  ed006: {
    id: 'ed006',
    name: 'Eve Davis',
    level: 'Bronze Affiliate',
    email: 'eve.davis@example.com',
    joinDate: '2023-06-20',
    earnings: '$1,850',
    referrals: 0,
    children: []
  },
  fm007: {
    id: 'fm007',
    name: 'Frank Miller',
    level: 'Bronze Affiliate',
    email: 'frank.miller@example.com',
    joinDate: '2023-07-12',
    earnings: '$1,120',
    referrals: 0,
    children: []
  },
  gw008: {
    id: 'gw008',
    name: 'Grace Wilson',
    level: 'Silver Affiliate',
    email: 'grace.wilson@example.com',
    joinDate: '2023-08-05',
    earnings: '$3,780',
    referrals: 0,
    children: []
  },
  hm009: {
    id: 'hm009',
    name: 'Henry Moore',
    level: 'Bronze Affiliate',
    email: 'henry.moore@example.com',
    joinDate: '2023-09-18',
    earnings: '$920',
    referrals: 0,
    children: []
  }
};

const AffiliateTree = () => {
  const [activeView, setActiveView] = useState('organization'); // 'organization' or 'binary'
  const [affiliates] = useState(initialAffiliates);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [hoverAffiliateId, setHoverAffiliateId] = useState(null);
  const [zoom, setZoom] = useState(100);

  // Handle search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(null);
      return;
    }
    
    // Simple search by name or ID
    const query = searchQuery.toLowerCase().trim();
    const matches = Object.values(affiliates).filter(
      affiliate => 
        affiliate.name.toLowerCase().includes(query) || 
        affiliate.id.toLowerCase().includes(query)
    );
    
    if (matches.length > 0) {
      setSearchResults(matches[0].id); // Focus on first match
    } else {
      setSearchResults(null);
    }
  }, [searchQuery, affiliates]);

  // Handle zoom
  const handleZoomIn = () => setZoom(prev => Math.min(prev + 20, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 20, 60));
  const handleResetView = () => {
    setSearchQuery('');
    setSearchResults(null);
    setZoom(100);
  };
  
  // Helper functions to determine relationships between affiliates
  const isDescendantOf = (parentId, childId) => {
    const parent = affiliates[parentId];
    if (!parent) return false;
    if (parent.children.includes(childId)) return true;
    return parent.children.some(id => isDescendantOf(id, childId));
  };

  const isAncestorOf = (childId, parentId) => {
    return isDescendantOf(parentId, childId);
  };

  // Affiliate Node Component
  const AffiliateNode = ({ affiliate, showDetails }) => {
    let badgeClass = 'affiliate-badge ';
    if (affiliate.level.includes('Root')) badgeClass += 'root-badge';
    else if (affiliate.level.includes('Gold')) badgeClass += 'gold-badge';
    else if (affiliate.level.includes('Silver')) badgeClass += 'silver-badge';
    else if (affiliate.level.includes('Bronze')) badgeClass += 'bronze-badge';
    else badgeClass += 'default-badge';

    return (
      <div 
        className="affiliate-node-container"
        onMouseEnter={() => setHoverAffiliateId(affiliate.id)}
        onMouseLeave={() => setHoverAffiliateId(null)}
      >
        <div className={`affiliate-card ${showDetails ? 'highlighted' : ''}`}>
          <div className="profile-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="affiliate-name">{affiliate.name}</div>
          <div className={badgeClass}>
            {affiliate.level}
          </div>
          
          {/* Detail popup on hover */}
          {showDetails && (
            <div className="detail-popup">
              <h3>{affiliate.name}</h3>
              <div className="detail-content">
                <p className="detail-item"><span className="detail-label">ID:</span> {affiliate.id}</p>
                <p className="detail-item"><span className="detail-label">Email:</span> {affiliate.email}</p>
                <p className="detail-item"><span className="detail-label">Level:</span> {affiliate.level}</p>
                <p className="detail-item"><span className="detail-label">Join Date:</span> {affiliate.joinDate}</p>
                <p className="detail-item"><span className="detail-label">Earnings:</span> {affiliate.earnings}</p>
                <p className="detail-item"><span className="detail-label">Direct Referrals:</span> {affiliate.referrals}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Generate the organization tree
  const renderOrganizationTree = (rootId = 'root') => {
    const affiliate = affiliates[rootId];
    if (!affiliate) return null;

    // If searching and this isn't in the path to the result, hide it
    if (searchResults && rootId !== searchResults && !isAncestorOf(rootId, searchResults) && !isDescendantOf(rootId, searchResults)) {
      return null;
    }

    return (
      <div className="tree-node">
        <AffiliateNode 
          affiliate={affiliate} 
          showDetails={hoverAffiliateId === affiliate.id}
        />
        
        {affiliate.children.length > 0 && (
          <>
            {/* Vertical connector */}
            <div className="tree-connector-vertical"></div>
            
            {/* Horizontal line for children */}
            {affiliate.children.length > 1 && (
              <div className="tree-connector-horizontal"></div>
            )}
            
            {/* Children container */}
            <div className="children-container" >
              {affiliate.children.map(childId => (
                <div key={childId} className="child-branch">
                  {renderOrganizationTree(childId)}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  // Generate the binary tree
  const renderBinaryTree = (rootId = 'root') => {
    const affiliate = affiliates[rootId];
    if (!affiliate) return null;

    // If searching and this isn't in the path to the result, hide it
    if (searchResults && rootId !== searchResults && !isAncestorOf(rootId, searchResults) && !isDescendantOf(rootId, searchResults)) {
      return null;
    }

    // For binary tree, we'll only show 2 children max
    const leftChild = affiliate.children[0];
    const rightChild = affiliate.children[1];

    return (
      <div className="tree-node">
        <AffiliateNode 
          affiliate={affiliate} 
          showDetails={hoverAffiliateId === affiliate.id}
        />
        
        {(leftChild || rightChild) && (
          <>
            {/* Vertical connector */}
            <div className="tree-connector-vertical"></div>
            
            {/* Binary tree branches */}
            <div className="binary-tree-branches">
              <div className="binary-branch">
                {leftChild && renderBinaryTree(leftChild)}
              </div>
              <div className="binary-branch">
                {rightChild && renderBinaryTree(rightChild)}
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="affiliate-tree-container">
      {/* Header */}
      <div className="header">
        <h1>Affiliate Tree Structure</h1>
        <div className="button-container">
          <button className="button export-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export Tree
          </button>
          <button className="button reset-button" onClick={handleResetView}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 2v6h6"></path>
              <path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path>
              <path d="M21 22v-6h-6"></path>
              <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path>
            </svg>
            Reset View
          </button>
        </div>
      </div>
      
      {/* Visualization Area */}
      <div className="affiliate-tree-visualization-area">
        <div className="affiliate-tree-visualization-header">
          <h2 className="affiliate-tree-visualization-title">Network Visualization</h2>
          <div className="affiliate-zoom-controls">
            <div className="affiliate-zoom-text">Zoom: {zoom}%</div>
            <button className="affiliate-zoom-button" onClick={handleZoomOut}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>
            <button className="affiliate-zoom-button" onClick={handleZoomIn}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="affiliate-search-container">
          <input
            type="text"
            placeholder="Search affiliate by name or ID..."
            className="affiliate-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="affiliate-search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        
        {/* View Toggle */}
        <div className="affiliate-view-toggle">
          <button
            className={`view-button ${activeView === 'organization' ? 'active' : ''}`}
            onClick={() => setActiveView('organization')}
          >
            Organization Tree
          </button>
          <button
            className={`view-button ${activeView === 'binary' ? 'active' : ''}`}
            onClick={() => setActiveView('binary')}
          >
            Binary Tree
          </button>
        </div>

        {/* Tree Visualization */}
        <div 
          className="affiliate-tree-visualization"
          style={{
            transform: `scale(${zoom/100})`,
            transformOrigin: 'center top'
          }}
        >
          {activeView === 'organization' ? renderOrganizationTree() : renderBinaryTree()}
        </div>
      </div>
      
      
    </div>
  );
};

export default AffiliateTree;