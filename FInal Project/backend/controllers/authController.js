const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key';

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashed]);
    res.json({ message: 'User created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE username=?', [username]);
    if (!rows.length) return res.status(400).json({ error: 'Invalid username' });

    const valid = await bcrypt.compare(password, rows[0].password);
    if (!valid) return res.status(400).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: rows[0].id, username: rows[0].username }, SECRET_KEY);
    res.json({ token, username: rows[0].username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
