function Events() {
  const handleMyClick = (e) => {
    console.log(e);
    console.log("Ativou o evento!");
  }

  const handleSomething = (x) => {
    if(!x) {
      return <h1>Renderizando isso!</h1>
    }

    return <h1>Também posso renderizar isso!</h1>
  }

  return (
    <div>
      <div>
        <button onClick={handleMyClick}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>Clique aqui também</button>
        <button onClick={() => {
          if(true) {
            console.log("HTML Complicado");
          }
        }}>Clica aqui, por favor.</button>
      </div>
      {handleSomething(true)}
      {handleSomething(false)}
    </div>
  )
}

export default Events;