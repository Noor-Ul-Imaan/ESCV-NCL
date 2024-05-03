import React, {useState, useEffect} from 'react';
import '../../App.css';
import './Collaborations.css';  
import Footer from '../Footer';
import { useContentfulData } from "../CMS/contentful";


function Collaborations () {
    const collabData = useContentfulData('collaborations')
    return (
        <>
            <div className='heading'>
                <h1>Collaborations</h1>   
            </div>
            
            {collabData && collabData.length > 0 && collabData.map((post) => (

            <div className='collaborators' key={post.sys.id}>
                <h2>{post.fields.collaborationType}</h2>
                <hr></hr>
                <img src={post.fields.collaboratorsLogo.fields.file.url} className='collab0'></img>                    
                



            </div>
            ))}
            <Footer/>

        </>
    );
}

export default Collaborations;