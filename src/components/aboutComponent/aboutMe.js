import React from 'react';
import Photo from '../../assets/images/photo.jpg';
import './aboutMe.css';
 let AboutMe=() =>{
    return (
        <div className='about' id='about'>
            <div className='aboutPhoto'>
                            <img src={Photo} alt="profile_pic"/>
            </div>
            <div className='aboutBiodata'>
                    <div className='aboutUpper'>
                        <h1>About Me</h1>
                        <p >I am a Diploma In Computer Science Graduated Candidate. Having returned from my year of travelling. I pursued my first job to kick off my career. I was hired as a Tech and Broadcasting Ops by Amagi. before beginning my career there, I have completed CCNA Routing and Switching. while I am working there I used to code in python and java because these languages are used to automated everything and also I have chosen the Java in last year with a knack for development and passion for coding, so I thought to move to the next level in programming, I left the job from my previous company and I was joined in Astra as a full-stack developer. In this company, meanwhile, I learned Spring boot, Kotlin, Spring-Boot FXML application and microframework</p>
                    </div>
                    <div className='aboutLower'>
                        <div className='aboutLowerLeft'>
                                <h4><strong>Contact Details</strong></h4>
                                <h6>Anandam</h6>
                                <h6>(PO)Nirmalagiri</h6>
                                <h6>Kuthuparamba,Kannur</h6>
                                <h6>pin:670701</h6>
                                <h6>7558921422</h6>
                                <h6>aswinsurendranc999@gamil.com</h6>

                        </div>
                        <div className='aboutLowerRight'>
                            <button className='aboutLowerRightButton'><a href='https://drive.google.com/thumbnail?id=1n63_H48Wam9CsYISOwolr8AmeEmhLXtU'>Download</a> </button>
                        </div>
                       
                        
                    </div>

            </div>

        </div>
    )
}
export default AboutMe;