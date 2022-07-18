import React from 'react';

const About = (props) => {
  return (
    <>
      <h3 className='About-title'>{props.Profession}</h3>
		<div>
			<div className='About-item'>
				{props.Phone} |
			</div>
			<div className='About-item'>
				{ props.Email } |
			</div>
			<div className='About-item'>
				{ props.Website } |
			</div>
			<div className='About-item'>
				{ props.Address } |
			</div>
		</div>
    </>
  );
};

export default About;