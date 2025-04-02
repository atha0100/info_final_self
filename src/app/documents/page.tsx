'use client';

import Link from "next/link";

interface Document {
  id: number;
  title: string;
  type: string;
  date: string;
  description: string;
  category: string;
  status: "Active" | "Archived";
  icon: string;
}

const documents: Document[] = [
  {
    id: 1,
    title: "Strata Bylaws",
    type: "PDF",
    date: "2025-01-01",
    description: "Official bylaws and regulations for the strata property",
    category: "Legal",
    status: "Active",
    icon: "📄"
  },
  {
    id: 2,
    title: "Annual Budget Report",
    type: "Excel",
    date: "2025-03-31",
    description: "Detailed financial report for the fiscal year",
    category: "Financial",
    status: "Active",
    icon: "📊"
  },
  {
    id: 3,
    title: "Maintenance Schedule",
    type: "PDF",
    date: "2025-04-01",
    description: "Quarterly maintenance schedule and checklist",
    category: "Maintenance",
    status: "Active",
    icon: "🔧"
  },
  {
    id: 4,
    title: "Emergency Procedures",
    type: "PDF",
    date: "2025-01-15",
    description: "Emergency response procedures and contact information",
    category: "Safety",
    status: "Active",
    icon: "🚨"
  },
  {
    id: 5,
    title: "Resident Handbook",
    type: "PDF",
    date: "2025-02-01",
    description: "Comprehensive guide for residents",
    category: "General",
    status: "Active",
    icon: "📚"
  },
  {
    id: 6,
    title: "Parking Rules",
    type: "PDF",
    date: "2025-01-01",
    description: "Parking regulations and guidelines",
    category: "Rules",
    status: "Active",
    icon: "🚗"
  },
  {
    id: 7,
    title: "Pet Policy",
    type: "PDF",
    date: "2025-01-01",
    description: "Pet ownership rules and regulations",
    category: "Rules",
    status: "Active",
    icon: "🐶"
  },
  {
    id: 8,
    title: "Noise Policy",
    type: "PDF",
    date: "2025-01-01",
    description: "Noise control guidelines and regulations",
    category: "Rules",
    status: "Active",
    icon: "🔇"
  },
  {
    id: 9,
    title: "Common Area Usage Policy",
    type: "PDF",
    date: "2025-01-01",
    description: "Guidelines for using common areas",
    category: "Rules",
    status: "Active",
    icon: "🏢"
  },
  {
    id: 10,
    title: "Rental Agreement Template",
    type: "PDF",
    date: "2025-01-01",
    description: "Standard rental agreement template",
    category: "Legal",
    status: "Active",
    icon: "📋"
  },
];

const documentStats = {
  totalDocuments: 10,
  activeDocuments: 10,
  archivedDocuments: 5,
  lastUpdated: "2025-04-01",
};

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Documents</h1>
            <Link
              href="/documents/upload"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Upload Document
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Documents */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Documents</h3>
              <p className="text-3xl font-bold text-blue-600">{documentStats.totalDocuments}</p>
              <p className="text-sm text-gray-600 mt-2">Available documents</p>
            </div>

            {/* Active Documents */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Documents</h3>
              <p className="text-3xl font-bold text-green-600">{documentStats.activeDocuments}</p>
              <p className="text-sm text-gray-600 mt-2">Currently active</p>
            </div>

            {/* Last Updated */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Last Updated</h3>
              <p className="text-3xl font-bold text-purple-600">{documentStats.lastUpdated}</p>
              <p className="text-sm text-gray-600 mt-2">Last document update</p>
            </div>
          </div>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Document Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Legal</h3>
              <p className="text-sm text-gray-600">Bylaws, agreements, policies</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Financial</h3>
              <p className="text-sm text-gray-600">Budgets, reports, invoices</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Maintenance</h3>
              <p className="text-sm text-gray-600">Schedules, checklists, reports</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Rules</h3>
              <p className="text-sm text-gray-600">Resident guidelines and policies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Document List */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{doc.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-800">{doc.title}</h3>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    doc.status === "Active" ? "bg-green-100 text-green-800" :
                    "bg-gray-100 text-gray-800"
                  }`}>
                    {doc.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-medium">{doc.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-medium">{new Date(doc.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Category</p>
                    <p className="font-medium">{doc.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
