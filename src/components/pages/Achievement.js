import React from 'react';
import Footer from '../Footer';
import './Collaborations.css'
import { useContentfulData } from "../CMS/contentful";


const Achievement = () => {
  const achievementsData = useContentfulData('honorsAndAchievements');
  return (
    <>
      <div className='heading'>
          <h1>Honors and Achievements</h1>   
      </div>
      
      {achievementsData.map((post) => (
        <div className="w-full" key={post.sys.id}>
          <div className="mt-10 mx-auto w-full">
            <div className="bg-[#A8A8A8] mains px-2 py-2 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1200px]">
              <p className="text-xl">{post.fields.title}</p>
              {/* Images Section */}
              <div className="flex mt-5 flex-wrap">
                {/* Check if there are three images */}
                {post.fields.images.length === 3 ? (
                  <>
                    {/* First two images */}
                    <div className="w-full md:w-1/2">
                      {post.fields.images.slice(0, 2).map((image, index) => (
                        <img
                          key={index}
                          src={image.fields.file.url}
                          alt="award"
                          className="w-full mb-3"
                          style={{ maxWidth: '100%' }}
                        />
                      ))}
                    </div>
                    {/* Third image */}
                    <div className="w-full md:w-1/2 flex justify-end">
                      <img
                        key={2}
                        src={post.fields.images[2].fields.file.url}
                        alt="award"
                        className="w-full mb-3"
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* If less than three images, display side by side */}
                    {post.fields.images.map((image, index) => (
                      <div className="w-full md:w-1/2" key={index}>
                        <img
                          src={image.fields.file.url}
                          alt="award"
                          className="w-full mb-3"
                          style={{ maxWidth: '100%' }}
                        />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
      ))}
      <Footer/>
    </>
  
  )
}

export default Achievement