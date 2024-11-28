import './App.css'
import City from "./assets/city.jpg"
import ManageData from './components/ManageData'

function App() {
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
    </>
  )
}

export default App
