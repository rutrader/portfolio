import { ImageResponse } from 'next/og';

export const alt = 'Ruslan Ishemgulov — Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#030917',
          backgroundImage:
            'linear-gradient(135deg, rgba(14,69,155,0.55) 0%, rgba(27,45,236,0.28) 45%, rgba(3,9,23,0) 72%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 2, color: '#75a9ff', textTransform: 'uppercase' }}>
          Software Engineer
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 16, letterSpacing: -2 }}>Ruslan Ishemgulov</div>
        <div style={{ fontSize: 34, marginTop: 24, color: 'rgba(255,255,255,0.72)', maxWidth: 900 }}>
          Building products across web &amp; mobile — economics, investing, and AI.
        </div>
        <div style={{ fontSize: 26, marginTop: 40, color: 'rgba(255,255,255,0.5)' }}>ishemgulov.com</div>
      </div>
    ),
    { ...size },
  );
}
