import Head from 'next/head'
import { NavBar, Welcome, Services, Transactions, Footer } from '../components'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home | Crypt</title>
      </Head>
      <section className="min-h-screen">
        <div className="gradient-bg-welcome">
          <NavBar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </section>
    </>
  )
}

export default HomePage
