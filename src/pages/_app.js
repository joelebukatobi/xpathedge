// Redux Tool Kit
import { Provider } from 'react-redux';
import store from 'store/store';
// Styling
import '../assets/styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
