import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import UserContextProvider from '../components/UserContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>

  )
}

export default MyApp
