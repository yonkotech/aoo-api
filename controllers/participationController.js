const db = require('../config/db');

exports.getAllParticipations = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM participation');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.addParticipation = async (req, res) => {
  const { id_membre, id_activite } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO participation (id_membre, id_activite) VALUES (?, ?)',
      [id_membre, id_activite]
    );
    res.status(201).json({ id: result.insertId, id_membre, id_activite });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
