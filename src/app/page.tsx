import Link from "next/link";

interface FinanceStats {
  balance: number;
}

interface Event {
  title: string;
  date: string;
}

interface MaintenanceStats {
  totalRequests: number;
}

interface CommitteeStats {
  totalMembers: number;
}

const financeStats: FinanceStats = {
  balance: 40000,
};

const upcomingEvent: Event = {
  title: "Annual General Meeting",
  date: "April 15, 2025",
};

const maintenanceStats: MaintenanceStats = {
  totalRequests: 3,
};

const committeeStats: CommitteeStats = {
  totalMembers: 5,
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Strata Management Dashboard
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Your one-stop solution for property management and community engagement
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Grid */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white/90">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Finances Card */}
            <Link
              href="/finances"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Current Balance</h2>
                <p className="text-4xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                  ${financeStats.balance.toLocaleString()}
                </p>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>

            {/* Events Card */}
            <Link
              href="/events"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-8 bg-gradient-to-r from-green-50 to-green-100">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Next Event</h2>
                <p className="text-lg font-semibold text-green-600 group-hover:text-green-700 transition-colors">
                  {upcomingEvent.title}
                </p>
                <p className="text-gray-600">{upcomingEvent.date}</p>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>

            {/* Maintenance Card */}
            <Link
              href="/maintenance"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-8 bg-gradient-to-r from-yellow-50 to-yellow-100">
                <h2 className="text-2xl font-bold text-yellow-800 mb-4">Maintenance Requests</h2>
                <p className="text-4xl font-bold text-yellow-600 group-hover:text-yellow-700 transition-colors">
                  {maintenanceStats.totalRequests}
                </p>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>

            {/* Committee Card */}
            <Link
              href="/committee"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-8 bg-gradient-to-r from-purple-50 to-purple-100">
                <h2 className="text-2xl font-bold text-purple-800 mb-4">Committee Members</h2>
                <p className="text-4xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors">
                  {committeeStats.totalMembers}
                </p>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>

            {/* Documents Card */}
            <Link
              href="/documents"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="bg-gray-200 rounded-full p-4 mb-4">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Documents</h2>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white/90">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Why Choose Our Strata Management Solution?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Efficient Management
              </h3>
              <p className="text-gray-600">
                Streamlined processes for property maintenance, billing, and resident communication
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 rounded-full p-4 mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Enhanced Security
              </h3>
              <p className="text-gray-600">
                Advanced security features to protect your property and residents
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 rounded-full p-4 mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Community Engagement
              </h3>
              <p className="text-gray-600">
                Tools for effective communication and community building
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
