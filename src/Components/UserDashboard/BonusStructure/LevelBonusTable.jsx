// import React from 'react';

// const LevelBonusTable = ({ levels, updateLevelField }) => {
//   return (
//     <div className="level-table">
//       <h2>Level-wise Bonus Structure</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Level</th>
//             <th>Direct Bonus (%)</th>
//             <th>Team Bonus (%)</th>
//             {/* <th>Monthly Target ($)</th> */}
//             <th>Monthly Bonus (%)</th>
//             <th>Binary Bonus (%)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {levels.map((lvl, idx) => (
//             <tr key={lvl.level}>
//               <td>{lvl.level}</td>
//               <td><input type="number" value={lvl.directBonus} onChange={(e) => updateLevelField(idx, 'directBonus', e.target.value)} /></td>
//               <td><input
//                type="number" value={lvl.teamBonus} onChange={(e) => updateLevelField(idx, 'teamBonus', e.target.value)} /></td>
//               {/* <td><input type="number" value={lvl.monthlyTarget} onChange={(e) => updateLevelField(idx, 'monthlyTarget', e.target.value)} /></td> */}
//               <td><input type="number" value={lvl.monthlyBonus} onChange={(e) => updateLevelField(idx, 'monthlyBonus', e.target.value)} /></td>
//               <td><input type="number" value={lvl.binaryBonus} onChange={(e) => updateLevelField(idx, 'binaryBonus', e.target.value)} /></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LevelBonusTable;


import React from 'react';

const LevelBonusTable = ({ levels, updateLevelField }) => {
  if (!levels || levels.length === 0) {
    return <div className="no-levels">No level data available</div>;
  }

  return (
    <div className="level-table">
      <h2>Level-wise Bonus Structure</h2>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            
            <th>Binary Bonus (%)</th>
          </tr>
        </thead>
        <tbody>
          {levels.map((lvl, idx) => (
            <tr key={lvl.level || idx}>
              <td>{lvl.level}</td>
              
              <td>
                <input 
                  type="number" 
                  value={lvl.binaryBonus} 
                  onChange={(e) => updateLevelField(idx, 'binaryBonus', e.target.value)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LevelBonusTable;