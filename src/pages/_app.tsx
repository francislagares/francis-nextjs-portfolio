import '@/scss/globals.css';
import '@/scss/index.scss';

import type { AppProps } from 'next/app';
import { Fira_Code, Raleway } from 'next/font/google';

import GoogleAnalytics from '@/components/GoogleAnalytics';

const raleway = Raleway({ subsets: ['latin'] });
const firaCode = Fira_Code({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
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
      <Component {...pageProps} />;
    </>
  );
};

export default App;
