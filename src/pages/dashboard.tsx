import AuthGuard from '../components/AuthGuard';

const Dashboard = () => {
  return (
    <AuthGuard>
      <div className="p-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        {/* Dashboard content goes here */}
      </div>
    </AuthGuard>
  );
};

export default Dashboard;
