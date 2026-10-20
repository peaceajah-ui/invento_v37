import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const Create = () => {
  const { setProducts } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();
    const parsedQty = Number(qty);

    if (!trimmedName || !Number.isFinite(parsedQty) || parsedQty <= 0) {
      alert("Please enter a product name and a valid quantity greater than zero.");
      return;
    }

    setProducts((currentProducts) => [
      ...currentProducts,
      { id: Date.now(), name: trimmedName, qty: parsedQty },
    ]);
    setName("");
    setQty("");
  }

  return (
    <section className="content-card create-section">
      <h1>Add Product</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          min="1"
          placeholder="quantity"
          value={qty}
          onChange={(event) => setQty(event.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
    </section>
  );
};

export default Create;