import React, { useContext } from 'react'
import { DataContext } from '../containers/App'

const About = () => {

    const data = useContext(DataContext)

    return (
        <>
            <div className='Header-row-info About-title'>
                
                <span className='Header-phone About-item'><b>Phone</b>: {data?.phone}</span>
                <span className='Header-email About-item'><b>Email:</b> {data?.email}</span>
                <span className='Header-website About-item'><b>WebSite:</b> <a href={data?.website || '#'}>{data?.website}</a></span>
            </div>
            <p className='Header-address .About-item'><b>Adress:</b> {data?.address}</p>
            {
                    data ? data.social.map(item => (
                        <div className='' key={item.name}>
                            <a className='' href={item.url || '#'}>{item?.name}</a>
                        </div>)
                    )
                        :
                        [1, 2].map(item => <div className='' key={item}>loading ...</div>)
                }
        </>
    )
}

export default About