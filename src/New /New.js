import React from 'react'
import './New.css'
import UploadForm from './uploadImage'
function New() {
    return (      
           
                <div className="container">
        <div className="left">
            <div className="right__logo">
                <i className  ="fab fa-wordpress"></i>
            </div>
            <div className="sidebar">
               
                <a >
                    <i className  ="fas fa-user"> </i>
                    
               Student   </a>
                <a className  ="active">
                        <i className  ="fas fa-tasks"></i>
                   Lesson Plan   
                </a>
                <a >
                        <i className  ="fas fa-cog"></i>
                    Settings     
                </a>
              </div>
        </div>
        <div className="right">
        <div className="rightTop">

        </div>
            <div className="task__main">
            <h4 style={{fontSize:"25px"}}> <i className  ="fas fa-caret-left"></i>Videos</h4>

            <form>
                    <input type="text" className  ="task__input" placeholder="Insert URL here" />
                       <span>or</span>
                        <UploadForm />
            </form>             
            </div>
            
              </div>
        </div>
        
    )
}

export default New
