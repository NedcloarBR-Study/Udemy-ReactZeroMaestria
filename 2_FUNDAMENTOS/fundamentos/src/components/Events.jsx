function Events() {
  const handleMyClick = (e) => {
    console.log(e);
    console.log("Ativou o evento!");
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
    </div>
  )
}

export default Events;