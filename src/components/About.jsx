import React from 'react'

const About = (props) => {
  return (
    <div>
        <h1>About</h1>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export { About }