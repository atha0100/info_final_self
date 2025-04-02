'use client';

import Link from "next/link";

interface MaintenanceRequest {
  id: number;
  title: string;
  description: string;
  status: "New" | "In Progress" | "Completed" | "On Hold";
  priority: "Low" | "Medium" | "High";
  category: string;
  submittedBy: string;
  submittedDate: string;
  estimatedCost: number;
  assignedTo?: string;
  progress?: number;
}

interface MaintenanceStats {
  totalRequests: number;
  completedRequests: number;
  pendingRequests: number;
  averageResponseTime: string;
  budgetSpent: number;
  budgetRemaining: number;
}

const maintenanceStats: MaintenanceStats = {
  totalRequests: 15,
  completedRequests: 9,
  pendingRequests: 6,
  averageResponseTime: "2.5 hours",
  budgetSpent: 12500,
  budgetRemaining: 27500,
};

const maintenanceRequests: MaintenanceRequest[] = [
  {
    id: 1,
    title: "Leaking Roof in Building A",
    description: "Water leakage in the common area of Building A, affecting multiple units",
    status: "In Progress",
    priority: "High",
    category: "Structural",
    submittedBy: "John Smith",
    submittedDate: "2025-04-01",
    estimatedCost: 5000,
    assignedTo: "Maintenance Team 1",
    progress: 60
  },
  {
    id: 2,
    title: "Elevator Maintenance",
    description: "Quarterly maintenance check for all elevators in the property",
    status: "New",
    priority: "Medium",
    category: "Equipment",
    submittedBy: "Property Manager",
    submittedDate: "2025-04-02",
    estimatedCost: 3500
  },
  {
    id: 3,
    title: "Garden Maintenance",
    description: "Monthly garden maintenance and landscaping services",
    status: "Completed",
    priority: "Low",
    category: "Grounds",
    submittedBy: "Maintenance Team",
    submittedDate: "2025-04-01",
    estimatedCost: 1500,
    assignedTo: "Grounds Team"
  },
  {
    id: 4,
    title: "Parking Lot Repairs",
    description: "Pothole repairs and resurfacing in the main parking lot",
    status: "On Hold",
    priority: "Medium",
    category: "Infrastructure",
    submittedBy: "Property Manager",
    submittedDate: "2025-04-01",
    estimatedCost: 8000
  },
];

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Maintenance Requests</h1>
            <Link
              href="/maintenance/create"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Create Request
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Requests */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Requests</h3>
              <p className="text-3xl font-bold text-blue-600">{maintenanceStats.totalRequests}</p>
              <p className="text-sm text-gray-600 mt-2">This month</p>
            </div>

            {/* Completed Requests */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Completed Requests</h3>
              <p className="text-3xl font-bold text-green-600">{maintenanceStats.completedRequests}</p>
              <p className="text-sm text-gray-600 mt-2">This month</p>
            </div>

            {/* Budget */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Budget Spent</h3>
              <p className="text-3xl font-bold text-purple-600">${maintenanceStats.budgetSpent.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mt-2">This month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Requests */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Requests</h2>
          <div className="space-y-6">
            {maintenanceRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-xl shadow-md">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{request.title}</h3>
                    <div className="flex items-center gap-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        request.status === "New" ? "bg-blue-100 text-blue-800" :
                        request.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
                        request.status === "Completed" ? "bg-green-100 text-green-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {request.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        request.priority === "High" ? "bg-red-100 text-red-800" :
                        request.priority === "Medium" ? "bg-orange-100 text-orange-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {request.priority}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Submitted By</p>
                      <p className="font-medium">{request.submittedBy}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Submitted Date</p>
                      <p className="font-medium">{new Date(request.submittedDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Category</p>
                      <p className="font-medium">{request.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Estimated Cost</p>
                      <p className="font-medium">${request.estimatedCost.toLocaleString()}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{request.description}</p>
                  {request.progress && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{request.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${request.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-end">
                    <Link
                      href={`/maintenance/${request.id}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Categories */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Maintenance Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Structural</h3>
              <p className="text-sm text-gray-600">Building integrity, roof, walls, etc.</p>
              <div className="mt-4">
                <p className="text-sm text-gray-600">Requests: 5</p>
                <p className="text-sm text-gray-600">Budget: $15,000</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Equipment</h3>
              <p className="text-sm text-gray-600">Elevators, HVAC, generators, etc.</p>
              <div className="mt-4">
                <p className="text-sm text-gray-600">Requests: 3</p>
                <p className="text-sm text-gray-600">Budget: $12,000</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Grounds</h3>
              <p className="text-sm text-gray-600">Landscaping, gardens, parking lots</p>
              <div className="mt-4">
                <p className="text-sm text-gray-600">Requests: 4</p>
                <p className="text-sm text-gray-600">Budget: $8,000</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Other</h3>
              <p className="text-sm text-gray-600">Miscellaneous maintenance needs</p>
              <div className="mt-4">
                <p className="text-sm text-gray-600">Requests: 3</p>
                <p className="text-sm text-gray-600">Budget: $5,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
