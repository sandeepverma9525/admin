
import React, { useEffect, useState } from "react";
import axios from "axios";
import './LevelStructure.css'

const LevelStructure = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [levels, setLevels] = useState([]);

  const token = localStorage.getItem("token");

  // Fetch all users for search
  const fetchAllUsers = async () => {
    try {
      const res = await axios.get(
        "https://pronet.ap-1.evennode.com/api/user/getAllUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAllUsers(res.data.data || []);
    } catch (err) {
      console.error("Error fetching all users:", err);
    }
  };

  // Fetch selected user's level structure
  const fetchLevelStructure = async (userId) => {
    try {
      const res = await axios.get(
        `https://pronet.ap-1.evennode.com/api/user/getUser/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const referrals = res.data?.data?.data?.referrals || [];

      const calculateLevels = (referrals, level = 1, result = []) => {
        if (!referrals.length) return result;

        let active = 0;
        let inactive = 0;

        referrals.forEach((ref) => {
          if (ref.user_status === "active") {
            active++;
          } else {
            inactive++;
          }
        });

        result.push({
          level,
          active,
          inactive,
          volume: (active + inactive) * 0,
        });

        referrals.forEach((ref) => {
          if (ref.referrals?.length) {
            calculateLevels(ref.referrals, level + 1, result);
          }
        });

        return result;
      };

      const structured = calculateLevels(referrals);
      setLevels(structured);
    } catch (error) {
      console.error("Error fetching level structure:", error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = allUsers.filter((user) =>
        `${user.name} ${user.email}`.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers([]);
    }
  }, [searchTerm, allUsers]);

  useEffect(() => {
    if (selectedUserId) {
      fetchLevelStructure(selectedUserId);
    }
  }, [selectedUserId]);

  return (
    <div className="level-structure-container">
      <h2>🪢 Level Structure</h2>
      <p>Select a user to view their team breakdown by levels</p>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Dropdown Results */}
      {filteredUsers.length > 0 && (
        <ul className="user-dropdown">
          {filteredUsers.slice(0, 8).map((user) => (
            <li
              key={user._id}
              onClick={() => {
                setSelectedUserId(user._id);
                setSearchTerm(`${user.name} (${user.email})`);
                setFilteredUsers([]);
              }}
            >
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}

      {/* Levels UI */}
      {levels.length > 0 && (
        <div className="level-grid">
          {levels.map((item) => {
            const total = item.active + item.inactive;
            const completion = total ? Math.round((item.active / total) * 100) : 0;

            return (
              <div className="level-card" key={item.level}>
                <div className="level-header">
                  <strong>Level {item.level}</strong>
                  <span>{total} Members</span>
                </div>
                <p>Active Members: {item.active}</p>
                <p>Inactive Members: {item.inactive}</p>
                <p>Level Volume: <strong>${item.volume}</strong></p>
                <p>Completion: <strong>{completion}%</strong></p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${completion}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LevelStructure;
