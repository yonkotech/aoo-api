const express = require('express');
const morgan = require('morgan');
const logger = require ("./middleware/logger");
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(logger);

// Routes ici
app.use('/groups', require('./routes/groupRoutes'));
app.use('/members', require('./routes/memberRoutes'));
app.use('/roles', require('./routes/roleRoutes'));
app.use('/activities', require('./routes/activityRoutes'));
app.use('/participations', require('./routes/participationRoutes'));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours sur http://localhost:${PORT}`);
});
