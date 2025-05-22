import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Women",
    path: "/category/women",
    image: "https://i.pinimg.com/736x/38/97/81/389781152aa6b118514518b2ec1078f4.jpg",
  },
  {
    name: "Men",
    path: "/category/men",
    image: "https://i.pinimg.com/736x/36/32/78/363278544b56949d552deb7b6109e84b.jpg",
  },
  {
    name: "Accessories",
    path: "/category/accessories",
    image: "https://i.pinimg.com/736x/d3/89/fa/d389fa822d902863bdea073a80ad6c9b.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-3">Welcome to ShopTune</h1>
      <p className="text-center text-muted mb-5">
        Explore the latest fashion trends and accessories curated just for you.
      </p>
      <h2 className="mb-4">Shop by Category</h2>
      <div className="row">
        {categories.map((cat) => (
          <div className="col-md-4 mb-4" key={cat.name}>
            <div className="card h-100 text-center shadow-sm">
              <div style={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <img
    src={cat.image}
    alt={cat.name}
    className="card-img-top"
    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
  />
</div>

              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{cat.name}</h5>
                <Link to={cat.path} className="btn btn-primary mt-2">
                  Shop {cat.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
