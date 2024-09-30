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
    </div>
  )
}

export default Events;