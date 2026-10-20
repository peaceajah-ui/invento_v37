import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Products = () => {
  const { products = [], setProducts } = useContext(ProductContext);

  function handleDelete(id) {
    setProducts((currentProducts) => currentProducts.filter((prod) => prod.id !== id));
  }

  return (
    <section className="content-card inventory-section">
      <h1>Product Inventory</h1>
      <div className="table-scroll">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 &&
              products.map((pro, index) => (
                <tr key={pro.id}>
                  <td>{index + 1}</td>
                  <td>{pro.name}</td>
                  <td>{pro.qty}</td>
                  <td>
                    <button className="delete-button" onClick={() => handleDelete(pro.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Products;