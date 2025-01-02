import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const Homepage =  () => {
  return (
    <div>
  <Navbar/>
<span className='flex items-center justify-center' >
<Link href="/Server-data-fetching" target='_blank' ><Button className='text-lg mx-4 my-[250px] px-5 py-7 bg-slate-400 font-bold text-black ' >Server Data </Button></Link>
<Link href="/Client-data-fetching" target='_blank' ><Button className='text-lg mx-4 my-[250px] px-5 py-7 bg-slate-400 font-bold text-black ' >Client Data </Button></Link>

</span>
<Footer/>
    </div>
  )
}

export default Homepage
