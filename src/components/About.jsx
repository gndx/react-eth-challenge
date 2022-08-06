import {AiFillPhone, AiOutlineLink} from 'react-icons/ai';
import {MdMail, MdLocationPin} from 'react-icons/md';
import { useDataContext } from '../context/DataContext';
import React from 'react';

function About() {
  const { data } = useDataContext()

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

export default About;