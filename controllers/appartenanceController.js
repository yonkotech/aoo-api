const db = require('../config/db');

exports.assignRole = async (req, res) => {
  const { id_membre, id_groupe, id_role } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO appartenance (id_membre, id_groupe, id_role) VALUES (?, ?, ?)',
      [id_membre, id_groupe, id_role]
    );
    res.status(201).json({
      id: result.insertId,
      id_membre,
      id_groupe,
      id_role
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
