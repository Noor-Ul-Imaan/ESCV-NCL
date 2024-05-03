import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import '../../App.css';
import './Publications.css';
import Footer from '../Footer';
import { useContentfulData } from "../CMS/contentful";

function Publications () {
    const publicationsData = useContentfulData('publications');
    const [records, setRecords] = useState([]);
  
    useEffect(() => {
      // Set initial records when data is fetched
      setRecords(publicationsData);
    }, [publicationsData]);
  
    const filter = (e) => {
      const searchValue = e.target.value;
      const filteredRecords = publicationsData.filter(item => item.fields.year.toString().includes(searchValue));
      setRecords(filteredRecords); // Update records with filtered data
    };
    return (
        <>
            <div className='publications'>
                <h1>Publications</h1>   
            </div> 
            <div className="w-full  flex justify-end mt-10">
        <input
          type="number"
          placeholder="Search Year"
          onChange={filter}
          className="border-2 border-black mr:5 w-52 sm:mr-5 lg:mr-8 p-3"
        />
      </div>
      <div className="mx-auto mt-10 w-[90%] overflow-x-auto">
        {records.length > 0 ? (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase text-center bg-gray-50 dark:bg-white-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 font-bold text-xl">Title</th>
                <th scope="col" className="px-6 py-3 font-bold text-xl">Links</th>
                <th scope="col" className="px-6 py-3 font-bold text-xl">Year</th>
              </tr>
            </thead>
            <tbody>
              {records.map((post) => (
                <tr key={post.sys.id} className="bg-white mt-10 border-2 sm:text-left dark:bg-white-300 dark:border-white-400">
                  <td className="px-6 py-4 text-md text-black">{post.fields.title}</td>
                  <td className="px-6 py-4 text-md text-black">
                    <a href="#" className="ml-5 h-2 underline">
                      <Link to={post.fields.links}> View</Link>   
                    </a>                  
                  </td>
                  <td className="px-6 py-4 text-md text-black">{post.fields.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-lg text-center mt-4">No matching records found.</p>
        )}
      </div>
            <Footer/>       
        </>
    );
}

export default Publications;