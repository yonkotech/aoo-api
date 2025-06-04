const db = require('../config/db');

exports.getAllMembers = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM membre');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMember = async (req, res) => {
  const { nom, prenom, email } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO membre (nom, prenom, email) VALUES (?, ?, ?)',
      [nom, prenom, email]
    );
    res.status(201).json({ id: result.insertId, nom, prenom, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMemberDetails = async (req, res) => {
  const memberId = req.params.id;

  try {
    // Groupes avec rôle
    const [groups] = await db.query(`
      SELECT g.id, g.nom, g.description, r.nom AS role
      FROM groupe g
      JOIN appartenance a ON g.id = a.id_groupe
      JOIN role r ON a.id_role = r.id
      WHERE a.id_membre = ?
    `, [memberId]);

    // Participations à des activités
    const [activities] = await db.query(`
      SELECT act.id, act.nom, act.date, g.nom AS groupe
      FROM participation p
      JOIN activite act ON p.id_activite = act.id
      JOIN groupe g ON act.id_groupe = g.id
      WHERE p.id_membre = ?
    `, [memberId]);

    res.json({
      membre_id: memberId,
      groupes: groups,
      participations: activities
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

