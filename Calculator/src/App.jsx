import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
  const [calVal, setCalVal] = useState('')
  const onButtonClick = (buttonName) => { 
    if (buttonName === 'C') {
      setCalVal('')
    } else if (buttonName === '=') {
      const result = eval(calVal)
      setCalVal(result)
    } else {
      const newValue = calVal + buttonName
      setCalVal(newValue)
    }
  }
  return (

    <div className='calculator'>
      <Display displayVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  )
}

export default App
