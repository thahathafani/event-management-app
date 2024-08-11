import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="text-white text-lg font-bold">Event Manager</a>
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link href="/dashboard">
                <a className="text-white">Dashboard</a>
              </Link>
              <button
                onClick={handleLogout}
                className="text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <a className="text-white">Login</a>
              </Link>
              <Link href="/register">
                <a className="text-white">Register</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
