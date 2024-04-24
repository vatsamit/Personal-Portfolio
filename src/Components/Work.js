import './Workcart.css'; 
import React from 'react'

import Workcart from './Workcart';
import Workcartdata from './Workcartdata'

const Work = () => {
  return (
    <div className='work-container'>
    <h1 className='project-heading'>Projects</h1>
    <div className='project-container'>
    {Workcartdata.map((val , ind)=>{
        return(
          <Workcart
          key= {ind}
          imgsrc = {val.imgsrc}
          title = {val.title}
          text = {val.text}
          view = {val.view}
          source={val.source}
        
        
          />  
        )
    })}
    </div>
    </div>

  )
}

export default Work 