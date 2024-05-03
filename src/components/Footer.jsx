import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { useContentfulData } from "./CMS/contentful";


const Footer = () => {
  const footerData = useContentfulData('footer');

  return (
    <>
      <div className="text-gray-600 h-auto body-font mt-24 bg-[#CACACA]">
      {footerData && footerData.length > 0 && footerData.map((post) => (

        <div className="px-5 py-24 mx-auto gap-4 flex justify-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

          {/* Start of Quick Section */}
          <div className="lg:w-1/3 md:w-1/4 md:text-left">
            <a className="flex title-font font-medium md:justify-start text-[#5F5F5F]">
              <h1 className="ml-3 text-3xl">ESCV LAB</h1>
            </a>

            <p className="mt-5 ml-3 text-xl text-[#5F5F5F]">Quick Links</p>
            <ul className='ml-8 mt-3'>
              <Link to='/about-page'>
                <li>About Us</li>
              </Link>
              <Link to='/products'>
                <li>Projects</li>
              </Link>
              <Link to='/collaborations'>
                <li>Collaboration</li>
              </Link>
              <Link to='/honors-and-achievements'>
                <li>Achievements</li>
              </Link>
            </ul>
          </div>
          {/* End of Quick Section */}

          {/* Start of Location Section */}
          <div className="lg:w-[35%] md:w-2/5 w-full px-4">
            <h2 className="title-font font-medium text-[#5F5F5F] tracking-widest text-3xl mb-3">Find US</h2>
            <a href={post && post.fields.addressLink} target="_blank" rel="noopener noreferrer">

              <nav className="list-none mb-5 flex items-center lg:justify-start text-[#5F5F5F]  hover:text-gray-800 flex gap-10 ">

                <IoLocationSharp size={80} />
                <p className='text-gray-600 hover:text-gray-800'> {post.fields.address}</p>
              
              </nav>
            </a>
            <div>
              <h2 className="title-font font-medium text-[#5F5F5F] tracking-widest text-3xl mb-3">Contact US</h2>
              <nav className="list-none ml-1 mb-5 flex md:justify-start ">
                <div>
                  <li className="text-[#5F5F5F] mb-3 hover:text-gray-800 flex gap-10 items-center"><MdEmail size={28} /> {post.fields.email}</li>
                  <li className="text-[#5F5F5F]  hover:text-gray-800 flex gap-10 items-center"><FaLinkedin size={28}/> {post.fields.linkedIn}</li>

                </div>
              </nav>
            </div>
          </div>
          {/* End of Location Section */}

          {/* Start Of Mission Section */}
          <div className="lg:w-2/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#5F5F5F] tracking-widest text-3xl mb-3">Our Mission</h2>
            <nav className="list-none mb-5">
              <p> {post.fields.mission}</p>
            </nav>
          </div>
          {/* End Of Mission Section */}            
          

        </div>
      ))}

        <div className="bg-[#CACACA] border-t-2 border-[#5F5F5F] w-full">
  <div className="py-4 px-5 flex flex-wrap justify-between flex-col sm:flex-row">
    <p className="text-[#5F5F5F] text-xl text-center sm:text-left sm:flex-grow">© Copyright ESCV - NCL NED</p>
  </div>
</div>

     
     
      </div>
    </>
  )
}

export default Footer;
