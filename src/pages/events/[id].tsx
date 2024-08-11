import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import axios from '../../lib/axios';

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  if (!event) return <p>Loading...</p>;

  const handleRegistration = async () => {
    try {
      await axios.post(`/events/${id}/register`);
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering for event:', error);
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-700 mb-4">{new Date(event.date).toLocaleDateString()}</p>
      <p className="text-gray-700 mb-4">{event.description}</p>
      <p className="text-gray-700 mb-4">Location: {event.location}</p>
      <button
        onClick={handleRegistration}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Register for Event
      </button>
    </Layout>
  );
};

export default EventDetails;
