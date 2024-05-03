import React from 'react';
import './CapacityBuilding';
import CapacityBuilding from './CapacityBuilding';
import Footer from '../Footer';
import './Fydp.css';
import Fydp2022 from './fydp2022home';

function Fydp () {
    return (
        <div className='fydp-page'>
            <CapacityBuilding/>
            <div className='Fydp'>
                {/* <h1>FYDP</h1>    */}
                <Fydp2022/>
            </div>  
            <Footer/>      
        </div>
    );
}

export default Fydp;