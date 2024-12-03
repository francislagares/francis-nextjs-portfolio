'use client';

import '@/scss/globals.css';
import '@/scss/index.scss';

import { Fira_Code, Raleway } from 'next/font/google';

import GoogleAnalytics from '@/components/ui/GoogleAnalytics';

const raleway = Raleway({ subsets: ['latin'] });
const firaCode = Fira_Code({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
      <style jsx global>{`
        :root {
          --raleway: ${raleway.style.fontFamily};
          --fira-code: ${firaCode.style.fontFamily};
        }
      `}</style>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </>
  );
};

export default RootLayout;
