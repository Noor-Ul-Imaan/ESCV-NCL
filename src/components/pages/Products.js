import React from 'react';
import Footer from '../Footer';
import './Collaborations.css'
import { useContentfulData } from "../CMS/contentful";

// import img1 from '../Pages-Data/machine.jpg';


function Products () {
    const productsData = useContentfulData('products');

    return (
        <>
            <div className='heading'>
                <h1>Products</h1>   
            </div>   
            <div className="flex flex-col gap-2 px-5 text-[#1b354e] font-['Montserrat'] py-5 pb-5 mb-[8rem] mt-10 border-[#061A2D]">
        <div className="text-[30px] font-semibold font-['Montserrat'] text-[#061A2D]">
          PRODUCTS LIST
        </div>
        <div>
          {productsData.map((post) => (
            <div className='gap-2' key={post.sys.id}>
              <li className="text-[#7D7D7D] gap-3">
                <a href={`#${post.fields.title}`} className="text-[#7D7D7D] hover:text-[#00B4E8] hover:cursor-pointer">
                  {post.fields.title}
                </a>
                <br></br> <br />
              </li>
            </div>
          ))}
        </div>
      </div>

{productsData && productsData.length > 0 && productsData.map((post) => (
        <div
          id={post.fields.title} /* Unique identifier for each product detail section */
          className="flex flex-col text-[#162E45] md:flex-row gap-[5rem] px-10 py-10 pb-5 border-black border-t border-b"
          key={post.sys.id}
          style={{ fontFamily: "Montserrat" }}
        >
          <div
          className={`flex flex-col gap-3 text-[#061A2D] font-['Montserrat'] py-10 pb-5`}
          
        >
          <h1 className="text-[20px] font-bold underline">
            Title: {post.fields.title}
          </h1>
          <div className="text-[16px]">
            <span className="font-extrabold">Key Features:</span> {post.fields.features}
          </div>
          <div>
            <span className="font-extrabold">Unique Selling Point:</span> <br />{
              post.fields.sellingPoint
            }
          </div>
          <div className="text-[16px]">
            <span className="font-extrabold">Team:</span> {post.fields.team}
          </div>
          <div className="text-[16px]">
            <span className="font-extrabold">Description:</span> {post.fields.description}
          </div>
          <div className="text-[16px]">
            <span className="font-extrabold">SDG:</span>
          </div>
          <div className="flex gap-10 bg-gray-300 p-[10px] w-fit">
            {post.fields.sdgs?.length &&
              post.fields.sdgs.map((item) => (
                <div >
                  <img src={item.fields.file.url} className="w-[80px]" />
                </div>
              ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4 pt-10 sm:justify-center items-center">
        {/* {post.fields.image1.map((item) => ( */}
          
          <img className=" w-[20rem] " src={post.fields.image1.fields.file.url}></img>
          

          <img className=" w-[15rem] " src={post.fields.image2.fields.file.url} />
        {/* ))} */}
      
        </div>
      </div>
  ))}

            



            <Footer/>   
        </>
    );
}

export default Products;


