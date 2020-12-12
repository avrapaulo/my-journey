import { AppProps } from 'next/app'
import { Layout } from 'components/layout'
import 'styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
