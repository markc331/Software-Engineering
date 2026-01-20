import React, { useState, useEffect } from 'react';
import Todos from '../Components/ToDos';
import Tasks from '../Components/Tasks'
import Calendar from '../Components/Calendar'
import './Task.css';
import Sidebar from '../../UserInfoView/Sidebar';



const TaskPage = () => {
    const [taskItems, setTaskItems] = useState([]);
    
  
    useEffect(()=>{
        const taskStorage = JSON.parse(sessionStorage.getItem("taskObject")) || [];
      //debugger
        //taskStorage.completed = setCompleted(false);
        setTaskItems(taskStorage);
        
  
    }, [])
    return (
        <section class="main">
            <section class="sidebar" id="sidebar">
                <Sidebar />
            </section>
            <section class="todos" id="todosSection">
                <header>
                    <div id= "headerContainer">
                        ToDos for Today
                    </div>
                </header>
                <section id= "checklist">
                    <Todos taskItems={taskItems}
                           setTaskItems = {setTaskItems}
                           />
                    <Tasks taskItems={taskItems}
                           setTaskItems = {setTaskItems}
                           />
                    
                </section>
            </section>
            <section class="Calendar" id="Calendar">
                <header>
                    <div id= "calendarContainer">
                        Calendar
                    </div>
                </header>
                <section id= "calendarComponent">
                    <Calendar />
                </section>
            </section>  
        </section>
    );
};


export default TaskPage; 