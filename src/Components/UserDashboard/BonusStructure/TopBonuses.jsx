// import React from 'react';

// const TopBonuses = ({ directBonus, setDirectBonus, teamBonus, setTeamBonus, monthlyBonus, setMonthlyBonus, lifestyleFund, setLifestyleFund }) => {
//   return (
//     <div className="top-bonuses">
//       {[
//         { label: 'Direct Bonus', value: directBonus, setter: setDirectBonus },
//         { label: 'Team Bonus', value: teamBonus, setter: setTeamBonus },
//         { label: 'Monthly Bonus', value: monthlyBonus, setter: setMonthlyBonus },
//         { label: 'Lifestyle Fund', value: lifestyleFund, setter: setLifestyleFund },
//       ].map((item, i) => (
//         <div key={i} className="bonus-card">
//           <h3>{item.label}</h3>
//           <div className="bonustop-input-group">
//             <input
//               type="number"
//               value={item.value}
//               onChange={(e) => item.setter(Number(e.target.value))}
//             />
//             <span>%</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TopBonuses;


import React from 'react';

const TopBonuses = ({ 
  directBonus, 
  setDirectBonus, 
  teamBonus, 
  setTeamBonus, 
  monthlyBonus, 
  setMonthlyBonus, 
  lifestyleFund, 
  setLifestyleFund 
}) => {
  return (
    <div className="top-bonuses">
      {[
        { label: 'Direct Bonus', value: directBonus, setter: setDirectBonus },
        // { label: 'Team Bonus', value: teamBonus, setter: setTeamBonus },
        { label: 'Monthly Bonus', value: monthlyBonus, setter: setMonthlyBonus },
        { label: ' Jewallery fund ', value: lifestyleFund, setter: setLifestyleFund },
        { label: 'Travel Fund', value: lifestyleFund, setter: setLifestyleFund },
        { label: 'Car Fund', value: lifestyleFund, setter: setLifestyleFund },
        { label: 'House Fund', value: lifestyleFund, setter: setLifestyleFund },
        
      ].map((item, i) => (
        <div key={i} className="bonus-card">
          <h3>{item.label}</h3>
          <div className="bonustop-input-group">
            <input
              type="number"
              value={item.value}
              onChange={(e) => {
                const value = Number(e.target.value);
                console.log(`Updating ${item.label} to ${value}`);
                item.setter(value);
              }}
            />
            <span>%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopBonuses;