import { useState } from 'react'
import './App.css'
import { Logos } from './components/Logos'
import { AddTask } from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([])

  const addTasks = (newTask)=>{
    setTasks([...tasks,newTask])
    console.log (tasks)
  }

  return (
    <>
      <Logos title={"Nuevo titulo"}/>

      <AddTask addTasks={addTasks}/>
    </>
  )
}

export default App
