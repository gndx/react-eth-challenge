import {AiFillPhone, AiOutlineLink} from 'react-icons/ai';
import {MdMail, MdLocationPin} from 'react-icons/md';
import React from 'react';

function About({data}) {
 
  if(data){
    return (
      <div className='d-flex' style={{'marginTop': '10px'}}>
        <h1 className='About-title'></h1>
        <p className='About-item'><AiFillPhone className='m-5'/>{data.data?.phone}</p>
        <p className='About-item'><MdMail className='m-5'/>{data.data?.email}</p>
        <a href={data.data?.website} className='About-item'><AiOutlineLink className='m-5'/>{data.data?.website}</a>
        <p className='About-item'><MdLocationPin className='m-5'/>{data.data?.address}</p>
      </div>
    )
  }

  return (
    <div className='d-flex' style={{'marginTop': '10px'}}>
        <h1 className='About-title'></h1>
        <p className='About-item'><AiFillPhone className='m-5'/></p>
        <p className='About-item'><MdMail className='m-5'/></p>
        <a href='#' className='About-item'><AiOutlineLink className='m-5'/></a>
        <p className='About-item'><MdLocationPin className='m-5'/></p>
      </div>
  )
  
}

export default About;