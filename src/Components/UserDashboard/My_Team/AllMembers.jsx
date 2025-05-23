import React from "react";
import styles from "./AllMembers.module.css";
import { FaUser, FaEye } from "react-icons/fa";
import teamData from "../JsonData/team.json";

const AllMembers = () => {
  return (
    <div className={styles.allMembers}>
      <h3 className={styles.heading}>All Members</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            {/* <th>👤 Profile</th> */}
            <th>🆔 Name & User ID</th>
            <th>Level</th>
            <th>🕒 Join Date</th>
            <th>Referrals</th>
            <th>Earnings ($)</th>
            <th>Status</th>
            {/* <th>🔍 Action</th> */}
          </tr>
        </thead>
        <tbody>
          {teamData.map((member, index) => (
            <tr key={index}>
              {/* <td><FaUser /></td> */}
              <td>{member.name} <br />
              {/* <small>ID: {member.userId}</small> */}
              </td>
              <td>{member.level}</td>
              <td>{member.joinDate}</td>
              <td>{member.referrals}</td>
              <td>${member.earnings}</td>
              <td>
                <span
                  className={
                    member.status === "Active"
                      ? styles.active
                      : styles.inactive
                  }
                >
                  {member.status}
                </span>
              </td>
              {/* <td><FaEye title="View" /></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllMembers;
