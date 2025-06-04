const db = require('../config/db');

exports.getAllRoles = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM role');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRole = async (req, res) => {
  const { nom } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO groupe (nom) VALUES (?)',
      [nom]
    );
    res.status(201).json({ id: result.insertId, nom });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
