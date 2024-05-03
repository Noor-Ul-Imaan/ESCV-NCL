import React from 'react';
import CapacityBuilding from './CapacityBuilding';
import Footer from '../Footer';
import './Phd.css';
import { useContentfulData } from "../CMS/contentful";


function Phd () {
    const phdData = useContentfulData('phd');

    return (

        <div className='phd-page'>
            <CapacityBuilding/>
            <div className='Phd'>
                {/* <h1>Phd</h1>    */}
                {phdData && phdData.length > 0 && phdData.map((post) => (
            <div className="flex flex-col md:flex-row gap-[5rem] px-10 py-10 pb-5 border-black border-t border-b" style={{fontFamily: "Montserrat"}}>

                <div className="flex items-center justify-center m-auto">
                    <img className="w-[15rem] rounded-full" src={post.fields.image.fields.file.url} />
                </div>
                <div className="flex flex-col font-['Montserrat']">
                    <div className="text-[20px]">
                    <span className="font-bold  text-[#162E45]">{post.fields.name}</span>
                    <span className=" text-[#162E45]  font-[400]">,<i> {post.fields.position}</i></span>
                    </div>

                    <br />

                    <div className="text-[16px]">
                    <span className="text-[#162E45] font-bold ">
                        Research Area:
                        <br />{" "}
                    </span>
                    <span className="text-[#162E45] text-[16px]">{post.fields.researchArea}</span>
                    </div>

                    <br />

                    <div className="text-[16px]">
                    <span className="text-[#162E45] font-bold ">
                        Overview: <br />
                    </span>
                    <span className="text-[#162E45] text-[16px]">{post.fields.overview}</span>
                    </div>

                    <div className="text-[16px]">
                    <br />
                    <span className="text-[#162E45] font-bold ">
                        Contact: <br />
                    </span>
                    </div>

                    <div className="  p-[10px]">
                    
                        
                        <div className="flex flex-col md:flex-row md:gap-[6rem] text-[#162E45]">
                            <div className="gap-5"><i class='bx bxs-phone'></i> {post.fields.contactNumber}</div>
                            <div><i class='bx bxs-envelope'></i> {post.fields.email}</div>
                            
                        </div>

                      
                    </div>
                </div>
            </div>
       ))}
            </div>  
            <Footer/>      
        </div>
    );
}

export default Phd;