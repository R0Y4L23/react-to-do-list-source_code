import React,{useState,useEffect} from 'react';
import Show1 from "./Show_task";


const Inputs = () => {

    const [task_in,setTask_in]=useState("Enter Task");
    const [date_in,setDate_in]=useState("Enter Date");
    const [tasks_to_show,setTasks_to_show]=useState([{task: 'Study',date: '15th jan',c: 'normal',},{task: 'Play',date: '17th jan',c: 'normal'}]); 
    const addTask=(e)=>{
        e.preventDefault();
        if((task_in==="Enter Task"||date_in==="Enter Date")||(task_in===""||date_in===""))
        {
            alert("Enter Task or Date!!");
            setTask_in("Enter Task");
        setDate_in("Enter Date");
        }
        else
        {
            let new_ob={task: task_in,date: date_in,c: 'normal',};
        let array=tasks_to_show;
        let s= array.length;
        array[s]=new_ob;
        setTasks_to_show(array);
        setTask_in("Enter Task");
        setDate_in("Enter Date");

        }
        
    }

    const delTask=(uid)=>{
        let array2=tasks_to_show.filter((item)=>{return !(item.task===uid)});
        setTasks_to_show(array2);
        //setTask_in("Enter");
        //setDate_in("Enter");
    }
    const appSty=(uid2)=>{
        let array3=tasks_to_show;
        for(let i=0;i<array3.length;i++)
        {
            if(array3[i].task===uid2)
            {
                if(array3[i].c==='normal')
                {
                array3[i].c='bor';
                }
                else
                {
                array3[i].c='normal';
                }
                break;
            }
        }
        setTasks_to_show(array3);
        setTask_in(".");
        setTimeout(function(){ setTask_in(task_in)}, 10);
        
    }

    return (
        <div>
            <form onSubmit={addTask}>
               <input type="text" onChange={(e)=>{setTask_in(e.target.value)}} value={task_in}/>
               <input type="text" onChange={(e)=>{setDate_in(e.target.value)}} value={date_in}/> 
               <button type="submit">Add task</button>
            </form>
            <Show1 showIt={tasks_to_show} delH={delTask} appH={appSty}/>
        </div>
    )
}

export default Inputs;
