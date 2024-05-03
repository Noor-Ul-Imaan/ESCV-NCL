import React from 'react';
import '../../App.css';
import './About.css';
import aboutbg from '../../images/about-bg.jpg';
import Footer from '../Footer';


function About () {
    return (
        <>
            <img src={aboutbg} className='about-bg'></img>

            <div className='about-page'>
                <h1>ABOUT ESCV RESEARCH LAB</h1>
                <hr></hr>
                <p>The Embedded Systems and Computer Vision (ESCV) Lab is a dedicated space for technological exploration and innovation with a profound impact on society. Our diverse projects include transformative initiatives in healthcare, the digitization of low-resource and endangered languages, and the development of technology for the visually impaired. Beyond these societal contributions, we have established a comprehensive ecosystem of research and innovation, fostering a dynamic team comprising PhD scholars, master's students, research assistants, and undergraduate research interns, thereby prioritizing capacity building.

    Situated at the NED University of Engineering & Technology, Karachi, the ESCV Lab is at the forefront of research in embedded systems, computer vision, and Industrial Internet of Things (IIoT). Dr. Majida Kazmi, an Associate Professor in the Computer Information Systems (CIS) department at NEDUET, leads the research group of ESCVs. The overarching mission of the ESCV Lab is to propel advancements in embedded systems and computer vision research, ultimately aiming to contribute positively to the world. We are currently involved in multiple innovative projects, collaboratively working with industries and sectoral partners. Our researchers collaborate across disciplines, emphasizing both theoretical development and the practical application of solutions to real-world problems. Welcome to the forefront of embedded systems and computer vision research, where we strive to redefine the possibilities and make significant strides towards a better future.</p>
                <h1>OUR VISION</h1>
                <hr></hr>

                <p>At ESCV Lab, our vision transcends conventional research boundaries. We aspire to lead in the development of embedded systems and computer vision solutions that not only enhance automation, intelligence, and decision-making but also revolutionize a wide range of applications. Our aim is to gain global recognition for innovative research and practical contributions to these evolving fields.
    In the world of embedded systems, we see a future where automation becomes an integral part of daily life, simplifying tasks and enhancing efficiency. We envision a landscape where smart transportation systems reduce traffic congestion, emissions, and accidents. Homes are equipped with intelligent systems that adapt to occupants' needs, creating comfortable and sustainable living environments.
    In the domain of computer vision, our vision includes machines with a deep understanding of the visual world. This understanding revolutionizes healthcare, providing accurate and personalized medical diagnoses. In the realm of security, our vision extends to proactive surveillance systems that prevent incidents before they occur.
    Our commitment is to be globally recognized for our innovative research, shaping the future of technology in a way that has a real-world impact. We're driven by a vision that embraces reimagined transportation, improved healthcare, and a safer and more efficient world.</p>
                <h1>PROJECT AREAS</h1>
                <ul className='project-areas-list'>
                    <li>#Speech Cloning</li>
                    <li>#Sport Analytics</li>
                    <li>#Technology for Blind and Deaf</li>
                    <li>#Edge Computig</li>
                    <li>#Predictive Maintenance</li>
                    <li>#Smart Cities</li>
                    <li>#Local Language Digitization</li>
                    <li>#Health Care</li>
                    <li>#Industrial Inspection</li>
                </ul>
            </div>

            <Footer/>
        </>
    );
}

export default About;