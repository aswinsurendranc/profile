import React from 'react'
import './home.css';
import SocialFollow from './SocialFollow';
 let home=()=> {
    return (
        <div className='home' id="home">
            <div className='homeDescription'>
                <div className='name'>
                      <h1>iam aswin</h1>
                </div>
                <div className='description'>
                        <p>iam a freelance Software Develpoer and Tech Broading Ops ,I specialize in web ,standalone, app<br />
                          desingning and front end development  </p>
                </div>
               
            </div>
            <div className='homeSocialMedia'>
                <SocialFollow />

            </div>
            
        </div>
    )
}
export default home;