import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ben Gabsia Studio - Professional Photography',
  description: 'Ben Gabsia Studio - Professional photography services for weddings, events, and special occasions. Capturing life\'s precious moments with artistic excellence.',
  keywords: 'Ben Gabsia, photography, photographer, studio, professional photography, wedding photography, event photography, portrait photography',
  authors: [{ name: 'Ben Gabsia' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}