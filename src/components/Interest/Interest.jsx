import React from 'react';
import "./Interest.scss";
import getData from '../../utils/getData';

const Interest = () => {

    const [ interest, setInterest ] = React.useState([]);

    React.useEffect(() => {
        getData("http://localhost:3000/data").then(res => setInterest(res.interest));
    }, [])

    return (
        <section className="Interest">
            <h2 className='Interest-title'>Interests</h2>
            <ul>
                { interest.length > 0 ? 
                
                    interest.map(int => <li key={int} className="Interest-item"><strong>{int}</strong></li>) : 
                    
                    <React.Fragment>
                        <li className="Interest-item"></li>
                        <li className="Interest-item"></li>
                        <li className="Interest-item"></li>
                    </React.Fragment> 
                    
                }
            </ul>
        </section>
    );
}

export default Interest;