import React from 'react';
import './Mycard.css';

const Mycard = (props) => {
  const { cardno, carddetail, backgroundImage } = props;

  return (
    <div className='cary'>
    <div className='main' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='mycard'>{cardno}</div>
      <div className='my'>{carddetail}</div>
    </div>
    </div>
  );
};

export default Mycard;
