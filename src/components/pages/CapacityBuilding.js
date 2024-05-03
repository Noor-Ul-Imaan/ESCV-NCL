import React, { useState } from 'react';
import '../../App.css';
import './CapacityBuilding.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Dropdown2 from '../Dropdown2';

function CapacityBuilding() {
  const [dropdownHovered, setDropdownHovered] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      setDropdownHovered(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setDropdownHovered(false);
    }
  };

  const toggleDropdown = () => {
    if (window.innerWidth < 960) {
      setDropdownClicked(!dropdownClicked);
    }
  };

  return (
    <>
      <div className='capacity-building'>
        <h1>Capacity Building</h1>
        <ul className='capacity-building-list'>
          <li>
            <Link to='/phd' className='capacity-building-links phd-link'>
              PHD
            </Link>
          </li>
          <li>
            <Link to='/masters' className='capacity-building-links masters-link'>
              Masters
            </Link>
          </li>
          <li>
            <Link to='/ras' className='capacity-building-links ras-link'>
              RAs
            </Link>
          </li>
          <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <li>
              <Link
                to='/fydp-2023'
                className='capacity-building-links fydp-link'
                onClick={toggleDropdown}
              >
                FYDP<i className='fas fa-caret-down' />
              </Link>
              {(dropdownHovered || dropdownClicked) && <Dropdown2 />}
            </li>
          </div>
          <li>
            <Link to='/interns' className='capacity-building-links interns-link'>
              Interns
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CapacityBuilding;
