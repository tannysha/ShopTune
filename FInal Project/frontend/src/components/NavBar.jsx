import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">ShopTune</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link to="/category/men" className="nav-link">Men</Link></li>
          <li className="nav-item"><Link to="/category/women" className="nav-link">Women</Link></li>
          <li className="nav-item"><Link to="/category/accessories" className="nav-link">Accessories</Link></li>
        </ul>

        <div className="d-flex align-items-center gap-2">
          <Link to="/cart" className="btn btn-outline-dark">Cart</Link>
          {user ? (
            <div className="dropdown">
              <button
                className="btn btn-outline-primary dropdown-toggle"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                Hello, {user.email.split('@')[0]}
              </button>
              {showDropdown && (
                <ul className="dropdown-menu show" style={{ position: "absolute" }}>
                  <li><button className="dropdown-item" onClick={handleLogout}>Sign Out</button></li>
                </ul>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-secondary">Login</Link>
              <Link to="/signup" className="btn btn-outline-success ms-2">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
