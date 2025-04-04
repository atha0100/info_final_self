'use client';

import { useState, useEffect } from 'react';
import HomeButton from '../components/HomeButton';

interface MaintenanceRequest {
  title: string;
  description: string;
  category: string;
  priority: string;
  building: string;
  unit: string;
  contact: string;
  id: number;
}

const categories = ['Plumbing', 'Electrical', 'Structural', 'Common Areas', 'Other'];
const priorities = ['Low', 'Medium', 'High', 'Urgent'];

export default function MaintenancePage() {
  const [formData, setFormData] = useState<MaintenanceRequest>({
    title: '',
    description: '',
    category: categories[0],
    priority: priorities[0],
    building: '',
    unit: '',
    contact: '',
    id: 0
  });
  const [requests, setRequests] = useState<MaintenanceRequest[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Clear user requests on component mount and refresh
  useEffect(() => {
    // Clear any existing user requests
    localStorage.removeItem('userRequests');
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/maintenance');
      if (!response.ok) {
        throw new Error('Failed to fetch maintenance requests');
      }
      const mockData = await response.json();
      
      // Get user requests from localStorage
      const userRequestsJson = localStorage.getItem('userRequests');
      const userRequests = userRequestsJson ? JSON.parse(userRequestsJson) : [];
      
      // Combine mock and user requests
      const allRequests = [...mockData, ...userRequests];
      setRequests(allRequests);
    } catch {
      setErrorMessage('Failed to load maintenance requests');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/maintenance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit request');
      }

      const data = await response.json();
      
      // Store the new request in localStorage
      const userRequestsJson = localStorage.getItem('userRequests');
      const userRequests = userRequestsJson ? JSON.parse(userRequestsJson) : [];
      
      // Replace existing user requests with the new one
      localStorage.setItem('userRequests', JSON.stringify([data.data]));
      
      setSuccessMessage('Request submitted successfully!');
      setFormData({
        title: '',
        description: '',
        category: categories[0],
        priority: priorities[0],
        building: '',
        unit: '',
        contact: '',
        id: 0
      });
      setShowForm(false);
      
      fetchRequests();
    } catch {
      setErrorMessage('An error occurred while submitting the request. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Calculate statistics
  const totalRequests = requests.length;
  const activeRequests = requests.filter(r => r.priority !== 'Completed').length;
  const budgetSpent = 45000; // Static number

  // Group requests by category
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = requests.filter(r => r.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <main className="min-h-screen bg-gray-50">
      <HomeButton />
      
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Maintenance Requests</h1>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Total Requests</h3>
                  <p className="mt-1 text-2xl font-bold text-blue-600">{totalRequests}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Active Requests</h3>
                  <p className="mt-1 text-2xl font-bold text-yellow-600">{activeRequests}</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Budget Spent</h3>
                  <p className="mt-1 text-2xl font-bold text-green-600">${budgetSpent.toLocaleString()}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Category Boxes */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Category Distribution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div key={category} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
                      <p className="mt-1 text-xl font-bold text-gray-600">{categoryCounts[category]}</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Request Button */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              {showForm ? 'Close Form' : 'New Request'}
            </button>
          </div>

          {/* New Request Form */}
          {showForm && (
            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Request</h2>
              
              {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                  {errorMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description of the issue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Detailed description of the maintenance issue"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      {priorities.map((priority) => (
                        <option key={priority} value={priority}>
                          {priority}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Building
                    </label>
                    <input
                      type="text"
                      name="building"
                      value={formData.building}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                      placeholder="Building A, Building B, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Unit
                    </label>
                    <input
                      type="text"
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                      placeholder="Unit number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Information
                  </label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Phone number or email"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          )}

          {/* Requests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requests.map((request, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {request.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {request.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      Category: {request.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${{
                      Low: 'bg-green-100 text-green-800',
                      Medium: 'bg-yellow-100 text-yellow-800',
                      High: 'bg-orange-100 text-orange-800',
                      Urgent: 'bg-red-100 text-red-800'
                    }[request.priority]}`}>
                      {request.priority}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Building: {request.building}, Unit: {request.unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
