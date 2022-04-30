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

app.get('/HaveCertification', (request, response) => {
	const listaCertificado = request.params.haveCertification;
	const listaConCertificado = ExplorerController.getExplorersCertification(listaCertificado);
	response.json({ Certificado: request.params.haveCertification, EstudiantesConCertificado: listaConCertificado });
});

app.get('/credits500', (request, response) => {
	const lista500 = request.params.credits;
	const listaMayor500 = ExplorerController.getExplorers500(lista500);
	response.json({ Credits: request.params.credits, EstudiantesQuinientos: listaMayor500 });
});

app.listen(port, () => {
	console.log(`LaunchX API esta activo localhost:${port}`);
});
