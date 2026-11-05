
const express = require('express');
const app = express();

app.use(express.json());

// IMPORTAR RUTAS
const acudienteRoutes = require('./src/routers/acudienteRoutes');
const ninoRoutes = require('./src/routers/ninoRoutes');
const grupoRoutes = require('./src/routers/grupoRoutes');
const ninoAccidenteRoutes = require('./src/routers/ninoAccidenteRoutes');
const asistenciaRoutes = require('./src/routers/asistenciaRoutes');
const matriculaRoutes = require('./src/routers/matriculaRoutes');

// UTILIZAR RUTAS
app.use('/acudiente', acudienteRoutes);
app.use('/nino', ninoRoutes);
app.use('/grupo', grupoRoutes);
app.use('/ninoAccidente', ninoAccidenteRoutes);
app.use('/asistencia', asistenciaRoutes);
app.use('/matricula', matriculaRoutes);

// INICIAR SERVIDOR
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
