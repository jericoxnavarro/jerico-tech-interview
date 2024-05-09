import '@/styles/globals.css';
import Head from 'next/head';
import { wrapper } from '@/store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Todo List</title>
        <script src="//cdnt.netcoresmartech.com/smartechclient.js" async />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
