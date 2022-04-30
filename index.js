const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;

// app.get('/', (request, response) => {
// 	response.json({ message: 'Bienvenido a la LaunchX' });
// });

app.use('/', require('./router/RutasWeb'));

app.listen(port, () => {
	console.log(`LaunchX API esta activo localhost:${port}`);
});
