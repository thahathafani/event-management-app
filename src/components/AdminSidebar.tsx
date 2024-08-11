import Link from 'next/link';

const AdminSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white">
      <nav className="flex flex-col p-4 space-y-4">
        <Link href="/admin/dashboard">
          <a className="text-lg font-bold">Dashboard</a>
        </Link>
        <Link href="/admin/events">
          <a>Manage Events</a>
        </Link>
        <Link href="/admin/users">
          <a>Manage Users</a>
        </Link>
        <Link href="/admin/content">
          <a>Content Management</a>
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
