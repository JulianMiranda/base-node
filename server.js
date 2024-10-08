// Importar Express
const express = require('express');
const app = express();

// Configurar el puerto
const PORT = process.env.PORT || 3000;

// Definir la ruta GET /api
app.get('/api', (req, res) => {
	res.send('Responding from Server');
});

// Iniciar el servidor
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
