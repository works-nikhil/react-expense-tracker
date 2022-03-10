import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)


  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
    },
    {
        "id": 2,
         "text": "Meeting at School",
         "day": "Feb 6th at 1:30pm",
         "reminder": true
    },
    {
      "id": 3,
       "text": "Meeting at the Club",
       "day": "Feb 8th at 2:30pm",
       "reminder": false
  }
])


// Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000)+1 //generating a random number
  console.log(id)
  const newTask = { id, ...task } // storing new task in the object 'task' along with a random id
  setTasks([ ...tasks, newTask ]) // changing the state and storing the new task (state) in the 'task' object


}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder that changes boolean value of the task.reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) =>
    task.id === id ?
      { ...task, reminder:!task.reminder } 
        : task) )
}



// will check if it's true and won't check/return anything if false 
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} /> }    
      { tasks.length > 0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
         : ('No Tasks to Show') }  


    </div>
  )
}


export default App;
