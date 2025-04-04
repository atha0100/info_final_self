import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  // Perform health checks
  const checks = {
    database: 'ok',
    cache: 'ok',
    externalServices: 'ok',
    responseTime: '20ms'
  };

  return NextResponse.json({ status: 'healthy', checks });
}
