import Image from 'next/image'
import Navbar from './component/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start">
      <Navbar/>
      <div className="z-10 mt-1 w-full items-center justify-between font-mono text-sm lg:flex  bg-gray-500">
        hello
      </div>
    </main>
  )
}
