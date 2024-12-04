import "./App.css";
import { useState } from "react";

// 4 - hook personalizado
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3333/products";

function App() {
  // const [products, setProducts] = useState([]);

  // 4 - hook personalizado
  const { data: items, httpConfig, loading } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // 2 - adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price };
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - carregamento dinâmico
    // const addedProduct = await res.json();
    // setProducts((prev) => [...prev, addedProduct]);

    // 5 - refatorando post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <>
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {!loading && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
              </li>
            ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={name}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - loading no post */}
          {loading && <input type="submit" value="Aguarde" disabled />}
          {!loading && <input type="submit" value="Enviar" />}
        </form>
      </div>
    </>
  );
}

export default App;
