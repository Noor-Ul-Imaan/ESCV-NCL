import React from 'react';
import CapacityBuilding from './CapacityBuilding';
import './RAs.css';
import Footer from '../Footer';

import { useContentfulData } from "../CMS/contentful";


function RAs () {
    const rasData = useContentfulData('rAs');

    return (

        <div className='ras-page'>
            <CapacityBuilding/>
            <div className='RAs'>
                {rasData.map((post) => (
                    <div className='ra-card'>
                        <div className='ra-name'>
                            <b>{post.fields.name}</b>, 
                            <i> {post.fields.position}</i>
                            {post.fields.isPastMember ? <p>(Past Member)</p> : null}
                        </div> 
                        <div className='ra-details'>
                            <div className='ra-image'>
                                <img src={post.fields.image.fields.file.url}>
                                </img>                             
                            </div>

                            <div className='ra-credentials'>
                                <h5>About:</h5>
                                <p>{post.fields.about}</p>
                                <h5>Contact:</h5>
                                <p><i className='fas fa-phone'></i> {post.fields.contactNumber}</p>
                                <p><i className='fas fa-envelope-open'></i> {post.fields.email}</p>
                            </div>   
                        </div>   
                    </div> 
                ))}

 

  


            </div>   
            <Footer/>     
        </div>
    );
}

export default RAs;