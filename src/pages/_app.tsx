import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Layout } from 'components/layout'
import 'styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default MyApp
