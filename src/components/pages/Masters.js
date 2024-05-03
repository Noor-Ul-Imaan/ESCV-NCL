import React from 'react';
import CapacityBuilding from './CapacityBuilding';
import Footer from '../Footer';
import './Masters.css'
import { useContentfulData } from "../CMS/contentful";

function Masters () {
    const mastersData = useContentfulData('masters');
    return (
        <div className='masters-page'>            
            <CapacityBuilding/>
            {mastersData.map((post) => (
                <div
                className={`flex flex-col md:flex-row gap-[5rem] px-10 py-10 pb-5 border-black border-t border-b`} key={post.sys.id} style={{ fontFamily: "Montserrat" }}>
                <div className={` flex items-center justify-center `}>
                    <img className="w-[15rem] rounded-full" src={post && post.fields.image.fields.file.url}/>
                </div>
                <div className="flex flex-col font-['Montserrat']">
                    <div className="text-[24px]">
                    <span className="font-bold  text-[#162E45] underline">{post.fields.name}</span>
                    </div>
                    <br />
                    <div className="text-[16px]">
                    <span className="text-[#162E45] font-bold ">Batch: </span>
                    <span className="text-[#162E45] text-[16px]">{post.fields.batch}</span>
                    </div>
                    <div className="text-[16px]">
                    <span className="text-[#162E45] font-bold ">
                        Department:
                    </span>
                    <span className="text-[#162E45] text-[16px]">{post.fields.department}</span>
                    </div><br />
                    <div className="text-[16px]">
                    <span className="text-[#162E45] font-bold ">
                        Expertise: <br />
                    </span>
                    <span className="text-[#162E45] text-[16px]">{post.fields.expertise}</span>
                    </div>
                    <div className="text-[16px]">
                    <span className="text-[#162E45] font-bold ">
                        Overview: <br />
                    </span>
                    <span className="text-[#162E45] text-[16px]">{post.fields.overview}</span>
                    </div>
                </div>
                </div>
                ))}    
            <Footer/>           
        </div>
    );
}

export default Masters;