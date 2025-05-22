const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// GET products
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results);
  });
});

// POST signup
app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;
  db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: 'User already exists' });
      return res.status(500).json({ error: 'Signup failed' });
    }
    res.status(201).json({ message: 'Signup successful' });
  });
});

// POST login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: 'Login failed' });
    if (results.length === 0) return res.status(401).json({ error: 'Invalid email or password' });

    res.json({ message: 'Login successful', token: 'mock-token' });
  });
});

// POST checkout
app.post('/api/checkout', (req, res) => {
  const { email, items } = req.body;

  if (!email || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Invalid request data' });
  }

  db.query('SELECT id FROM users WHERE email = ?', [email], (err, userResults) => {
    if (err || userResults.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const userId = userResults[0].id;
    db.query('INSERT INTO orders (user_id, date) VALUES (?, NOW())', [userId], (err, orderResult) => {
      if (err) return res.status(500).json({ error: 'Order creation failed' });

      const orderId = orderResult.insertId;
      const values = items.map(item => [orderId, item.product_id, item.quantity]);

      db.query('INSERT INTO order_items (order_id, product_id, quantity) VALUES ?', [values], (err2) => {
        if (err2) return res.status(500).json({ error: 'Failed to insert order items' });
        res.status(201).json({ message: 'Order confirmed', orderId });
      });
    });
  });
});

// Start server
app.listen(port, () => {
console.log("Server running on http://localhost:" + port);
});