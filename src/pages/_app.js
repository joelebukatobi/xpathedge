// Redux Tool Kit
import { Provider } from 'react-redux';
import store from 'store/store';
// Styling
import '../assets/styles/main.scss';
// Fonts
import { DM_Sans, IBM_Plex_Mono, Mulish } from '@next/font/google';
const dm_sans = DM_Sans({
  variable: '--font-dm-sans',
  display: 'optional',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const ibm_plex_mono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  display: 'optional',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

const mulish = Mulish({
  variable: '--font-ibm-plex-mono',
  display: 'optional',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <style jsx global>
        {`
          :root {
            --dm-sans-font: ${dm_sans.style.fontFamily};
            --ibm-plex-mono-font: ${ibm_plex_mono.style.fontFamily};
            --mulish-font: ${mulish.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
