import type { Metadata } from 'next';
import './globals.css';
import { I18nProvider } from '@/lib/i18n';
import SiteChrome from '@/components/SiteChrome';
import Footer from '@/components/Footer';
import AmbientBackground from '@/components/AmbientBackground';
import MotionProvider from '@/components/MotionProvider';

export const metadata: Metadata = {
  title: 'moMENGt Studio — Usui Reiki, Toronto',
  description:
    'Moment by moment, heal from within. Usui Reiki sessions, training, and gift certificates in Toronto and worldwide via virtual sessions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <MotionProvider />
          <AmbientBackground />
          <a className="skip-link" href="#main-content">
            Skip to main content
          </a>
          <SiteChrome />
          <main id="main-content">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
