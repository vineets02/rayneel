// src/pages/Contact.jsx
import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone:'',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      await axios.post('https://vineetphotography.in/api/contact/order', form);
      setResponseMessage('Message sent successfully!');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error); // Logs the error to console
      setResponseMessage('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      {responseMessage && (
        <p className={`mb-4 ${responseMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {responseMessage}
        </p>
      )}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
        <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter Phone"
                  required
                />
                </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
