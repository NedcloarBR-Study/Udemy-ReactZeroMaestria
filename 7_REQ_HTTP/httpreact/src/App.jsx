import "./App.css";
import { useState, useEffect } from "react";

const url = "http://localhost:3333/products";

function App() {
  const [products, setProducts] = useState([]);

  // 1 - resgatando dados
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
