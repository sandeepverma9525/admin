
// import { useState } from 'react';
// import { Search, Eye, Edit2, UserMinus, UserPlus, ChevronDown, Download } from 'lucide-react';
// import './Affiliates.css';
// import AffiliateModal from '../Affiliates/AffiliatePopup'; // Import the modal

// export default function AffiliateManagement() {
//   // State for the affiliates data
//   const [affiliates, setAffiliates] = useState([
//     {
//       id: 'AF001',
//       name: 'John Doe',
//       email: 'john@example.com',
//       status: 'Active',
//       level: 'Gold',
//       joinDate: '2023-01-15',
//       teamSize: 24,
//       earnings: 3450.75,
//       pendingAmount: 240.50
//     },
//     {
//       id: 'AF002',
//       name: 'Alice Smith',
//       email: 'alice@example.com',
//       status: 'Inactive',
//       level: 'Silver',
//       joinDate: '2023-02-21',
//       teamSize: 12,
//       earnings: 2120.30,
//       pendingAmount: 180.20
//     },
//     {
//       id: 'AF003',
//       name: 'Robert Johnson',
//       email: 'robert@example.com',
//       status: 'Pending',
//       level: 'Bronze',
//       joinDate: '2023-03-08',
//       teamSize: 5,
//       earnings: 820.15,
//       pendingAmount: 120.60
//     },
//     {
//       id: 'AF004',
//       name: 'Mary Williams',
//       email: 'mary@example.com',
//       status: 'Active',
//       level: 'Gold',
//       joinDate: '2023-01-30',
//       teamSize: 31,
//       earnings: 4280.90,
//       pendingAmount: 310.75
//     }
//   ]);

//   // Statistics data
//   const statistics = {
//     totalAffiliates: {
//       count: 182,
//       change: 12.5,
//       increase: true
//     },
//     activeAffiliates: {
//       count: 156,
//       change: 8.2,
//       increase: true
//     },
//     pendingVerification: {
//       count: 8,
//       change: 3.1,
//       increase: true
//     },
//     inactiveAffiliates: {
//       count: 18,
//       change: 2.3,
//       increase: false
//     }
//   };

//   // State for filters
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedStatus, setSelectedStatus] = useState('All Statuses');
//   const [selectedLevel, setSelectedLevel] = useState('All Levels');
  
//   // Filter the affiliates based on search query and filters
//   const filteredAffiliates = affiliates.filter(affiliate => {
//     const matchesSearch = 
//       affiliate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       affiliate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       affiliate.id.toLowerCase().includes(searchQuery.toLowerCase());
    
//     const matchesStatus = selectedStatus === 'All Statuses' || affiliate.status === selectedStatus;
//     const matchesLevel = selectedLevel === 'All Levels' || affiliate.level === selectedLevel;
    
//     return matchesSearch && matchesStatus && matchesLevel;
//   });

//   // Function to handle adding a new affiliate
//   const handleAddAffiliate = () => {
//     alert('Add New Affiliate functionality would open a form here');
//   };

//   // Handle status filter change
//   const handleStatusChange = (e) => {
//     setSelectedStatus(e.target.value);
//   };

//   // Handle level filter change
//   const handleLevelChange = (e) => {
//     setSelectedLevel(e.target.value);
//   };

//   // Function to handle export
//   const handleExport = () => {
//     alert('Export functionality would download affiliate data');
//   };


// //  !Affeliate Data seen eye button 
//   const [isModalOpen, setIsModalOpen] = useState(false);
// const [selectedAffiliate, setSelectedAffiliate] = useState(null);


//   const affiliateData={
//         id: 'AFF123',
//     name: 'Sandeep Verma',
//     email: 'sandeep@example.com',
//     status: 'Active',
//     level: 'Gold',
//     joinDate: '2024-01-15',
//     teamSize: 20,
//     earnings: 12000.5,
//     pendingAmount: 1500.75
//   };

//   const handleViewClick = (affiliate)=>{
//     setSelectedAffiliate(affiliate);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal=()=>{
//     setIsModalOpen(false);
//     setSelectedAffiliate(null);
//   }

