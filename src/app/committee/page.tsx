'use client';

import Link from "next/link";

interface CommitteeMember {
  id: number;
  name: string;
  position: string;
  email: string;
  phone: string;
  bio: string;
  termStart: string;
  termEnd: string;
}

interface CommitteeStats {
  totalMembers: number;
  activeMembers: number;
  upcomingElections: number;
  averageTenure: string;
}

const committeeStats: CommitteeStats = {
  totalMembers: 5,
  activeMembers: 5,
  upcomingElections: 2,
  averageTenure: "2 years",
};

const committeeMembers: CommitteeMember[] = [
  {
    id: 1,
    name: "John Smith",
    position: "Chairperson",
    email: "chairperson@strata.com",
    phone: "(555) 123-4567",
    bio: "John has been serving as the Chairperson for 3 years, bringing extensive experience in property management and community leadership.",
    termStart: "2023-04-01",
    termEnd: "2025-03-31"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Treasurer",
    email: "treasurer@strata.com",
    phone: "(555) 987-6543",
    bio: "Sarah manages the financial aspects of the property, ensuring transparent and efficient budget management.",
    termStart: "2024-01-01",
    termEnd: "2026-12-31"
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Secretary",
    email: "secretary@strata.com",
    phone: "(555) 456-7890",
    bio: "Michael handles all administrative and documentation tasks, ensuring smooth communication within the committee.",
    termStart: "2023-07-01",
    termEnd: "2025-06-30"
  },
  {
    id: 4,
    name: "Emma Wilson",
    position: "Maintenance Coordinator",
    email: "maintenance@strata.com",
    phone: "(555) 789-0123",
    bio: "Emma oversees all maintenance activities and ensures timely completion of repair and improvement projects.",
    termStart: "2024-03-01",
    termEnd: "2026-02-28"
  },
  {
    id: 5,
    name: "David Brown",
    position: "Community Liaison",
    email: "liaison@strata.com",
    phone: "(555) 321-6549",
    bio: "David serves as the primary point of contact between the committee and residents, facilitating effective communication.",
    termStart: "2023-11-01",
    termEnd: "2025-10-31"
  },
];

export default function CommitteePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Committee Members</h1>
            <Link
              href="/committee/elections"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View Elections
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Active Members */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Members</h3>
              <p className="text-3xl font-bold text-green-600">{committeeStats.activeMembers}</p>
              <p className="text-sm text-gray-600 mt-2">Currently serving</p>
            </div>

            {/* Upcoming Elections */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Upcoming Elections</h3>
              <p className="text-3xl font-bold text-blue-600">{committeeStats.upcomingElections}</p>
              <p className="text-sm text-gray-600 mt-2">Positions open</p>
            </div>

            {/* Average Tenure */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Average Tenure</h3>
              <p className="text-3xl font-bold text-purple-600">{committeeStats.averageTenure}</p>
              <p className="text-sm text-gray-600 mt-2">Average service period</p>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Committee Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {member.position}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {member.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {member.phone}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Term: {new Date(member.termStart).toLocaleDateString()} - {new Date(member.termEnd).toLocaleDateString()}
                    </div>
                  </div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Positions */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Committee Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leadership */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Leadership</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-600 rounded-full" />
                  <span className="font-medium">Chairperson</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-600 rounded-full" />
                  <span className="font-medium">Treasurer</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-600 rounded-full" />
                  <span className="font-medium">Secretary</span>
                </li>
              </ul>
            </div>

            {/* Support Roles */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Support Roles</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-600 rounded-full" />
                  <span className="font-medium">Maintenance Coordinator</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-600 rounded-full" />
                  <span className="font-medium">Community Liaison</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
