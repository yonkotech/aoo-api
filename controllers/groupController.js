const db = require('../config/db');

exports.getAllGroups = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM groupe');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createGroup = async (req, res) => {
  const { nom, description } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO groupe (nom, description) VALUES (?, ?)',
      [nom, description]
    );
    res.status(201).json({ id: result.insertId, nom, description });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getGroupDetails = async (req, res) => {
  const groupId = req.params.id;

  try {
    // Membres avec rôles
    const [members] = await db.query(`
      SELECT m.id, m.nom, m.prenom, m.email, r.nom AS role
      FROM membre m
      JOIN appartenance a ON m.id = a.id_membre
      JOIN role r ON a.id_role = r.id
      WHERE a.id_groupe = ?
    `, [groupId]);

    // Activités du groupe
    const [activities] = await db.query(`
      SELECT id, nom, date FROM activite WHERE id_groupe = ?
    `, [groupId]);

    res.json({
      groupe_id: groupId,
      membres: members,
      activites: activities
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

