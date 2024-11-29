import { useState } from 'react'
import './App.css'
import City from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {
  const name = "Miguel";
  const [username, setUsername] = useState(name);

  return (
    <>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em src */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name={username} />
      {/* Destructuring */}
      <CarDetails brand="VW" km={1000} color="Azul" />
    </>
  )
}

export default App
