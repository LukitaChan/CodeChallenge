const express = require('express');
const ExplorerController = require('./lib/controllers/ExplorerController');
const app = express();

app.use(express.json());
const port = 3000;

// app.get('/', (request, response) => {
// 	response.json({ message: 'Bienvenido a la LaunchX' });
// });

app.use('/', require('./router/RutasWeb'));

app.get('/FullList', (request, response) => {
	const lista = request.params;
	const listaFull = ExplorerController.getExplorersList(lista);
	response.json(listaFull);
});

app.listen(port, () => {
	console.log(`LaunchX API esta activo localhost:${port}`);
});
