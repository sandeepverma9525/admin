
// import React, { useState } from 'react';
// import './BonusStructure.css';

// const BonusStructureManagement = () => {
  



//   const handleReset = () => {
//     setDirectBonus(10);
//     setTeamBonus(5);
//     setMonthlyBonus(8);
//     setLifestyleFund(2);
//     setLevels([
//       ]);
//   };

//   const handleSaveChanges = () => {
//     alert('Changes saved successfully!');
//   };

//   return (
//     <div className="bonus-container">
//       <div className="bonus-header">
//         <h1>Bonus Structure Management</h1>
//         <div className="bonus-buttons">
//           <button className="reset" onClick={handleReset}>🔄 Reset</button>
//           <button className="save" onClick={handleSaveChanges}>💾 Save</button>
//         </div>
//       </div>


//       <div className='bonus-top-card'>
//         <div className="bonus-card">
//           <h3>Direct Bonus</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>Monthly Bonus</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//             />
//             <span>%</span>
//           </div>
//         </div>
//         <div className="bonus-card">
//           <h3>Jewallery fund </h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>Travel Fund</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//             />
//             <span>%</span>
//           </div>
//         </div>


//         <div className="bonus-card">
//           <h3>Car Fund</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//             />
//             <span>%</span>
//           </div>
//         </div>


//         <div className="bonus-card">
//           <h3>House Fund</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//             />
//             <span>%</span>
//           </div>
//         </div>

//       </div>


//       <h1 className='level-heading'>Level-wise Bonus Structure</h1>
      
//       <div className='bonus-level-card'>
//         <div className="bonus-card">
//           <h3>IGINATOR</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//             />
//             <span>%</span>
//           </div>
//         </div>

//          <div className="bonus-card">
//           <h3>SPARK</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//             />
//             <span>%</span>
//           </div>
//         </div>


//          <div className="bonus-card">
//           <h3>RISE</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//             />
//             <span>%</span>
//           </div>
//         </div>


//          <div className="bonus-card">
//           <h3>PIONEER</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//             />
//             <span>%</span>
//           </div>
//         </div>

        
//       </div>

//     </div>
//   );
// };

// export default BonusStructureManagement;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './BonusStructure.css';

