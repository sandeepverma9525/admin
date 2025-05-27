
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TeamMembersTable = ({ getInitialColor }) => {
//   const [teamMembers, setTeamMembers] = useState([]);

//   const getInitials = (name) => {
//     return name
//       ?.split(' ')
//       .map((word) => word[0]?.toUpperCase())
//       .join('')
//       .slice(0, 2);
//   };

//   const flattenReferrals = (referrals, level = 1) => {
//     let flatList = [];

//     referrals.forEach((member) => {
//       flatList.push({
//         id: member._id,
//         name: member.name || 'N/A',
//         email: member.email || 'N/A',
//         initials: getInitials(member.name),
//         level: level,
//         joinedDate: new Date(member.dob).toLocaleDateString(),
//         referrals: member.referrals?.length || 0,
//         earnings: member.total_bonus || 0,
//         status: member.user_status?.trim() || 'Inactive',
//       });

//       if (member.referrals?.length > 0) {
//         flatList = flatList.concat(flattenReferrals(member.referrals, level + 1));
//       }
//     });

//     return flatList;
//   };

//   useEffect(() => {
//   const fetchData = async () => {
//     const token = localStorage.getItem('token');
//     const userId = localStorage.getItem('userId');

//     try {
//       const res = await axios.get(
//         `https://pronet.ap-1.evennode.com/api/user/getUser/${userId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (res.data?.data?.data?.referrals) {
//         const flattened = flattenReferrals(res.data.data.data.referrals);
//         const sortedByLevel = flattened.sort((a, b) => a.level - b.level); // 👈 Sorted by level
//         setTeamMembers(sortedByLevel);
//       }
//     } catch (error) {
//       console.error('Error fetching referrals:', error);
//     }
//   };

//   fetchData();
// }, []);




//   return (
//     <div className="members-section">
//       <div className="section-header">
//         <svg
//           className="section-icon"
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
//           />
//         </svg>
//         <h2 className="section-title">Team Members</h2>
//       </div>
//       <p className="section-description">Manage all your team members and their details</p>

//       <div className="table-header">
//         <div>Affiliate</div>
//         <div>Level</div>
//         <div>Joined Date</div>
//         <div>Referrals</div>
//         <div>Earnings</div>
//         <div>Status</div>
//         {/* <div>Actions</div> */}
//       </div>

//       {teamMembers.map((member) => (
//         <div className="table-row" key={member.id}>
//           <div className="affiliate-cell">
//             {/* <div className="avatar" style={{ backgroundColor: getInitialColor(member.initials) }}>
//               {member.initials}
//             </div> */}
//             <div className="affiliate-info">
//               <div className="affiliate-name">{member.name}</div>
//               <div className="affiliate-email">{member.email}</div>
//             </div>
//           </div>
//           <div className="cell">Level {member.level}</div>
//           <div className="cell">{member.joinedDate}</div>
//           <div className="cell">{member.referrals}</div>
//           <div className="cell">${member.earnings.toFixed(2)}</div>
//           <div className="cell">
//             <span className={`status-badge ${member.status === 'Active' ? 'active' : 'inactive'}`}>
//               {member.status}
//             </span>
//           </div>
//           {/* <div className="cell">
//             <button className="action-button">View</button>
//           </div> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TeamMembersTable;






import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamMembersTable = ({ getInitialColor }) => {
  const [teamMembers, setTeamMembers] = useState([]);

  const getInitials = (name) => {
    return name
      ?.split(' ')
      .map((word) => word[0]?.toUpperCase())
      .join('')
      .slice(0, 2);
  };

  const buildHierarchy = (users) => {
    const userMap = {};
    users.forEach(user => {
      userMap[user._id] = {
        ...user,
        referrals: [],
        initials: getInitials(user.name),
        level: 1,
        joinedDate: new Date(user.dob).toLocaleDateString(),
        referralsCount: 0,
        earnings: user.total_bonus || 0,
        status: user.user_status?.trim() || 'Inactive'
      };
    });

    const roots = [];

    users.forEach(user => {
      const refBy = user.referred_by_user_id?._id;
      if (refBy && userMap[refBy]) {
        userMap[refBy].referrals.push(userMap[user._id]);
        userMap[user._id].level = userMap[refBy].level + 1;
      } else {
        roots.push(userMap[user._id]);
      }
    });

    const flatten = (node) => {
      let result = [{
        id: node._id,
        name: node.name,
        email: node.email,
        initials: node.initials,
        level: node.level,
        joinedDate: node.joinedDate,
        referrals: node.referrals.length,
        earnings: node.earnings,
        status: node.status,
        user_referral_code: node.user_referral_code
      }];
      node.referrals.forEach(child => {
        result = result.concat(flatten(child));
      });
      return result;
    };

    let flatList = [];
    roots.forEach(root => {
      flatList = flatList.concat(flatten(root));
    });

    return flatList;
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      try {
        const res = await axios.get(
          `https://pronet.ap-1.evennode.com/api/user/getAllUser`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        if (res.data?.data?.length) {
          const flattened = buildHierarchy(res.data.data);
          setTeamMembers(flattened.sort((a, b) => a.level - b.level));
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="members-section">
      <div className="section-header">
        <h2 className="section-title">Team Members</h2>
      </div>
      <p className="section-description">Manage all your team members and their details</p>

      <div className="table-header">
        <div>Affiliate</div>
        {/* <div>Level</div> */}
        <div>Referral_code</div>
        <div>Joined Date</div>
        <div>Referrals</div>
        <div>Earnings</div>
        <div>Status</div>
      </div>

      {teamMembers.map((member) => (
        <div className="table-row" key={member.id}>
          <div className="affiliate-cell">
            <div className="affiliate-info">
              <div className="affiliate-name">{member.name}</div>
              <div className="affiliate-email">{member.email}</div>
            </div>
          </div>
          <div className="cell">{member.user_referral_code}</div>
          {/* <div className="cell">Level {member.level}</div> */}
          <div className="cell">{member.joinedDate}</div>
          <div className="cell">{member.referrals}</div>
          <div className="cell">${member.earnings.toFixed(2)}</div>
          <div className="cell">
            <span className={`status-badge ${member.status === 'Active' ? 'active' : 'inactive'}`}>
              {member.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembersTable;
