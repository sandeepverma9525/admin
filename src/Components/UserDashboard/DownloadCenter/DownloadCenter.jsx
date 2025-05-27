
import { useState } from "react";
import './DownloadCenter.css'
import StatsGrid from './StatsGrid.jsx';
import FilterControls from './FilterControls.jsx';
import ResourceTable from './ResourceTable.jsx';
import AddResourceModal from './AddResourceModal';
import EditResourceModal from './EditResourceModal.jsx';
import DeleteResourceModal from './DeleteResourceModal.jsx';

const initialResources = [
  {
    id: "DOC001",
    title: "Affiliate Marketing Guide",
    category: "Marketing",
    type: "PDF",
    size: "2.4 MB",
    accessLevel: "All Affiliates",
    downloads: 145,
    file: null
  },
  {
    id: "DOC002",
    title: "Commission Structure Document",
    category: "Finance",
    type: "PDF",
    size: "1.2 MB",
    accessLevel: "Platinum Only",
    downloads: 203,
    file: null
  }
];

const categories = ["ppt", "Flyers", "Agreement", "Video", 'PDF'];
const accessLevels = ["All Affiliates", "Platinum Only", "Gold & Above", "Premium Members", "Silver & Above"];

export default function DownloadCenter() {
  const [resources, setResources] = useState(initialResources);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "Marketing",
    type: "",
    size: "",
    accessLevel: "All Affiliates",
    downloads: 0,
    description: "",
    file: null
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  const totalDownloads = resources.reduce((sum, resource) => sum + resource.downloads, 0);
  const totalCategories = [...new Set(resources.map(r => r.category))].length;

  // Filter resources based on search and category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All Categories" || resource.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const openAddModal = () => {
    setFormData({
      id: `DOC${String(resources.length + 1).padStart(3, '0')}`,
      title: "",
      category: "Marketing",
      type: "",
      size: "",
      accessLevel: "All Affiliates",
      downloads: 0,
      description: "",
      file: null
    });
    setShowAddModal(true);
  };

  const openEditModal = (resource) => {
    setSelectedResource(resource);
    setFormData({
      ...resource,
      description: resource.description || ""
    });
    setShowEditModal(true);
  };

  const openDeleteModal = (resource) => {
    setSelectedResource(resource);
    setShowDeleteModal(true);
  };

  const handleAddResource = (newResource) => {
    setResources([...resources, newResource]);
    setShowAddModal(false);
  };

  const handleEditResource = (updatedResource) => {
    const updatedResources = resources.map(resource =>
      resource.id === selectedResource.id ? updatedResource : resource
    );
    setResources(updatedResources);
    setShowEditModal(false);
  };

  const handleDeleteResource = () => {
    const updatedResources = resources.filter(resource =>
      resource.id !== selectedResource.id
    );
    setResources(updatedResources);
    setShowDeleteModal(false);
  };

  const handleDownload = (resource) => {
    const updatedResources = resources.map(r =>
      r.id === resource.id ? { ...r, downloads: r.downloads + 1 } : r
    );
    setResources(updatedResources);
    alert(`Downloading ${resource.title}`);
  };

  return (
    <div className="download-center-container">
      <div className="download-center-header">
        <h1 className="download-center-title">Download Center Management</h1>
        <button className="download-center-button" onClick={openAddModal}>
          Add New Resource
        </button>
      </div>

      <StatsGrid 
        totalResources={resources.length}
        totalDownloads={totalDownloads}
        totalCategories={totalCategories}
      />

      <div className="download-filter-container">
        <h2 className="download-filter-title">Download Resources</h2>

        <FilterControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          categories={categories}
        />

        <ResourceTable
          resources={filteredResources}
          onDownload={handleDownload}
          onEdit={openEditModal}
          onDelete={openDeleteModal}
        />
      </div>

      {showAddModal && (
        <AddResourceModal
          formData={formData}
          setFormData={setFormData}
          categories={categories}
          accessLevels={accessLevels}
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddResource}
        />
      )}

      {showEditModal && (
        <EditResourceModal
          formData={formData}
          setFormData={setFormData}
          categories={categories}
          accessLevels={accessLevels}
          onClose={() => setShowEditModal(false)}
          onUpdate={handleEditResource}
        />
      )}

      {showDeleteModal && (
        <DeleteResourceModal
          resource={selectedResource}
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDeleteResource}
        />
      )}
    </div>
  );
}
