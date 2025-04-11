import { VT323 } from '@next/font/google';

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',  
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={vt323.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
