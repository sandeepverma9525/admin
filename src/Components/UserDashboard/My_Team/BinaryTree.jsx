
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const BinaryTree = () => {
//   const [rootNode, setRootNode] = useState(null);
//   const [allUsers, setAllUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const userId = localStorage.getItem("userId");
//       const token = localStorage.getItem("token");

//       if (!userId || !token) {
//         console.error("❌ userId or token not found in localStorage");
//         return;
//       }

//       try {
//         // 🌳 Binary Tree API
//         const treeRes = await axios.get(
//           `https://pronet.ap-1.evennode.com/api/user/getBinaryByUser/${userId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setRootNode(treeRes.data);
//         // console.log("🌳 Tree Data:", treeRes.data);

//         // 👥 All Users API
//         const usersRes = await axios.get(
//           `https://pronet.ap-1.evennode.com/api/user/getAllUser`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setAllUsers(usersRes.data.data); // 📌 access `data` inside the response
//         // console.log("👥 All Users:", usersRes.data.data.data);
//       } catch (err) {
//         console.error("❌ Error fetching data:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   const getUserDetails = (id) => {
//     return allUsers.find((user) => user._id === id);
//   };

//   const renderNode = (node, position = "root") => {
//     if (!node) return null;

//     const user = getUserDetails(node.user);

//     return (
//       <div className="node-container" style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
//         <div className="tree-node">
//           <strong>{position.toUpperCase()}</strong>
//           <br />
//           <strong>ID:</strong> {node.user}
//           <br />
//           <strong>Name:</strong> {user?.name || "N/A"}
//           <br />
//           <strong>Email:</strong> {user?.email || "N/A"}
//         </div>

//         <div className="node-children" style={{ display: "flex", justifyContent: "space-between" }}>
//           {node.left && (
//             <div className="child-node" style={{ flex: 1 }}>
//               {renderNode(node.left, "left")}
//             </div>
//           )}
//           {node.right && (
//             <div className="child-node" style={{ flex: 1 }}>
//               {renderNode(node.right, "right")}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h2>🔗 Binary Tree View</h2>
//       {rootNode && allUsers.length > 0 ? (
//         renderNode(rootNode)
//       ) : (
//         <p>Loading tree and user data...</p>
//       )}
//     </div>
//   );
// };

// export default BinaryTree;









import React, { useEffect, useState } from "react";
import axios from "axios";

const BinaryTree = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [rootNode, setRootNode] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      if (!token) {
        console.error("Token missing");
        return;
      }
      try {
        const res = await axios.get(
          "https://pronet.ap-1.evennode.com/api/user/getAllUser",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAllUsers(res.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [token]);

  useEffect(() => {
    const fetchTree = async () => {
      if (!selectedUserId || !token) return;
      try {
        const res = await axios.get(
          `https://pronet.ap-1.evennode.com/api/user/getBinaryByUser/${selectedUserId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRootNode(res.data);
      } catch (error) {
        console.error("Error fetching tree:", error);
      }
    };
    fetchTree();
  }, [selectedUserId, token]);

  const handleSearch = () => {
    const user = allUsers.find(
      (u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (user) {
      setSelectedUserId(user._id);
    } else {
      alert("User not found");
      setRootNode(null);
    }
  };

  const getUserDetails = (id) => {
    return allUsers.find((user) => user._id === id);
  };

  const renderNode = (node, position = "root") => {
    if (!node) return null;
    const user = getUserDetails(node.user);
    return (
      <div className="node-container" style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
        <div className="tree-node">
          <strong>{position.toUpperCase()}</strong>
          <br />
          <strong>ID:</strong> {node.user}
          <br />
          <strong>Name:</strong> {user?.name || "N/A"}
          <br />
          <strong>Email:</strong> {user?.email || "N/A"}
        </div>
        <div className="node-children" style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="child-node" style={{ flex: 1 }}>{renderNode(node.left, "left")}</div>
          <div className="child-node" style={{ flex: 1 }}>{renderNode(node.right, "right")}</div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 Search User & View Binary Tree</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "8px", width: "300px", marginRight: "10px" }}
        />
        <button onClick={handleSearch} style={{ padding: "8px 16px" }}>
          Search
        </button>
      </div>

      {rootNode && allUsers.length > 0 ? (
        renderNode(rootNode)
      ) : (
        <p>🔄 Waiting for search...</p>
      )}
    </div>
  );
};

export default BinaryTree;
