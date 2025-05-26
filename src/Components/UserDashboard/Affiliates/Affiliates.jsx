
import { useEffect, useState } from 'react';
import { Search, Eye, Edit2, UserMinus, UserPlus, ChevronDown, Download } from 'lucide-react';
import './Affiliates.css';
import AffiliateModal from './AffiliatePopup'; // Import the modal
import axios from 'axios';

const AffiliateManagement = ()=> {
 
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

  // const handleStatusChange = (e) => setSelectedStatus(e.target.value);
  // const handleLevelChange = (e) => setSelectedLevel(e.target.value);

  // const handleViewClick = (affiliate) => {
  //   setSelectedAffiliate(affiliate);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => setIsModalOpen(false);


// !Referrals Count 
  const countTotalReferrals = (user) => {
  if (!user.referrals || user.referrals.length === 0) return 0;

  let total = user.referrals.length;

  for (let referral of user.referrals) {
    total += countTotalReferrals(referral); // Recursively count nested referrals
  }

  return total;
};



// ! Eye button 
const handleViewClick = (affiliate) => {
  setSelectedAffiliate(affiliate);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  setSelectedAffiliate(null);
};




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

            <div className="stat-card stat-total">
              <p className="stat-title stat-title-blue">Total Affiliates</p>
              <div className="stat-content">
                <p className="stat-value stat-value-blue">{statistics.totalAffiliates.count}</p>
                <span className={statistics.totalAffiliates.increase ? "stat-increase" : "stat-decrease"}>
                </span>
              </div>
            </div>


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
            {/* <div className="stat-card stat-inactive">
              <p className="stat-title stat-title-red">Inactive Affiliates</p>
              <div className="stat-content">
                <p className="stat-value stat-value-red">{statistics.inactiveAffiliates.count}</p>
                <span className={statistics.inactiveAffiliates.increase ? "stat-increase" : "stat-decrease"}>
                </span>
              </div>
            </div> */}
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
                  {/* <th className="affiliates-table-header">Level</th> */}
                  <th className="affiliates-table-header">Join Date</th>
                  <th className="affiliates-table-header">Team Size</th>
                  <th className="affiliates-table-header">Earnings</th>
                  <th className="affiliates-table-header-right">Actions</th>
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
                    
                    <td className="affiliates-table-cell">{affiliate.createdAt?.slice(0, 10)}</td>

                    
                    <td className="affiliates-table-cell"> 
                      {/* ===Direct Referrals===  */}
                      {/* {affiliate.referrals?.length || 0} */}

                      {/* ===n number of Referrals===  */}
                      {countTotalReferrals(affiliate)}
                    </td>

                    <td className="affiliates-table-cell">
                      <div className="affiliates-earnings-info">
                       
                        <p className="affiliates-earnings-amount">${affiliate.earnings?.toFixed(2) || 0}</p>
                      
                      </div>
                    </td>
                    <td className="affiliates-table-cell">
                      <div className="affiliates-action-buttons">
         
                        <button className="affiliates-action-btn" onClick={()=>handleViewClick(affiliate)} >
                          <Eye size={18} />
                        </button>
                        <AffiliateModal 
                          affiliate=
                          {selectedAffiliate}
                          isOpen={isModalOpen}
                          onClose={handleCloseModal}
                         />
                        
                        {/* <button className={`affiliates-action-btn ${affiliate.status === 'Active' ? 'deactivate-btn' : 'activate-btn'}`}>
                          {affiliate.status === 'Active' ? <UserMinus size={18} /> : <UserPlus size={18} />}
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="affiliates-pagination">
            <p className="affiliates-pagination-info">Showing {filteredAffiliates.length} of {affiliates.length} affiliates</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffiliateManagement