import { Header } from 'components/header'
import { Footer } from 'components/footer'
interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <section>
    <div className="container px-5 mx-auto 2xl:px-0 flex flex-col h-screen">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  </section>
)

export { Layout }
