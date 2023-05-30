import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const About = () =>
{
    return(
        <>

        <h1 className='text-6xl mb-4'>Github Finder</h1>
     <p className='mb-4 text-2xl font-light'>
       A React app to search GitHub profiles and see profile details.</p>
     <p className='text-lg text-gray-400'>
       Developed By:{' '}
       <a className='text-white' href='https://www.linkedin.com/in/ayush-chandel-720a861b1/'>
         Ayush Chandel
       </a>
       <div>
       <FaInstagram className="inline"/>
       {":  "}
       <a className='text-white' href='https://www.instagram.com/ash__1.0/'>
         ash__1.0
       </a>  
       </div>
       <div>
           <FaLinkedin className="inline"></FaLinkedin>
           {":  "}
       <a className='text-white' href='https://www.linkedin.com/in/ayush-chandel-720a861b1/'>
         Ayush Chandel
       </a>  
       </div>
       
     </p>
       </>
    )
}

export default About;