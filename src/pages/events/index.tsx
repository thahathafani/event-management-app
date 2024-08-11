import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import axios from '../../lib/axios';

const EventList = () => {
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

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event._id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
            <p className="text-gray-700 mb-4">{new Date(event.date).toLocaleDateString()}</p>
            <Link href={`/events/${event._id}`}>
              <a className="text-blue-500 hover:underline">View Details</a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default EventList;
