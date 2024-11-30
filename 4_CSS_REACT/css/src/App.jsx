import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const n = 15;
  const [name, setName] = useState("Miguel");

  const redTitle = false

  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de Componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      {/* Inline CSS */}
      <p style={{
        color: "blue",
        padding: "25px",
        borderTop: "2px solid red"
      }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2>
      <h2 style={name === "Miguel" ? ({ color: "green", backgroundColor: "black" }) : null}>Teste nome</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
    </>
  )
}

export default App
