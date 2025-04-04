import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  // In a real application, this would fetch from a database
  const mockStats = {
    totalRequests: 123,
    activeRequests: 78,
    completedRequests: 45,
    priorityStats: {
      Low: 30,
      Medium: 40,
      High: 25,
      Urgent: 8
    },
    categoryStats: {
      Plumbing: 25,
      Electrical: 30,
      Structural: 20,
      'Common Areas': 15,
      Other: 13
    }
  };

  return NextResponse.json(mockStats);
}
