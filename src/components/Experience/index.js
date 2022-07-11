import React, { useEffect, useState } from 'react'
import getData from '../../utils/getData'

function Experience(props) {




    // document.addEventspanstener("DOMContentLoaded", async () => {
    //     try {
    //       setData(await getData());
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   })



  return (
    <div className='Experience card'>
        <h1 className='Experience-title'>Experience</h1>
        <div className='Experience-item'>
          
        </div>
            {/* <h1>{props.xp1 == 0 ? "hi" : props.xp1.company}</h1> */}
            {/* <h1>{!props.xp[0] ? props.xp[0].endDate : "hi"}</h1> */}
            {/* <h1>{items[0] ? items[0].startDate : "hi"}</h1> */}
            <span className='Experience-item'>
              <h4>{props.xp ? Object.values(props.xp)[0].company : 'hi'}, {props.xp ? Object.values(props.xp)[0].startDate : 'hi'} - {props.xp ? Object.values(props.xp)[0].endDate : 'hi'}</h4>      
            </span>
            <span className='Experience-item'>
              <h4>{props.xp ? Object.values(props.xp)[1].company : 'hi'}, {props.xp ? Object.values(props.xp)[1].startDate : 'hi'} - {props.xp ? Object.values(props.xp)[1].endDate : 'hi'}</h4>      
            </span>
            <span className='Experience-item'>
              <h4>{props.xp ? Object.values(props.xp)[1].company : 'hi'}, {props.xp ? Object.values(props.xp)[1].startDate : 'hi'} - {props.xp ? Object.values(props.xp)[1].endDate : 'hi'}</h4>      
            </span>

                {/* {!props.xp[0] ? <span className='Experience-item'>not working</span> : props.xp.map((item, index) => {
                     <span key={index} className='Experience-item'>hi</span>
                })} */}

    </div>
  )
}

export default Experience