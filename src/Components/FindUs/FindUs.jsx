import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h1 className='font-bold my-5'>Find Us on</h1>
     <div>
       <div className="join join-vertical gap-5 w-full">
        <button className="btn bg-base-200 justify-start join-item "><FaFacebook size={20}/> Facebook</button>
        <button className="btn bg-base-200 justify-start join-item"><FaTwitter size={20}/> Twitter</button>
        <button className="btn bg-base-200 justify-start join-item"> <FaInstagram size={20}/> Instagram</button>
      </div>
     </div>
    </div>
  );
};

export default FindUs;