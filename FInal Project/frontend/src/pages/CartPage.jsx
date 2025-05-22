import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cart, addToCart, removeFromCart, removeAllFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const getSubtotal = (item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return (price * item.quantity).toFixed(2);
  };

  const getTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + item.quantity * price;
      }, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      alert("Please log in to proceed to checkout.");
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cart.map((item) => (
              <div key={item.product_id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={item.image}
                    alt={item.product_name}
                    className="card-img-top"
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "contain",
                      padding: "10px",
                      backgroundColor: "#fff"
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.product_name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="fw-bold mb-2">
                      {item.price} × {item.quantity} = ${getSubtotal(item)}
                    </p>
                    <div className="btn-group mb-2" role="group">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => removeFromCart(item.product_id)}
                      >
                        −
                      </button>
                      <span className="btn btn-light" disabled>{item.quantity}</span>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeAllFromCart(item.product_id)}
                    >
                      Remove All
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Checkout */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: ${getTotal()}</h4>
            <button
              className="btn btn-success btn-lg"
              onClick={handleCheckout}
            >
              Go to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
