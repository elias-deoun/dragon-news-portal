import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../FindUs/FindUs';
import QZone from '../QZone/QZone';

const RightAside = () => {
  return (
    <div className='space-y-7'>
      <SocialLogin/>
      <FindUs/>
      <QZone/>
    </div>
  );
};

export default RightAside;