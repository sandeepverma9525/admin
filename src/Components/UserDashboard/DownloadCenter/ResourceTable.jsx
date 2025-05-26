import { AiOutlineDownload } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';

export default function ResourceTable({ resources, onDownload, onEdit, onDelete }) {
  return (
    <div className="download-overflow-x-auto">
      <table className="download-resource-table">
        <thead>
          <tr className="download-table-header">
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Type</th>
            <th>Size</th>
            <th>Access Level</th>
            <th>Downloads</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource) => (
            <tr key={resource.id} className="download-table-row">
              <td>{resource.id}</td>
              <td className="download-resource-title">{resource.title}</td>
              <td>{resource.category}</td>
              <td>{resource.type}</td>
              <td>{resource.size}</td>
              <td>{resource.accessLevel}</td>
              <td>{resource.downloads}</td>
              <td className="download-text-right">
                <button
                  className="download-action-btn download"
                  onClick={() => onDownload(resource)}
                >
                  <AiOutlineDownload />
                </button>
                <button
                  className="download-action-btn edit"
                  onClick={() => onEdit(resource)}
                >
                  <BsPencilSquare />
                </button>
                <button
                  className="download-action-btn delete"
                  onClick={() => onDelete(resource)}
                >
                  <RiDeleteBin5Line className="download-delete-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
