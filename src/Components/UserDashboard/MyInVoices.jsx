// // MyIncome.jsx

// import React, { useState } from "react";
// import incomeData from "./JsonData/income.json"; // local json
// import styles from "./MyIncome.module.css";

// const filterTypes = ["All", "Direct Income", "Level Income", "Bonus", "Rewards", "Others"];

// function MyIncome() {
//   const [filter, setFilter] = useState("All");
//   const [search, setSearch] = useState("");

//   const filteredData = incomeData.filter((item) =>
//     (filter === "All" || item.type === filter) &&
//     item.description.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>My Income</h2>

//       <div className={styles.filters}>
//         {filterTypes.map((type) => (
//           <button
//             key={type}
//             className={`${styles.filterBtn} ${filter === type ? styles.active : ""}`}
//             onClick={() => setFilter(type)}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       <div className={styles.searchBar}>
//         <input
//           type="text"
//           placeholder="Search income..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Date</th>
//             <th>Amount</th>
//             <th>Status</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((income) => (
//             <tr key={income.id}>
//               <td>{income.type}</td>
//               <td>{income.date}</td>
//               <td>₹{income.amount}</td>
//               <td>
//                 <span className={income.status === "Paid" ? styles.paid : styles.pending}>
//                   {income.status}
//                 </span>
//               </td>
//               <td>{income.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default MyIncome;



import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaFilter,
  FaSort,
  FaFileInvoiceDollar,
  FaDownload,
  FaEye,
} from "react-icons/fa";
import incomeData from "./JsonData/income.json";
import styles from "./MyIncome.module.css";

const MyIncome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [data, setData] = useState([]);

  useEffect(() => {
    let filtered = incomeData.filter((item) =>
      item.invoice.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filterType !== "All") {
      filtered = filtered.filter((item) => item.type === filterType);
    }

    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setData(filtered);
  }, [searchTerm, filterType, sortBy]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Income</h2>

      <div className={styles.topBar}>
        <div className={styles.searchFilterWrapper}>
          {/* <div className={styles.searchInput}>
            <FaSearch style={{ marginRight: "8px" }} />
            <input
              type="text"
              placeholder="Search by invoice..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div> */}

          <button
            className={styles.filterBtn}
            onClick={() => setFilterType("All")}
          >
            <FaFilter /> All
          </button>
          <button
            className={styles.filterBtn}
            onClick={() => setFilterType("Direct Income")}
          >
            <FaFilter /> Direct Income
          </button>
          <button
            className={styles.filterBtn}
            onClick={() => setFilterType("Bonus")}
          >
            <FaFilter /> Bonus
          </button>

          <select
            className={styles.sortBtn}
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
          >
            <option value="newest">Sort by Date: Newest</option>
            <option value="oldest">Sort by Date: Oldest</option>
          </select>
        </div>
      </div>

      <h3 className={styles.heading}>Income History</h3>
      <div className={styles.tableWrapper}>
        <table className={styles.incomeTable}>
          <thead>
            <tr>
              <th>
                <FaFileInvoiceDollar /> Invoice
              </th>
              <th>Date</th>
              {/* <th>Due Date</th> */}
              <th>Amount ($)</th>
              <th>Status</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.invoice}</td>
                <td>{item.date}</td>
                {/* <td>{item.dueDate}</td> */}
                <td>${item.amount}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      styles[item.status.toLowerCase()]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.description}</td>
                <td className={styles.actionIcons}>
                  <FaDownload title="Download" />
                  {/* <FaEye title="View" /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyIncome;
