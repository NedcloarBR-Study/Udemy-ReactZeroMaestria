import { useState } from 'react'
import './App.css'
import City from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  const name = "Miguel";
  const [username, setUsername] = useState(name);
  const cars = [
    { id: 1, brand: "Ferrari", km: 0, color: "Amarela", newCar: true },
    { id: 2, brand: "Kia", km: 34343, color: "Branca", newCar: false },
    { id: 3, brand: "Renault", km: 234, color: "Azul", newCar: false }
  ]

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (message) => {
    setMessage(message)
  }

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
      <CarDetails brand="VW" km={1000} color="Azul" newCar={false} />
      {/* Reaproveitamento */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branca" newCar={false} />
      {/* loop em array de carros */}
      {cars.map(car => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      ))}
      { /* Fragment */}
      <Fragment propFragment="teste" />
      { /* Children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing2">
        <h5>Testando o container</h5>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lift */}
      <Message message={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </>
  )
}

export default App
