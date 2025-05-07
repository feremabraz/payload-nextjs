import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export const GET = async () => {
  try {
    // Dynamically import payload and config to avoid build-time issues
    const { getPayload } = await import('payload')
    const configPromise = (await import('@/payload.config')).default
    
    const payload = await getPayload({
      config: configPromise,
    })

    const data = await payload.find({
      collection: 'users',
    })

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error in route handler:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
