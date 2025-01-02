import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
    <div className='bg-slate-400 flex justify-between ' >
      <span>
    <p className='text-white text-lg flex items-center ml-5 ' >© 2024 All Rights Reserved</p>
    </span>
    <span className="flex gap-4 items-center mr-5">
    <FaTwitter className="text-lg cursor-pointer hover:text-gray-300" />
    <FaFacebook className="text-lg cursor-pointer hover:text-gray-300" />
    <FaInstagram className="text-lg cursor-pointer hover:text-gray-300" />
    </span>
    </div>
    </div>
  )
}

export default Footer