//   return (
//     <div className="affiliates-dashboard">
//       <div className="affiliates-container">
//         {/* Header */}
//         <header className="affiliates-header">
//           <h1 className="affiliates-heading1">Affiliate Management</h1>
//           {/* Add New Affiliate Button - Commented out as in original 
//           <button 
//             onClick={handleAddAffiliate}
//             className="btn-primary"
//           >
//             <UserPlus size={20} />
//             <span>Add New Affiliate</span>
//           </button> */}
//         </header>

//         {/* Statistics Cards */}
//         <div className="affiliates-stats-container">
//           <h2 className="affiliates-heading2">Affiliate Statistics</h2>
//           <div className="stats-grid">
//             {/* Total Affiliates */}
//             <div className="stat-card stat-total">
//               <p className="stat-title stat-title-blue">Total Affiliates</p>
//               <div className="stat-content">
//                 <p className="stat-value stat-value-blue">{statistics.totalAffiliates.count}</p>
//                 <span className={statistics.totalAffiliates.increase ? "stat-increase" : "stat-decrease"}>
//                   {statistics.totalAffiliates.increase ? '+' : '-'}{statistics.totalAffiliates.change}% 
//                   {statistics.totalAffiliates.increase ? '↑' : '↓'}
//                 </span>
//               </div>
//             </div>

//             {/* Active Affiliates */}
//             <div className="stat-card stat-active">
//               <p className="stat-title stat-title-blue">Active Affiliates</p>
//               <div className="stat-content">
//                 <p className="stat-value stat-value-blue">{statistics.activeAffiliates.count}</p>
//                 <span className={statistics.activeAffiliates.increase ? "stat-increase" : "stat-decrease"}>
//                   {statistics.activeAffiliates.increase ? '+' : '-'}{statistics.activeAffiliates.change}% 
//                   {statistics.activeAffiliates.increase ? '↑' : '↓'}
//                 </span>
//               </div>
//             </div>

//             {/* Pending Verification */}
//             <div className="stat-card stat-pending">
//               <p className="stat-title stat-title-yellow">Pending Verification</p>
//               <div className="stat-content">
//                 <p className="stat-value stat-value-yellow">{statistics.pendingVerification.count}</p>
//                 <span className={statistics.pendingVerification.increase ? "stat-increase" : "stat-decrease"}>
//                   {statistics.pendingVerification.increase ? '+' : '-'}{statistics.pendingVerification.change}% 
//                   {statistics.pendingVerification.increase ? '↑' : '↓'}
//                 </span>
//               </div>
//             </div>

//             {/* Inactive Affiliates */}
//             <div className="stat-card stat-inactive">
//               <p className="stat-title stat-title-red">Inactive Affiliates</p>
//               <div className="stat-content">
//                 <p className="stat-value stat-value-red">{statistics.inactiveAffiliates.count}</p>
//                 <span className={statistics.inactiveAffiliates.increase ? "stat-increase" : "stat-decrease"}>
//                   {statistics.inactiveAffiliates.increase ? '+' : '-'}{statistics.inactiveAffiliates.change}% 
//                   {statistics.inactiveAffiliates.increase ? '↑' : '↓'}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Affiliates Section */}
//         <div className="affiliates-container">
//           <h2 className="affiliates-heading2">Affiliates</h2>
          
//           {/* Filters & Search */}
//           <div className="affiliates-filters">
//             <div className="affiliates-search-wrapper">
//               <Search className="affiliates-search-icon" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search affiliates..."
//                 className="affiliates-search-input"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
            
//             {/* Status Filter */}
//             <div className="affiliates-select-wrapper">
//               <select 
//                 className="affiliates-filter-select"
//                 value={selectedStatus}
//                 onChange={handleStatusChange}
//               >
//                 <option>All Statuses</option>
//                 <option>Active</option>
//                 <option>Inactive</option>
//                 <option>Pending</option>
//               </select>
//               <ChevronDown size={18} className="affiliates-select-icon" />
//             </div>
            
