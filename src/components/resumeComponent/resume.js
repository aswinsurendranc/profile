import React from 'react';
import './resume.css';
let resume=()=> {
    return (
        <div className='resume' id='resume'>
          <div className='education'>
                <div className='educationLeft'>
                    <h2>EDUCATION</h2>
                </div>
                <div className='educationRight'>
                  <div>
                    <h4>COLLEGE OF ENGINEERING THALASSERY</h4>
                  </div>
                    <div>
                    <p>
                        Diploma In Computer Science - 2017
                        Under the recommendation and Guidance 
                        of my Principal Here I took my Diploma 
                        In Computer Science, I first 2 years 
                        completed in Telichery centre and Final 
                        year in Bangalore with a software Engineering 
                        Speciality and achieved a much more thorough 
                        education in the underlying theory, concepts and 
                        science behind more programming. It was here I 
                        discovered my passion for scalable application 
                        programming (Web, Desktop and Mobile)
                        </p>
                    </div> 
                       
                       
                  
                </div>
          </div>
          {/* <div className='work'>
                <div className='workLeft'>
                    <h2>WORK</h2>
                </div>
                <div  className='workRight'>
                   <div>
                        <h2></h2>
                        <p></p>
                   </div>
                   <div>
                       
                    </div>
                </div>

          </div> */}
          <div className='skills'>
              <div className='skillLeft'>
                  <h2>SKILLS</h2>
              </div>
              <div className='skillRight'>
                <h6>HTML</h6>
                <div className="container">
                    <div className="skills html">90%</div>
                </div>
                <h6>CSS</h6>
                <div className="container">
                    <div className="skills css">80%</div>
                </div>
                <h6>JAVASCRIPT</h6>
                <div className="container">
                    <div className="skills js">65%</div>
                </div>
                <h6>PHP</h6>
                <div className="container">
                    <div className="skills php">60%</div>
                </div>
              </div>
            

          </div>
        </div>
         

       
    )
}
export default resume;