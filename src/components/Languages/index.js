import React from 'react'

function Languages(props) {
    console.log(props.languages);
    let guages= !props.languages ? '' : Object.values(props.languages).map((language, index) => {
        return <div className='Languages-item'>
            {language.name}
        </div>
    })
  return (
    <div className='Languages card'>
        <h1 className='Languages-title'>Languages</h1>
            <li className='Languages-item'>{props.languages ? Object.values(props.languages)[0].name : ''}</li>
            <li className='Languages-item'>{props.languages ? Object.values(props.languages)[1].name : ''}</li>
            <li className='Languages-item'>{props.languages ? Object.values(props.languages)[2].name : ''}</li>
            <li className='Languages-item'>{props.languages ? Object.values(props.languages)[3].name : ''}</li>
            {/* {!props.languages ? '' : Object.values(props.languages).map((language, index) => {
            return <li className='Languages-item'>
                {language.name}
            </li>
            })} */}
    </div>
  )
}

export default Languages