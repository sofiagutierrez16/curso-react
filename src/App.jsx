import { useState } from 'react'
import './App.css'
import { Logos } from './components/Logos'
import { AddTask } from './components/AddTask'
import { ShowTask } from './components/ShowTask'

function App() {
  const [tasks, setTasks] = useState([])

  const addTasks = (newTask)=>{
    let object = {
      task: newTask,
      status: false
    }
    setTasks([...tasks,object])
  }

  const changeStatus = (index)=>{
    tasks[index].status = !tasks[index].status
    setTasks([...tasks])
  }

  const removeTask = (index)=>{
    tasks.splice(index,1)
    setTasks([...tasks])
  }

  return (
    <>
      <Logos title={"Administrador de Tareas"}/>
      <AddTask addTasks={addTasks}/>
      <ShowTask tasks={tasks} changeStatus={changeStatus} removeTask={removeTask}/>
      </>
  )
}

export default App
