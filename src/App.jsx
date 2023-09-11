
import { useState } from 'react'
import './App.css'
import FormaddMoney from './components/FormaddMoney'
import Header from './components/Header'
import MainControl from './components/MainControl';

function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const component = isValid
            ?<MainControl count={count} />
            :<FormaddMoney setCount={setCount} setIsValid={setIsValid} />




  return (
    <div className='App'>
      <Header />
      {component}
    </div>


  )
}

export default App
