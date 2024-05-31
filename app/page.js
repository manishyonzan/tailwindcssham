import Image from 'next/image'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Services from '../component/Services'


export default function Home() {
  return (
    <main className="flex flex-col items-start">
      <Navbar/>
      <Hero/>
      <Services/>
    </main>
  )
}
