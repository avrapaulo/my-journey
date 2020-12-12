import { Header } from 'components/header'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <body className="text-black transition-colors duration-1000 dark:text-white">
    <section className="text-gray-700">
      <div className="container px-5 mx-auto xl:px-0">
        <Header />
        {children}
      </div>
    </section>
  </body>
)

export { Layout }
