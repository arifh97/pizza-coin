import { React, useEffect } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Footer from './components/Footer'
import Roadmap from './components/Roadmap'
import Faq from './components/Faq'
import Aos from 'aos'

function App() {
  useEffect(() => { Aos.init({ duration: 800, once: true }) }, [])
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Tokenomics />
      <Roadmap />
      <Faq />
      <Footer />
    </>
  )
}

export default App
