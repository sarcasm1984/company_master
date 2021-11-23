import Script from 'next/script'
import Layout from "../components/Layout";
// import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
    <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"></Script>
    <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp
