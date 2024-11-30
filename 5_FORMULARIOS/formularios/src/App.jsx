import MyForm from '../components/MyForm'
import './App.css'

function App() {
  return (
    <>
      <h2>Forms</h2>
      <MyForm user={{ name: "Miguel", email: "nedcloar1@hotmail.com", bio: "Sou um desenvolvedor", role: "admin" }}/>
    </>
  )
}

export default App
