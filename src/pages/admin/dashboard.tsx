import AdminLayout from '../../components/AdminLayout';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Total Events</h2>
          {/* Display total events count here */}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Total Users</h2>
          {/* Display total users count here */}
        </div>
        {/* Add more dashboard cards as needed */}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
