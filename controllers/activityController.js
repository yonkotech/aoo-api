const db = require('../config/db');

exports.getAllActivities = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM activite');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.addActivity = async (req, res) => {
  const { nom, date, id_groupe } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO activite (nom, date, id_groupe) VALUES (?, ?, ?)',
      [nom, date, id_groupe]
    );
    res.status(201).json({
      id: result.insertId,
      nom,
      date,
      id_groupe
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