// const BonusStructureManagement = () => {
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [bonusData, setBonusData] = useState({
//     _id: '',
//     direct_bonus_percent: 10,
//     monthly_bonus_percent: 35,
//     jewellery_fund_percent: 2,
//     travel_fund_percentage: 3,
//     car_fund_percentage: 3,
//     house_fund_percentage: 2,
//     levelStructure: []
//   });
//   const [originalData, setOriginalData] = useState(null);

//   useEffect(() => {
//     fetchBonusStructure();
//   }, []);

//   const fetchBonusStructure = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       const response = await axios.get('https://pronet.ap-1.evennode.com/api/admin/GetbonusStructure', {
//         headers: { Authorization: `Bearer ${token}` }
//       });

     
      
//       console.log(response)
      
//       setBonusData(response.data);
//       setOriginalData(JSON.parse(JSON.stringify(response.data))); // Deep copy for reset functionality
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching bonus structure:', error);
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setBonusData({
//       ...bonusData,
//       [field]: parseFloat(value)
//     });
//   };

//   const handleLevelChange = (index, value) => {
//     const updatedLevels = [...bonusData.levelStructure];
//     updatedLevels[index] = {
//       ...updatedLevels[index],
//       binary_bonus: parseFloat(value)
//     };

//     setBonusData({
//       ...bonusData,
//       levelStructure: updatedLevels
//     });
//   };

//   const handleReset = () => {
//     if (originalData) {
//       setBonusData(JSON.parse(JSON.stringify(originalData)));
//     }
//   };

//   const handleSaveChanges = async () => {
//     try {
//       setSaving(true);
//       const token = localStorage.getItem('token');
      
//       if (!bonusData._id) {
//         // If no ID exists, use POST to create a new structure
//         await axios.post(
//           'https://pronet.ap-1.evennode.com/api/admin/addBonusStructure',
//           bonusData,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       } else {
//         // If ID exists, use PUT to update
//         await axios.put(
//           'https://pronet.ap-1.evennode.com/api/admin/bonusStructureUpdate',
//           bonusData,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       }
      
//       // Refresh data after saving
//       await fetchBonusStructure();
//       alert('Changes saved successfully!');
//     } catch (error) {
//       console.error('Error saving bonus structure:', error);
//       alert('Failed to save changes. Please try again.');
//     } finally {
//       setSaving(false);
//     }
//   };

//   // Group level structures into rows of 4 for display
//   const renderLevelStructure = () => {
//     if (!bonusData.levelStructure || bonusData.levelStructure.length === 0) {
//       return null;
//     }

//     const rows = [];
//     for (let i = 0; i < bonusData.levelStructure.length; i += 4) {
//       const rowItems = bonusData.levelStructure.slice(i, i + 4);
//       rows.push(
//         <div className='bonus-level-card' key={`row-${i}`}>
//           {rowItems.map((level, index) => (
//             <div className="bonus-card" key={level._id || index}>
//               <h3>{level.level}</h3>
//               <div className="bonustop-input-group">
//                 <input
//                   type="number"
//                   value={level.binary_bonus || 0}
//                   onChange={(e) => handleLevelChange(i + index, e.target.value)}
//                   disabled={saving}
//                 />
//                 <span>%</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     }
//     return rows;
//   };

//   if (loading) {
//     return <div className="loading">Loading bonus structure data...</div>;
//   }

//   return (
//     <div className="bonus-container">
//       <div className="bonus-header">
//         <h1>Bonus Structure Management</h1>
//         <div className="bonus-buttons">
//           <button className="reset" onClick={handleReset} disabled={saving}>
//             🔄 Reset
//           </button>
//           <button className="save" onClick={handleSaveChanges} disabled={saving}>
//             {saving ? 'Saving...' : '💾 Save'}
//           </button>
//         </div>
//       </div>

//       <div className='bonus-top-card'>
//         <div className="bonus-card">
//           <h3>Direct Bonus</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={bonusData.direct_bonus_percent || 0}
//               onChange={(e) => handleInputChange('direct_bonus_percent', e.target.value)}
//               disabled={saving}
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>Monthly Bonus</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={bonusData.monthly_bonus_percent || 0}
//               onChange={(e) => handleInputChange('monthly_bonus_percent', e.target.value)}
//               disabled={saving}
//             />
//             <span>%</span>
//           </div>
//         </div>
        
//         <div className="bonus-card">
//           <h3>Jewellery Fund</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={bonusData.jewellery_fund_percent || 0}
//               onChange={(e) => handleInputChange('jewellery_fund_percent', e.target.value)}
//               disabled={saving}
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>Travel Fund</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={bonusData.travel_fund_percentage || 0}
//               onChange={(e) => handleInputChange('travel_fund_percentage', e.target.value)}
//               disabled={saving}
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>Car Fund</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={bonusData.car_fund_percentage || 0}
//               onChange={(e) => handleInputChange('car_fund_percentage', e.target.value)}
//               disabled={saving}
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>House Fund</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={bonusData.house_fund_percentage || 0}
//               onChange={(e) => handleInputChange('house_fund_percentage', e.target.value)}
//               disabled={saving}
//             />
//             <span>%</span>
//           </div>
//         </div>
//       </div>

//       <h1 className='level-heading'>Level-wise Bonus Structure</h1>
      
//       {renderLevelStructure()}
//     </div>
//   );
// };

// export default BonusStructureManagement;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './BonusStructure.css';

// const BonusStructureManagement = () => {
//   const [loading, setLoading] = useState(true);
//   const [bonusData, setBonusData] = useState({
//     _id: '',
//     direct_bonus_percent: 10,
//     monthly_bonus_percent: 35,
//     jewellery_fund_percent: 2,
//     travel_fund_percentage: 3,
//     car_fund_percentage: 3,
//     house_fund_percentage: 2,
//     levelStructure: []
//   });
//   const [originalData, setOriginalData] = useState(null);

//   useEffect(() => {
//     fetchBonusStructure();
//   }, []);

//   const fetchBonusStructure = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       const response = await axios.get('https://pronet.ap-1.evennode.com/api/admin/GetbonusStructure', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
      
//       setBonusData(response.data);
//       setOriginalData(JSON.parse(JSON.stringify(response.data))); // Deep copy for reset functionality
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching bonus structure:', error);
//       setLoading(false);
//     }
//   };

//   const handleReset = () => {
//     if (originalData) {
//       setBonusData(JSON.parse(JSON.stringify(originalData)));
//     } else {
//       // Default values if no original data available
//       setBonusData({
//         direct_bonus_percent: 10,
//         monthly_bonus_percent: 35,
//         jewellery_fund_percent: 2,
//         travel_fund_percentage: 3,
//         car_fund_percentage: 3,
//         house_fund_percentage: 2,
//         levelStructure: []
//       });
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setBonusData(prev => ({
//       ...prev,
//       [field]: parseFloat(value) || 0
//     }));
//   };

//   const handleLevelChange = (levelName, value) => {
//     const updatedLevelStructure = bonusData.levelStructure.map(level => {
//       if (level.level === levelName) {
//         return { ...level, binary_bonus: parseFloat(value) || 0 };
//       }
//       return level;
//     });

//     setBonusData(prev => ({
//       ...prev,
//       levelStructure: updatedLevelStructure
//     }));
//   };


//   const handleSaveChanges = async () => {
//   try {
//     const token = localStorage.getItem('token');

//     if (!bonusData._id) {
//       await axios.post(
//         'https://pronet.ap-1.evennode.com/api/admin/addBonusStructure',
//         bonusData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//     } else {
//       await axios.put(
//         'https://pronet.ap-1.evennode.com/api/admin/bonusStructureUpdate',
//         bonusData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       // Update each level separately
//       if (bonusData.levelStructure && bonusData.levelStructure.length > 0) {
//         for (const level of bonusData.levelStructure) {
//           await axios.put(
//             `https://pronet.ap-1.evennode.com/api/admin/bonusStructureUpdate?levelName=${level.level}`,
//             { binary_bonus: level.binary_bonus },
//             { headers: { Authorization: `Bearer ${token}` } }
//           );
//         }
//       }
//     }

//     alert('Changes saved successfully!');
//     await fetchBonusStructure();
//   } catch (error) {
//     console.error('Error saving bonus structure:', error);
//     alert('Failed to save changes. Please try again.');
//   }
// };


//   // Helper function to find level data by level name
//   const getLevelValue = (levelName) => {
//     if (!bonusData.levelStructure || bonusData.levelStructure.length === 0) return 0;
    
//     const level = bonusData.levelStructure.find(l => l.level === levelName);
//     return level ? level.binary_bonus : 0;
//   };

//   if (loading) {
//     return <div className="loading">Loading bonus structure data...</div>;
//   }

//   return (
//     <div className="bonus-container">
//       <div className="bonus-header">
//         <h1>Bonus Structure Management</h1>
//         <div className="bonus-buttons">
//           <button className="reset" onClick={handleReset}>🔄 Reset</button>
//           <button className="save" onClick={handleSaveChanges}>💾 Save</button>
//         </div>
//       </div>

//       <div className='bonus-top-card'>
//         <div className="bonus-card">
//           <h3>Direct Bonus</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={bonusData.direct_bonus_percent}
//               onChange={(e) => handleInputChange('direct_bonus_percent', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>Monthly Bonus</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={bonusData.monthly_bonus_percent}
//               onChange={(e) => handleInputChange('monthly_bonus_percent', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>
        
//         <div className="bonus-card">
//           <h3>Jewallery fund</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={bonusData.jewellery_fund_percent}
//               onChange={(e) => handleInputChange('jewellery_fund_percent', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>Travel Fund</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={bonusData.travel_fund_percentage}
//               onChange={(e) => handleInputChange('travel_fund_percentage', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>Car Fund</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={bonusData.car_fund_percentage}
//               onChange={(e) => handleInputChange('car_fund_percentage', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>House Fund</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={bonusData.house_fund_percentage}
//               onChange={(e) => handleInputChange('house_fund_percentage', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>
//       </div>

//       <h1 className='level-heading'>Level-wise Bonus Structure</h1>
      
//       <div className='bonus-level-card'>
//         <div className="bonus-card">
//           <h3>IGINATOR</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={getLevelValue('IGINATOR')}
//               onChange={(e) => handleLevelChange('IGINATOR', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>SPARK</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={getLevelValue('SPARK')}
//               onChange={(e) => handleLevelChange('SPARK', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>RISER</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={getLevelValue('RISER')}
//               onChange={(e) => handleLevelChange('RISER', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>

//         <div className="bonus-card">
//           <h3>PIONEER</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={getLevelValue('PIONEER')}
//               onChange={(e) => handleLevelChange('PIONEER', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>
//       </div>
      
//       <div className='bonus-level-card'>
//         <div className="bonus-card">
//           <h3>INNOVATOR</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={getLevelValue('INNOVATOR')}
//               onChange={(e) => handleLevelChange('INNOVATOR', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>
        
//         <div className="bonus-card">
//           <h3>CATALYST</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={getLevelValue('CATALYST')}
//               onChange={(e) => handleLevelChange('CATALYST', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>
        
//         <div className="bonus-card">
//           <h3>TRAILBLAZER</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={getLevelValue('TRAILBLAZER')}
//               onChange={(e) => handleLevelChange('TRAILBLAZER', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>
        
//         <div className="bonus-card">
//           <h3>VANGUARD</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={getLevelValue('VANGUARD')}
//               onChange={(e) => handleLevelChange('VANGUARD', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>
//       </div>
      
//       <div className='bonus-level-card'>
//         <div className="bonus-card">
//           <h3>LUMINARY</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={getLevelValue('LUMINARY')}
//               onChange={(e) => handleLevelChange('LUMINARY', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>
        
//         <div className="bonus-card">
//           <h3>MOGUL</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={getLevelValue('MOGUL')}
//               onChange={(e) => handleLevelChange('MOGUL', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>
        
//         <div className="bonus-card">
//           <h3>SOVEREIGN</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={getLevelValue('SOVEREIGN')}
//               onChange={(e) => handleLevelChange('SOVEREIGN', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>
        
//         <div className="bonus-card">
//           <h3>ZENITH</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={getLevelValue('ZENITH')}
//               onChange={(e) => handleLevelChange('ZENITH', e.target.value)}
//             />
//             <span>%</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BonusStructureManagement;







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BonusStructure.css';

const BonusStructureManagement = () => {
  const [loading, setLoading] = useState(true);
  const [bonusData, setBonusData] = useState({
    _id: '',
    direct_bonus_percent: 10,
    monthly_bonus_percent: 35,
    jewellery_fund_percent: 2,
    travel_fund_percentage: 3,
    car_fund_percentage: 3,
    house_fund_percentage: 2,
    levelStructure: []
  });
  const [originalData, setOriginalData] = useState(null);

  useEffect(() => {
    fetchBonusStructure();
  }, []);

  const fetchBonusStructure = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.get('https://pronet.ap-1.evennode.com/api/admin/GetbonusStructure', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setBonusData(response.data);
      setOriginalData(JSON.parse(JSON.stringify(response.data))); // Deep copy for reset functionality
      setLoading(false);
    } catch (error) {
      console.error('Error fetching bonus structure:', error);
      setLoading(false);
    }
  };

  const handleReset = () => {
    if (originalData) {
      setBonusData(JSON.parse(JSON.stringify(originalData)));
    } else {
      // Default values if no original data available
      setBonusData({
        direct_bonus_percent: 10,
        monthly_bonus_percent: 35,
        jewellery_fund_percent: 2,
        travel_fund_percentage: 3,
        car_fund_percentage: 3,
        house_fund_percentage: 2,
        levelStructure: []
      });
    }
  };

  const handleInputChange = (field, value) => {
    setBonusData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const handleLevelChange = (levelName, value) => {
    const updatedLevelStructure = bonusData.levelStructure.map(level => {
      if (level.level === levelName) {
        return { ...level, binary_bonus: parseFloat(value) || 0 };
      }
      return level;
    });

    setBonusData(prev => ({
      ...prev,
      levelStructure: updatedLevelStructure
    }));
  };


  const handleSaveChanges = async () => {
  try {
    const token = localStorage.getItem('token');

    if (!bonusData._id) {
      await axios.post(
        'https://pronet.ap-1.evennode.com/api/admin/addBonusStructure',
        bonusData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } else {
      await axios.put(
        'https://pronet.ap-1.evennode.com/api/admin/bonusStructureUpdate',
        bonusData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Update each level separately
      if (bonusData.levelStructure && bonusData.levelStructure.length > 0) {
        for (const level of bonusData.levelStructure) {
          await axios.put(
            `https://pronet.ap-1.evennode.com/api/admin/bonusStructureUpdate?levelName=${level.level}`,
            { binary_bonus: level.binary_bonus },
            { headers: { Authorization: `Bearer ${token}` } }
          );
        }
      }
    }

    alert('Changes saved successfully!');
    await fetchBonusStructure();
  } catch (error) {
    console.error('Error saving bonus structure:', error);
    alert('Failed to save changes. Please try again.');
  }
};


  // Helper function to find level data by level name
  const getLevelValue = (levelName) => {
    if (!bonusData.levelStructure || bonusData.levelStructure.length === 0) return 0;
    
    const level = bonusData.levelStructure.find(l => l.level === levelName);
    return level ? level.binary_bonus : 0;
  };

  if (loading) {
    return <div className="loading">Loading bonus structure data...</div>;
  }

  return (
    <div className="bonus-container">
      <div className="bonus-header">
        <h1>Bonus Structure Management</h1>
        <div className="bonus-buttons">
          <button className="reset" onClick={handleReset}>🔄 Reset</button>
          <button className="save" onClick={handleSaveChanges}>💾 Save</button>
        </div>
      </div>

      <div className='bonus-top-card'>
        <div className="bonus-card">
          <h3>Direct Bonus</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={bonusData.direct_bonus_percent}
              onChange={(e) => handleInputChange('direct_bonus_percent', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>

        <div className="bonus-card">
          <h3>Monthly Bonus</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={bonusData.monthly_bonus_percent}
              onChange={(e) => handleInputChange('monthly_bonus_percent', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>
        
        <div className="bonus-card">
          <h3>Jewallery fund</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={bonusData.jewellery_fund_percent}
              onChange={(e) => handleInputChange('jewellery_fund_percent', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>

        <div className="bonus-card">
          <h3>Travel Fund</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={bonusData.travel_fund_percentage}
              onChange={(e) => handleInputChange('travel_fund_percentage', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>

        <div className="bonus-card">
          <h3>Car Fund</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={bonusData.car_fund_percentage}
              onChange={(e) => handleInputChange('car_fund_percentage', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>

        <div className="bonus-card">
          <h3>House Fund</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={bonusData.house_fund_percentage}
              onChange={(e) => handleInputChange('house_fund_percentage', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>
      </div>

      <h1 className='level-heading'>Level-wise Bonus Structure</h1>
      
      <div className='bonus-level-card'>
        <div className="bonus-card">
          <h3>IGINATOR</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={getLevelValue('IGINATOR')}
              onChange={(e) => handleLevelChange('IGINATOR', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>

        <div className="bonus-card">
          <h3>SPARK</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={getLevelValue('SPARK')}
              onChange={(e) => handleLevelChange('SPARK', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>

        <div className="bonus-card">
          <h3>RISER</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={getLevelValue('RISER')}
              onChange={(e) => handleLevelChange('RISER', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>

        <div className="bonus-card">
          <h3>PIONEER</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={getLevelValue('PIONEER')}
              onChange={(e) => handleLevelChange('PIONEER', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>
      </div>
      
      <div className='bonus-level-card'>
        <div className="bonus-card">
          <h3>INNOVATOR</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={getLevelValue('INNOVATOR')}
              onChange={(e) => handleLevelChange('INNOVATOR', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>
        
        <div className="bonus-card">
          <h3>CATALYST</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={getLevelValue('CATALYST')}
              onChange={(e) => handleLevelChange('CATALYST', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>
        
        <div className="bonus-card">
          <h3>TRAILBLAZER</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={getLevelValue('TRAILBLAZER')}
              onChange={(e) => handleLevelChange('TRAILBLAZER', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>
        
        <div className="bonus-card">
          <h3>VANGUARD</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={getLevelValue('VANGUARD')}
              onChange={(e) => handleLevelChange('VANGUARD', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>
      </div>
      
      <div className='bonus-level-card'>
        <div className="bonus-card">
          <h3>LUMINARY</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={getLevelValue('LUMINARY')}
              onChange={(e) => handleLevelChange('LUMINARY', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>
        
        <div className="bonus-card">
          <h3>MOGUL</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={getLevelValue('MOGUL')}
              onChange={(e) => handleLevelChange('MOGUL', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>
        
        <div className="bonus-card">
          <h3>SOVEREIGN</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={getLevelValue('SOVEREIGN')}
              onChange={(e) => handleLevelChange('SOVEREIGN', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>
        
        <div className="bonus-card">
          <h3>ZENITH</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={getLevelValue('ZENITH')}
              onChange={(e) => handleLevelChange('ZENITH', e.target.value)}
            />
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusStructureManagement;