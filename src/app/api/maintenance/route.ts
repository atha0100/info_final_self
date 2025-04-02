import { NextResponse } from 'next/server';

interface MaintenanceRequest {
  title: string;
  description: string;
  category: string;
  priority: string;
  building: string;
  unit: string;
  contact: string;
}

const categories = ['Plumbing', 'Electrical', 'Structural', 'Common Areas', 'Other'];
const priorities = ['Low', 'Medium', 'High', 'Urgent'];

export async function POST(request: Request) {
  try {
    const data = await request.json() as MaintenanceRequest;
    
    // Here you would typically save the data to a database
    console.log('Received maintenance request:', data);
    
    return NextResponse.json({
      message: 'Maintenance request submitted successfully',
      data,
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
    // In a real application, this would fetch data from a database
    const mockRequests: MaintenanceRequest[] = [
      {
        title: 'Leaking Roof in Building A',
        description: 'Water leaking through the roof in unit 102',
        category: 'Structural',
        priority: 'High',
        building: 'Building A',
        unit: '102',
        contact: 'John Smith'
      },
      {
        title: 'Electrical Fault in Common Area',
        description: 'Main lighting circuit tripping frequently',
        category: 'Electrical',
        priority: 'Medium',
        building: 'Building B',
        unit: 'Common Area',
        contact: 'Sarah Johnson'
      }
    ];

    return NextResponse.json(mockRequests);
  } catch (error) {
    console.error('Error fetching maintenance requests:', error);
    return NextResponse.json(
      { error: 'Failed to fetch maintenance requests' },
      { status: 500 }
    );
  }
}