//             {/* Level Filter */}
//             <div className="affiliates-select-wrapper">
//               <select 
//                 className="affiliates-filter-select"
//                 value={selectedLevel}
//                 onChange={handleLevelChange}
//               >
//                 <option>All Levels</option>
//                 <option>Gold</option>
//                 <option>Silver</option>
//                 <option>Bronze</option>
//               </select>
//               <ChevronDown size={18} className="affiliates-select-icon" />
//             </div>
            
//             {/* Export Button - Commented out as in original
//             <button 
//               onClick={handleExport}
//               className="btn-secondary"
//             >
//               <Download size={18} />
//               <span>Export</span>
//             </button> */}
//           </div>
          
//           {/* Affiliates Table */}
//           <div className="affiliates-table-container">
//             <table className="affiliates-table">
//               <thead>
//                 <tr>
//                   <th className="affiliates-table-header">ID</th>
//                   <th className="affiliates-table-header">Affiliate</th>
//                   <th className="affiliates-table-header">Status</th>
//                   <th className="affiliates-table-header">Level</th>
//                   <th className="affiliates-table-header">Join Date</th>
//                   <th className="affiliates-table-header">Team Size</th>
//                   <th className="affiliates-table-header">Earnings</th>
//                   <th className="affiliates-table-header-right">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredAffiliates.map((affiliate) => (
//                   <tr key={affiliate.id}>
//                     <td className="affiliates-table-cell">{affiliate.id}</td>
//                     <td className="affiliates-table-cell">
//                       <div className="affiliates-affiliate-info">
//                         <p className="affiliates-affiliate-name">{affiliate.name}</p>
//                         <p className="affiliates-affiliate-email">{affiliate.email}</p>
//                       </div>
//                     </td>
//                     <td className="table-cell">
//                       <span className={`badge badge-${affiliate.status.toLowerCase()}`}>
//                         {affiliate.status}
//                       </span>
//                     </td>
//                     <td className="affiliates-table-cell">
//                       <span className={`badge badge-${affiliate.level.toLowerCase()}`}>
//                         {affiliate.level}
//                       </span>
//                     </td>
//                     <td className="affiliates-table-cell">{affiliate.joinDate}</td>
//                     <td className="affiliates-table-cell">{affiliate.teamSize}</td>
//                     <td className="affiliates-table-cell">
//                       <div className="affiliates-earnings-info">
//                         <p className="affiliates-earnings-amount">${affiliate.earnings.toFixed(2)}</p>
//                         <p className="affiliates-pending-amount">${affiliate.pendingAmount.toFixed(2)} pending</p>
//                       </div>
//                     </td>
//                     <td className="affiliates-table-cell">
//                       <div className="affiliates-action-buttons">
//           {/* Affiliate detail button  */}
//                         <button className="affiliates-action-btn" onClick={()=>handleViewClick(affiliate)}>
//                           <Eye size={18} />
//                         </button>
//                         <AffiliateModal 
//                           affiliate=
//                           {selectedAffiliate}
//                           // {affiliateData}
//                           isOpen={isModalOpen}
//                           onClose={handleCloseModal}
//                          />
//                         {/* <button className="affiliates-action-btn">
//                           <Edit2 size={18} />
//                         </button> */}
//                         <button className={`affiliates-action-btn ${affiliate.status === 'Active' ? 'deactivate-btn' : 'activate-btn'}`}>
//                           {affiliate.status === 'Active' ? <UserMinus size={18} /> : <UserPlus size={18} />}
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
          
//           {/* Pagination */}
//           <div className="affiliates-pagination">
//             <p className="affiliates-pagination-info">Showing {filteredAffiliates.length} of {affiliates.length} affiliates</p>
//             <div className="pagination-buttons">
//               <button className="btn-secondary">Previous</button>
//               <button className="btn-primary">Next</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






import { useEffect, useState } from 'react';
import { Search, Eye, Edit2, UserMinus, UserPlus, ChevronDown, Download } from 'lucide-react';
import './Affiliates.css';
import AffiliateModal from './AffiliatePopup'; // Import the modal
import axios from 'axios';

