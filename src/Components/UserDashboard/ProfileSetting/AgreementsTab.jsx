export default function AgreementsTab() {
  const agreements = [
    { id: 1, name: 'Terms of Service', date: '2025-01-15', status: 'Accepted' },
    { id: 2, name: 'Privacy Policy', date: '2025-01-15', status: 'Accepted' },
    { id: 3, name: 'Data Processing Agreement', date: '2025-02-20', status: 'Pending' }
  ];

  const downloadAgreement = (id) => {
    alert(`Downloading agreement ${id}...`);
  };

  return (
    <div>
      <div className="panel-header">
        <h2>User Agreements</h2>
        <p>Manage your agreements and contracts</p>
      </div>
      
      <div style={{ overflowX: 'auto' }}>
        <table className="agreements-table">
          <thead>
            <tr>
              <th>Agreement</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {agreements.map((agreement) => (
              <tr key={agreement.id}>
                <td>{agreement.name}</td>
                <td>{agreement.date}</td>
                <td>
                  <span className={`status-badge status-${agreement.status.toLowerCase()}`}>
                    {agreement.status}
                  </span>
                </td>
                <td>
                  <button 
                    onClick={() => downloadAgreement(agreement.id)}
                    className="table-action-button"
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}