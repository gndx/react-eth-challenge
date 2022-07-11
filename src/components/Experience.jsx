import React from 'react';

const Experience = ({data={}}) => {

    // console.log(data.experience.toArray());

    return (
        <div className="Experience-container container">
            <div className="row">
                <h2 className="Experience-title">Experience</h2>
                <div className="row">
                    <div className="col-4">
                        {/* <p>{data.experience[0].company}</p> */}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Experience;