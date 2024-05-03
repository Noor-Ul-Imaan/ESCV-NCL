import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Team.css";
import "./Collaborations.css";
import { useContentfulData } from "../CMS/contentful";


function Team() {
  const teamData = useContentfulData('teamPage');

  return (
    <>
      <div className="heading">
        <h1>Core Team</h1>
      </div>

      <div className="TeamContainer">
      {teamData && teamData.length > 0 && teamData.map((post) => (
        <section className="post MemberBox" key={post.sys.id}>
          <div className="LeftSide">
            <div className="Circle">
              <img src={post && post.fields.image.fields.file.url} alt={post && post.fields.name} />
            </div>
          </div>

          <div className="RightSide">
            <h2>{post && post.fields.name}</h2>
            <p>{post && post.fields.details}</p>
            <div className="ContactIcons">
              <div className="ContactInfo">
                <div>
                  <FaPhone size={15}/>
                </div>
                <div>{post && post.fields.contact}</div>
              </div>
              <div className="ContactInfo">
                <div>
                  <FaEnvelope size={15}/>
                </div>
                <div>{post && post.fields.email}</div>
              </div>
              <div className="ContactInfo">
                <div>
                  <FaLinkedin size={16}/>
                </div>
                <div>{post && post.fields.linkedin}</div>
              </div>
              {/* Add other contact information here if available */}
            </div>
          </div>
        </section>

 
      ))}


        
      </div>
      <Footer />
    </>
  );
}

export default Team;

