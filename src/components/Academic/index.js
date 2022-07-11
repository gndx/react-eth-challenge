import React from 'react'

function Academic(props) {
  return (
    <div className='Academic card'>
        <h1 className='Academic-title'>Academic</h1>
            {/* <h1>{props.xp1 == 0 ? "hi" : props.xp1.company}</h1> */}
            {/* <h1>{!props.xp[0] ? props.xp[0].endDate : "hi"}</h1> */}
            {/* <h1>{items[0] ? items[0].startDate : "hi"}</h1> */}
            
              <h4 className='Academic-item'>{props.academic ? Object.values(props.academic)[0].degree : 'hi'}, {props.academic ? Object.values(props.academic)[0].startDate : 'hi'} - {props.academic ? Object.values(props.academic)[0].endDate : 'hi'}</h4>      
            
            
              <h4 className='Academic-item'>{props.academic ? Object.values(props.academic)[0].degree : 'hi'}, {props.academic ? Object.values(props.academic)[0].startDate : 'hi'} - {props.academic ? Object.values(props.academic)[0].endDate : 'hi'}</h4>      
            
            
              <h4 className='Academic-item'>{props.academic ? Object.values(props.academic)[0].degree : 'hi'}, {props.academic ? Object.values(props.academic)[0].startDate : 'hi'} - {props.academic ? Object.values(props.academic)[0].endDate : 'hi'}</h4>      
            
            {/* <span className='Academic-item'>
              <h4>{props.xp ? Object.values(props.xp)[1].company : 'hi'}, {props.xp ? Object.values(props.xp)[1].startDate : 'hi'} - {props.xp ? Object.values(props.xp)[1].endDate : 'hi'}</h4>      
            
            <span className='Academic-item'>
              <h4>{props.xp ? Object.values(props.xp)[1].company : 'hi'}, {props.xp ? Object.values(props.xp)[1].startDate : 'hi'} - {props.xp ? Object.values(props.xp)[1].endDate : 'hi'}</h4>      
             */}

              {/* {!props.xp[0] ? <span className='Academic-item'>not working : props.xp.map((item, index) => {
                    <span key={index} className='Academic-item'>hi
              })} */}
    </div>
  )
}

export default Academic