export default function AffiliateManagement() {
 
  // !  
  const [affiliates, setAffiliates] = useState([]);
  const [filteredAffiliates, setFilteredAffiliates] = useState([]);
  const [statistics, setStatistics] = useState({
    totalAffiliates: { count: 0, increase: true },
    activeAffiliates: { count: 0, increase: true },
    inactiveAffiliates: { count: 0, increase: false },
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAffiliate, setSelectedAffiliate] = useState(null);

  const fetchAffiliates = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://pronet.ap-1.evennode.com/api/user/getAllUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response)

      const users = response.data.data;

      setAffiliates(users);
      setFilteredAffiliates(users);

      const total = users.length;
      const active = users.filter((u) => u.status === "Active").length;
      const inactive = users.filter((u) => u.status === "Inactive").length;

      setStatistics({
        totalAffiliates: { count: total, increase: true },
        activeAffiliates: { count: active, increase: true },
        inactiveAffiliates: { count: inactive, increase: false },
      });
    } catch (error) {
      console.error("Error fetching affiliates:", error);
    }
  };

  useEffect(() => {
    fetchAffiliates();
  }, []);

  useEffect(() => {
    let result = affiliates;

    if (searchQuery) {
      result = result.filter(
        (a) =>
          a.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.email?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedStatus !== "All Statuses") {
      result = result.filter((a) => a.status === selectedStatus);
    }

    if (selectedLevel !== "All Levels") {
      result = result.filter((a) => a.level === selectedLevel);
    }

    setFilteredAffiliates(result);
  }, [searchQuery, selectedStatus, selectedLevel, affiliates]);

  const handleStatusChange = (e) => setSelectedStatus(e.target.value);
  const handleLevelChange = (e) => setSelectedLevel(e.target.value);

  const handleViewClick = (affiliate) => {
    setSelectedAffiliate(affiliate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);


  return (
    <div className="affiliates-dashboard">
      <div className="affiliates-container">
        {/* Header */}
        <header className="affiliates-header">
          <h1 className="affiliates-heading1">Affiliate Management</h1>
          
        </header>

        {/* Statistics Cards */}
        <div className="affiliates-stats-container">
          <h2 className="affiliates-heading2">Affiliate Statistics</h2>
          <div className="stats-grid">


            {/* Total Affiliates */}

            {/* <div className="stat-card stat-total">
              <p className="stat-title stat-title-blue">Total Affiliates</p>
              <div className="stat-content">
                <p className="stat-value stat-value-blue">{statistics.totalAffiliates.count}</p>
                <span className={statistics.totalAffiliates.increase ? "stat-increase" : "stat-decrease"}>
                </span>
              </div>
            </div> */}


            {/* Active Affiliates */}

            {/* <div className="stat-card stat-active">
              <p className="stat-title stat-title-blue">Active Affiliates</p>
              <div className="stat-content">
                <p className="stat-value stat-value-blue">{statistics.activeAffiliates.count}</p>
                <span className={statistics.activeAffiliates.increase ? "stat-increase" : "stat-decrease"}>
                </span>
              </div>
            </div> */}


            {/* Inactive Affiliates */}
            <div className="stat-card stat-inactive">
              <p className="stat-title stat-title-red">Inactive Affiliates</p>
              <div className="stat-content">
                <p className="stat-value stat-value-red">{statistics.inactiveAffiliates.count}</p>
                <span className={statistics.inactiveAffiliates.increase ? "stat-increase" : "stat-decrease"}>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliates Section */}
        <div className="affiliates-container">
          <h2 className="affiliates-heading2">Affiliates</h2>
          
          {/* Filters & Search */}
          <div className="affiliates-filters">
            <div className="affiliates-search-wrapper">
              <Search className="affiliates-search-icon" size={18} />
              <input
                type="text"
                placeholder="Search affiliates..."
                className="affiliates-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Status Filter */}
            {/* <div className="affiliates-select-wrapper">
              <select 
                className="affiliates-filter-select"
                value={selectedStatus}
                onChange={handleStatusChange}
              >
                <option>All Statuses</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </select>
              <ChevronDown size={18} className="affiliates-select-icon" />
            </div> */}
            
            {/* Level Filter */}
            {/* <div className="affiliates-select-wrapper">
              <select 
                className="affiliates-filter-select"
                value={selectedLevel}
                onChange={handleLevelChange}
              >
                <option>All Levels</option>
                <option>Gold</option>
                <option>Silver</option>
                <option>Bronze</option>
              </select>
              <ChevronDown size={18} className="affiliates-select-icon" />
            </div> */}
            
            
          </div>
          
          {/* Affiliates Table */}
          <div className="affiliates-table-container">
            <table className="affiliates-table">
              <thead>
                <tr>
                  <th className="affiliates-table-header">ID</th>
                  <th className="affiliates-table-header">Affiliate</th>
                  <th className="affiliates-table-header">Status</th>
                  <th className="affiliates-table-header">Level</th>
                  <th className="affiliates-table-header">Join Date</th>
                  <th className="affiliates-table-header">Team Size</th>
                  <th className="affiliates-table-header">Earnings</th>
                  {/* <th className="affiliates-table-header-right">Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {filteredAffiliates.map((affiliate) => (
                  <tr key={affiliate._id}>
                    <td className="affiliates-table-cell">{affiliate._id}</td>
                    <td className="affiliates-table-cell">
                      <div className="affiliates-affiliate-info">
                        <p className="affiliates-affiliate-name">{affiliate.name}</p>
                        <p className="affiliates-affiliate-email">{affiliate.email}</p>
                      </div>
                    </td>
                    <td className="table-cell">
                      <span className={`badge badge-${affiliate.user_status
?.toLowerCase()}`}>
                        {affiliate.user_status ||'N/A'
}
                      </span>
                    </td>
                    <td className="affiliates-table-cell">
                      <span className={`badge badge-${affiliate.level?.toLowerCase()}`}>
                        {affiliate.level || 'N/A'}
                      </span>
                    </td>
                    {/* <td className="affiliates-table-cell">{affiliate.joinDate}</td>
                    <td className="affiliates-table-cell">{affiliate.teamSize}</td> */}

                    <td className="affiliates-table-cell">{affiliate.createdAt?.slice(0, 10)}</td>
                    <td className="affiliates-table-cell">{affiliate.teamSize || 0}</td>

                    
                    <td className="affiliates-table-cell">
                      <div className="affiliates-earnings-info">
                        {/* <p className="affiliates-earnings-amount">${affiliate.earnings.toFixed(2)}</p>
                        <p className="affiliates-pending-amount">${affiliate.pendingAmount.toFixed(2)} pending</p> */}

                        <p className="affiliates-earnings-amount">${affiliate.earnings?.toFixed(2) || 0}</p>
                      <p className="affiliates-pending-amount">${affiliate.pendingAmount?.toFixed(2) || 0} pending</p>
                      </div>
                    </td>
                    <td className="affiliates-table-cell">
                      {/* <div className="affiliates-action-buttons">
         
                        <button className="affiliates-action-btn" onClick={()=>handleViewClick(affiliate)}>
                          <Eye size={18} />
                        </button>
                        <AffiliateModal 
                          affiliate=
                          {selectedAffiliate}
                          isOpen={isModalOpen}
                          onClose={handleCloseModal}
                         />
                        
                        <button className={`affiliates-action-btn ${affiliate.status === 'Active' ? 'deactivate-btn' : 'activate-btn'}`}>
                          {affiliate.status === 'Active' ? <UserMinus size={18} /> : <UserPlus size={18} />}
                        </button>
                      </div> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="affiliates-pagination">
            <p className="affiliates-pagination-info">Showing {filteredAffiliates.length} of {affiliates.length} affiliates</p>
            <div className="pagination-buttons">
              <button className="btn-secondary">Previous</button>
              <button className="btn-primary">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}