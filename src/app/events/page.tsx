'use client';

import Link from "next/link";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  eventType: "AGM" | "Social" | "Maintenance" | "Other";
  attendees: number;
  status: "Upcoming" | "In Progress" | "Completed";
}

interface AgendaItem {
  time: string;
  title: string;
  description: string;
  speaker?: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Annual General Meeting",
    date: "2025-04-15",
    time: "10:00 AM",
    location: "Community Hall",
    description: "Annual meeting to discuss property management, budget, and upcoming projects",
    eventType: "AGM",
    attendees: 50,
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Spring Cleaning Day",
    date: "2025-04-22",
    time: "9:00 AM",
    location: "Property Grounds",
    description: "Annual community cleaning event. All residents welcome to participate.",
    eventType: "Maintenance",
    attendees: 30,
    status: "Upcoming"
  },
  {
    id: 3,
    title: "Easter Social Event",
    date: "2025-04-21",
    time: "6:00 PM",
    location: "Community Garden",
    description: "Family-friendly Easter celebration with activities for children",
    eventType: "Social",
    attendees: 75,
    status: "Upcoming"
  },
];

const eventStats = {
  totalEvents: 12,
  upcomingEvents: 3,
  completedEvents: 9,
  attendanceRate: 85,
  averageAttendees: 45,
};

const sampleAgenda: AgendaItem[] = [
  {
    time: "10:00 - 10:15",
    title: "Welcome and Opening Remarks",
    description: "Introduction by the Property Manager"
  },
  {
    time: "10:15 - 10:45",
    title: "Financial Report",
    description: "Review of annual budget and financial statements"
  },
  {
    time: "10:45 - 11:15",
    title: "Property Maintenance Update",
    description: "Status of ongoing and planned maintenance projects"
  },
  {
    time: "11:15 - 11:30",
    title: "Q&A Session",
    description: "Open floor for resident questions"
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Events & Meetings</h1>
            <Link
              href="/events/create"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Create Event
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Events */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Events</h3>
              <p className="text-3xl font-bold text-blue-600">{eventStats.totalEvents}</p>
              <p className="text-sm text-gray-600 mt-2">This year</p>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Upcoming Events</h3>
              <p className="text-3xl font-bold text-green-600">{eventStats.upcomingEvents}</p>
              <p className="text-sm text-gray-600 mt-2">In the next 30 days</p>
            </div>

            {/* Average Attendance */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Average Attendance</h3>
              <p className="text-3xl font-bold text-purple-600">{eventStats.averageAttendees}</p>
              <p className="text-sm text-gray-600 mt-2">Per event</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.status === "Upcoming" ? "bg-green-100 text-green-800" :
                    event.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
                    "bg-gray-100 text-gray-800"
                  }`}>
                    {event.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-medium">{new Date(event.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="font-medium">{event.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-medium">{event.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-medium">{event.eventType}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {event.attendees} expected attendees
                  </div>
                  <Link
                    href={`/events/${event.id}`}
                    className="ml-auto inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Event Details */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Annual General Meeting</h2>
          <div className="bg-white rounded-xl shadow-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Event Agenda</h3>
              <div className="space-y-4">
                {sampleAgenda.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-gray-600">{item.time}</span>
                      {item.speaker && (
                        <span className="text-sm text-gray-600">{item.speaker}</span>
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
