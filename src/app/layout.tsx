import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Binny Buddy',
  description: 'Binny Buddy로 배우는 분리배출 방법',
  icons: ['/favicon.svg'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
