import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { submitOrder } from "../api/checkout";

export default function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (!userEmail) {
      alert("You must be logged in to checkout.");
      navigate("/login");
    }
  }, [userEmail, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const isEmpty = Object.values(formData).some((v) => v.trim() === "");
    if (!userEmail || isEmpty) {
      alert("Please complete all fields.");
      return;
    }

    try {
      const res = await submitOrder({
        ...formData,
        email: userEmail, 
        items: cart,
      });
      alert(res.message);
      navigate("/"); 
    } catch (err) {
      alert(err.message || "Order submission failed.");
    }
  };

  const getSubtotal = (item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return (price * item.quantity).toFixed(2);
  };

  const getTotal = () =>
    cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + item.quantity * price;
      }, 0)
      .toFixed(2);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Checkout</h2>

      {}
      <div className="mb-4">
        <h5>Order Summary</h5>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.product_id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.product_name}</strong> × {item.quantity}
                </div>
                <span>${getSubtotal(item)}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <strong>Total</strong>
              <strong>${getTotal()}</strong>
            </li>
          </ul>
        )}
      </div>

      {}
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div className="mb-3">
          <input
            name="name"
            className="form-control"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="mb-3">
          <input
            name="address"
            className="form-control"
            placeholder="Shipping Address"
            onChange={handleChange}
            value={formData.address}
          />
        </div>
        <div className="mb-3">
          <input
            name="cardNumber"
            className="form-control"
            placeholder="Card Number"
            onChange={handleChange}
            value={formData.cardNumber}
          />
        </div>
        <div className="mb-3 d-flex gap-2">
          <input
            name="expiryDate"
            className="form-control"
            placeholder="MM/YY"
            onChange={handleChange}
            value={formData.expiryDate}
          />
          <input
            name="cvv"
            className="form-control"
            placeholder="CVV"
            onChange={handleChange}
            value={formData.cvv}
          />
        </div>
        <button className="btn btn-success w-100" onClick={handleSubmit}>
          Submit Order
        </button>
      </div>
    </div>
  );
}