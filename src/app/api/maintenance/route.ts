import { NextResponse } from 'next/server';

interface MaintenanceRequest {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: string;
  building: string;
  unit: string;
  contact: string;
  timestamp: string;
}

// Persistent mock data
const mockRequests: MaintenanceRequest[] = [
  {
    id: 1,
    title: 'Leaking Roof in Building A',
    description: 'Water leaking through the roof in unit 102',
    category: 'Structural',
    priority: 'High',
    building: 'Building A',
    unit: '102',
    contact: 'John Smith',
    timestamp: '2025-04-04T00:54:42+11:00'
  },
  {
    id: 2,
    title: 'Electrical Fault in Common Area',
    description: 'Main lighting circuit tripping frequently',
    category: 'Electrical',
    priority: 'Medium',
    building: 'Building B',
    unit: 'Common Area',
    contact: 'Sarah Johnson',
    timestamp: '2025-04-04T00:54:42+11:00'
  }
];

// Create a new array for each request
let userRequests: MaintenanceRequest[] = [];
let nextId = 3;

export async function POST(request: Request) {
  try {
    const data = await request.json() as Omit<MaintenanceRequest, 'id' | 'timestamp'>;
    
    const newRequest: MaintenanceRequest = {
      ...data,
      id: nextId++,
      timestamp: new Date().toISOString()
    };
    
    // Store in memory
    userRequests = [newRequest]; // Only keep the latest request
    
    return NextResponse.json({
      message: 'Maintenance request submitted successfully',
      data: newRequest
    });
  } catch (error) {
    console.error('Error processing maintenance request:', error);
    return NextResponse.json(
      { error: 'Failed to process maintenance request' },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    // Only return mock data from the server
    return NextResponse.json(mockRequests);
  } catch (error) {
    console.error('Error fetching maintenance requests:', error);
    return NextResponse.json(
      { error: 'Failed to fetch maintenance requests' },
      { status: 500 }
    );
  }
}
