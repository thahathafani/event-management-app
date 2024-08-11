import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminLayout from '../../../components/AdminLayout';
import axios from '../../../lib/axios';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (eventId: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`/events/${eventId}`);
        setEvents(events.filter((event) => event._id !== eventId));
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };
  

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Events</h1>
        <Link href="/admin/events/create">
          <a className="bg-blue-500 text-white py-2 px-4 rounded">Create Event</a>
        </Link>
      </div>
      <div className="bg-white shadow rounded">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td className="py-2 px-4 border-b">{event.title}</td>
                <td className="py-2 px-4 border-b">{new Date(event.date).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{event.location}</td>
                <td className="py-2 px-4 border-b">
                  <Link href={`/admin/events/edit/${event._id}`}>
                    <a className="text-blue-500 hover:underline">Edit</a>
                  </Link>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="text-red-500 hover:underline ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AdminEvents;
