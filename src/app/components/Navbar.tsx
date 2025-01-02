import React from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';


const Navbar = () => {
  return (
    <div>
        <div className='' >
           <nav className= 'w-full h-[60px] flex gap-2 items-center justify-between bg-slate-400' >
            <div className='hidden md:flex items-center justify-between'>
            <div className='flex gap-5 items-center justify-between ml-6'>
      <Link href="/About" target='_blank' className='text-base font-semibold text-white hover:text-black'>About</Link>
      <Link href="/Contact" target='_blank' className='text-base font-semibold text-white hover:text-black'>Contact</Link>
      
      <span className=' flex gap-5 items-center'>
      <Input placeholder='Email' className='w-[240px] bg-white  absolute right-3 ' />
      <Button className='absolute right-3 bg-slate-500' >Send</Button>
  
      <Link href="/About" target='_blank'  className='text-base font-semibold text-white hover:text-black'>Sign Up</Link>
      <Link href="/About" target='_blank' className='text-base font-semibold text-white hover:text-black'>Sign In</Link>
      
      </span>

      </div>
      </div>
      <h1 className='md:hidden items-center text-center justify-center ml-6 text-2xl font-semibold text-gray-100' >Hello! Welcome To This Website </h1>
      </nav>
      <div className=' md:hidden ' >
<Sheet  >
 <SheetTrigger>
 <Button variant={'outline'} size={'icon'} className='ml-3 mt-3 border border-slate-600' >
  <Menu />
</Button>
 </SheetTrigger>
 <SheetContent>
  <div className='flex flex-col gap-6 mt-20' >
  <Link href="/About" target='_blank' className='text-base font-semibold  '>About</Link>
  <Link href="/Contact" target='_blank' className='text-base font-semibold  '>Contact</Link>
  <Link href="/About" target='_blank'  className='text-base font-semibold  '>Sign Up</Link>
  <Link href="/About" target='_blank' className='text-base font-semibold  '>Sign In</Link>
  <div className='flex flex-col mt-16'>
  <Input placeholder='Email' className='w-[260px] bg-white  absolute right-6 ' />
  <Button className=' absolute right-6 bg-slate-500' >Send</Button>
  </div>
  </div>
  </SheetContent>
</Sheet>
</div>
      </div>
    </div>
  )
}

export default Navbar
