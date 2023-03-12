import React from 'react'
import "./social.css"

// Icons 
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';

const Socal = () => {
  return (
    <>
        <div className="social flex align-center">
            <ul className='flex align-center'>
                <li><a href="/"><FaFacebookF /></a></li>
                <li><a href="/"><AiFillYoutube /></a></li>
                <li><a href="/"><AiOutlineTwitter /></a></li>
                <li><a href="/"><FaInstagram /></a></li>
                <li><a href="/"><FaLinkedinIn /></a></li>
            </ul>
        </div>
    </>
  )
}

export default Socal