
import React, { useEffect, useState } from "react";
import styles from "./DirectAffiliates.module.css";
import axios from "axios";

const DirectAffiliates = () => {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    const fetchReferrals = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("adminId");

      if (!token || !userId) return;

      try {
        const response = await axios.get(
          `https://pronet.ap-1.evennode.com/api/user/getUser/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data.data)

        if (response.data?.data?.data?.referrals) {
          setReferrals(response.data.data.data.referrals);
        }
      } catch (error) {
        console.error("Error fetching referrals:", error);
      }
    };

    fetchReferrals();
  }, []);

  return (
    <div className={styles.directAffiliatesContainer}>
      <h3 className={styles.heading}>Direct Affiliates</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Affiliate (Email)</th>
            <th>Joining Date</th>
            <th>Team Size</th>
            <th>Earnings ($)</th>
            <th>Status</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {referrals.length === 0 ? (
            <tr>
              <td colSpan="6">No direct affiliates found.</td>
            </tr>
          ) : (
            referrals.map((item, index) => (
              <tr key={index}>
                <td>{item.email}</td>
                <td>{new Date(item.dob).toLocaleDateString()}</td>
                <td>{item.referrals?.length || 0}</td>
                <td>${item.total_bonus || 0}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      item.user_status?.toLowerCase() === "active"
                        ? styles.active
                        : styles.inactive
                    }`}
                  >
                    {item.user_status || "Inactive"}
                  </span>
                </td>
                {/* <td>
                  <button className={styles.viewBtn}>View Teams</button>
                </td> */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DirectAffiliates;
