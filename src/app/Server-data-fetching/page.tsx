
import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

interface Books {
  
    id: number,
    name: string,
    type: string,
    available: boolean,
  }

const serverPage = async () => {
    const response =  await fetch("https://simple-books-api.glitch.me/books/");
    const parsedResponse : Books[] = await response.json();
    console.log("Books >>>", parsedResponse);
  return (
    <div>
        <Navbar/>
        <h1 className="text-4xl font-bold mt-8 md:mt-4 mb-3 text-center underline  text-black">
          Server Side Fetched Books Series
        </h1>
        <div className="space-y-4 p-4 ">
      {parsedResponse.map((Books, index) => (
 <div key={index} className="w-full grid grid-cols-1 grid-rows-1 gap-2 rounded-md shadow-md hover:shadow-2xl border p-10 bg-slate-100  border-gray-400 text-lg font-bold">
 
 <p className='' >id: {Books.id} </p>
 <p>name: {Books.name}</p>
 <p>type: {Books.type}</p>
 <p>available: {`${Books.available}`}</p>
</div>
       ))}
       </div>
<Footer/>
    </div>
  )
}

export default serverPage
