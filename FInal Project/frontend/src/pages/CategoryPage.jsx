import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/products";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      const categoryProducts = data.filter((p) => p.category === category);
      setAllProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
    });
  }, [category]);

  useEffect(() => {
    const query = search.toLowerCase();
    const matched = allProducts.filter(
      (p) =>
        p.product_name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    setFilteredProducts(matched);
  }, [search, allProducts]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-capitalize">{category} Products</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))
        ) : (
          <p>No matching products found.</p>
        )}
      </div>
    </div>
  );
}
