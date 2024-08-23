import { useState } from 'react'
import Header from './componentes/header'
import Adder from './componentes/Adder'
import './App.css'

function App() {
  const [newPerson, SetNewPerson] = useState()
  return (
    <>
      <Header></Header>
      <Adder send={SetNewPerson}></Adder>
    </>
  )
}

export default App
