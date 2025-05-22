import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Toast from "react-bootstrap/Toast";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const itemTitle = encodeURIComponent(product.product_name);

  return (
    <>
      <div className="col-md-4 mb-4 d-flex">
        <div className="card flex-fill d-flex flex-column shadow-sm">
          <div
            style={{
              height: "300px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff"
            }}
          >
            <img
              src={product.image}
              alt={product.product_name}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain"
              }}
            />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.product_name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="fw-bold">{product.price}</p>

            {}
            <div className="d-flex justify-content-between mb-2">
              <a
                href={`/view-reviews.html?item=${itemTitle}`}
                className="btn btn-outline-secondary btn-sm"
              >
                View Reviews
              </a>
              <a
                href={`/write-review.html?item=${itemTitle}`}
                className="btn btn-outline-primary btn-sm"
              >
                Write Review
              </a>
            </div>

            <button className="btn btn-primary mt-auto" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#198754",
          color: "white",
          zIndex: 9999
        }}
      >
        <Toast.Body> {product.product_name} added to cart!</Toast.Body>
      </Toast>
    </>
  );
}
