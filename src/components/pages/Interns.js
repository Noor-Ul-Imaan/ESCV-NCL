import React from 'react';
import CapacityBuilding from './CapacityBuilding';
import Footer from '../Footer';
import './Interns.css';
import Capacity from '../Pages-Data/Capacity';

function Interns () {
    return (
        <div className='interns-page'>
            <CapacityBuilding/>

            <div className='interns'>
                <Capacity/>            
            </div> 

            <Footer/>
       
        </div>
    );
}

export default Interns;