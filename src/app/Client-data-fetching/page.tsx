"use client"
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

interface Product  {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: number;
  };

const Products = () => {
const [products, setProducts] = useState<Product[]>([])
const [loading, setLoading] = useState(true);
useEffect (()=>{
    const products = async () => {
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
    } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
    }
}
products()

setTimeout(()=>{
console.log('Running');
        

    }, 2000);
},[])
return (
    <div  >
        <Navbar/>
        <h1 className="text-4xl font-bold mt-8 md:mt-4 mb-3 text-center underline  text-black" >FakeStore Products</h1>

{loading?(<p className="font-bold text-2xl justify-center text-center mx-2 md:mx-4 my-[145px] md:my-[250px] px-[10px] md:px-5 py-[14px] md:py-7" >Loading! Please wait.</p>) : (
    <div className="space-y-4 p-6" >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
{products.map((product)=>(
    <div key={product.id} className="border rounded-lg shadow-md p-4 " >
        <Image
        src={product.image}
        alt={product.title}
        width={150}
        height={150}
        className=" mx-auto"
        />
        <h2 className="text-lg font-semibold mb-2" >{product.title}</h2>
        
        <p className="font-medium mb-1" >{product.description}</p>
        
        <p className="text-red-600 font-extrabold " >${product.price}</p>
        <div className="mt-4 self-end">
        <p className="font-semibold text-slate-600 ">${product.category}</p>
        </div>
    </div>
))}
    </div>
    </div>
)}
<Footer/>
    </div>
  )
}

export default Products
