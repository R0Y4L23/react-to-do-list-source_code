import React,{useState} from 'react'
import './Show_task.css'

const Show_task = ({showIt,delH,appH}) => {

    //console.log("st",showIt);
    //const [array,setarray]=useState(showIt);
    //console.log("ar",array);
    
    

    return (
        <div>
           {showIt.map((item,index)=>{return ( <div key={index} onDoubleClick={()=>{appH(item.task)}} className={`${item.c} mar`}><h1>Task: {item.task}</h1><h3>Date: {item.date}</h3> <button onClick={()=>{delH(item.task)}}>Remove</button>   </div>   )})}
        </div>
        
    )
}

export default Show_task
