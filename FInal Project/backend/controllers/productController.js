const db = require('../db');

exports.getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addProduct = async (req, res) => {
  const { category, product_name, description, price, image } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO products (category, product_name, description, price, image) VALUES (?, ?, ?, ?, ?)',
      [category, product_name, description, price, image]
    );
    res.json({ product_id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { category, product_name, description, price, image } = req.body;
  try {
    await db.query(
      'UPDATE products SET category=?, product_name=?, description=?, price=?, image=? WHERE product_id=?',
      [category, product_name, description, price, image, id]
    );
    res.json({ message: 'Product updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM products WHERE product_id=?', [id]);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
