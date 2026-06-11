import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Eduardo Nowakoski | Senior Front-End Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0C0C0E',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#F5F5F4',
            marginBottom: 16,
          }}
        >
          Eduardo Nowakoski
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#14B8A6',
            marginBottom: 32,
          }}
        >
          Senior Front-End Engineer
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#A8A29E',
          }}
        >
          React · Next.js · Vue.js · Angular · TypeScript
        </div>
      </div>
    ),
    { ...size }
  )
}
