import React from 'react'
import { Link } from 'react-router-dom'
import { useContentfulData } from "../../CMS/contentful";


const Optics = () => {
  const opticsData = useContentfulData('internsOptics');

  return (
    <div>
      {/* <div className="mt-10 border-b-2 border-black mx-10">
        <h1 className="text-2xl font-bold">Optics</h1>
      </div> */}
      <div className="mt-10 heading mx-10">
        <h1 className="text-2xl font-bold  ">Optics</h1>
      </div>  

      <div className=" mt-10  mx-auto w-full">
        <div className=" mains px-2 py-2  sm:max-w-[600px]  md:max-w-[734px] lg:max-w-[1050px] xl:max-w-[1100px]  2xl:max-w-[1200px]   ">
          <div className="flex flex-wrap  justify-center gap-4 ">

            {opticsData && opticsData.length > 0 && opticsData.map((post) => (
              <div key={post.sys.id} className="border-2  rounded-lg card  ">
                <div className="flex justify-center w-full">
                  <div className=" bg-[#BCBCBC] mt-5 h-[100px] w-[100px] rounded-full">
                  {post.fields.image && post.fields.image.fields.file && post.fields.image.fields.file.url && (
                    <img src={post.fields.image.fields.file.url} alt="" className="w-full h-full rounded-full"/>
                  )}
                   
                
                  </div>
                </div>
                <div className=" texts mt-6 text-center">
                 <Link to={post && post.fields.linkedIn} target="_blank"><h1 className="text-lg font-semibold">{post.fields.name}</h1></Link> 
                  <p className=" text-center">{post.fields.department}</p>
                  <p className="text-center">{post.fields.batch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Optics
