import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TRILEDIA | Digital Creative Agency & Solusi IT Terpercaya',
  description: 'Transformasi bisnis Anda bersama TRILEDIA. Jasa Web Development, UI/UX Design, dan Social Media Management profesional.',
  keywords: ['Digital Agency Bogor', 'Web Development Indonesia', 'UI/UX Design', 'Social Media Management', 'Triledia ID'],
  openGraph: {
    title: 'TRILEDIA - Solusi Digital Terpercaya',
    description: 'Ubah ide rumit menjadi solusi digital elegan bersama tim ahli kami.',
    url: 'https://triledia.id',
    siteName: 'TRILEDIA.ID',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'TRILEDIA Digital Agency' }],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRILEDIA | Digital Creative Agency',
    description: 'Membangun produk digital yang dicintai pengguna.',
    images: ['/images/og-image.jpg'], 
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased font-['Plus_Jakarta_Sans']">{children}</body>
    </html>
  );
}