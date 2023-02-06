import Head from 'next/head'
import Image from 'next/image'
import AltColumn from '../components/AltColumn'
import Arena from '../components/Arena'
import Header from '../components/Header'
import PetroColumn from '../components/PetroColumn'


const Home = () => {
  return (
    <div>
      <Head>
        <title>NREL Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main>
      <AltColumn />

      <Arena />
      
      <PetroColumn />
      </main>
    </div>
     
  )
}

export default Home
