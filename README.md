# CodeChallenge-LaunchX
<!---
Agrega un readme.md con las siguientes secciones:
Detalla qué dependencias estás usando y para qué.
Explica el diseño de tus componentes.
Explica tu API: cómo consultarla, qué formato va a responder, incluye ejemplos etc.
-->
### Cursos de Visual Thinking API

![b5db8e5f-2ce5-40be-a96f-2fa010817d52](https://user-images.githubusercontent.com/101657514/166128564-089a9960-8a73-44e2-93c4-c64040c63376.jpg)

#### Dependencias
- EXPRESS : Creacion de API 🖐️
- JEST : Pruebas unitarias ✔️
- NODEMON : Visualizacion de la app en tiempo real ⏲️
- EJS : Plantilla dinamica 🌳
- BOOTSTRAMP : Diseño de page 💁

#### Componentes

###### Utils
- explorers.json : lista de estudiantes 👦
- reader.js : regresa la lista de explorers en json 👧

###### ExplorerService
- explorersList : Lectura de data json de Reader 📖
- explorersCertification : Filtro y mapeo para estudiantes con haveCertification === true; arroja arreglo con email 📧
- explorersMore50 : Filtro y mapeo para estudiantes con credits > 500; arroja arreglo con name 📛

###### ExplorerController
- getExplorersList : Lista de Estudiantes 🧒
- getExplorersCertification : Lista de email con certificacion valida (true) 👷
- getExplorers500 : Nombre de estudiantes con credits > 500 (score). 🥇

###### ExplorerController
- test1 : prueba para getExplorersCertification 👷
- test2 : prueba para getExplorers500 🥇

###### Index.js
Se generan las salidas de la data por medio de las rutas predeterminadas.

#### Visualizacion 
![image](https://user-images.githubusercontent.com/101657514/166128582-1578def3-b7f1-40b3-b324-bfadaa4109b9.png)

#### Consulta de API
La pagina consta de un home que da la bienvenida.
En la parte superior se encuentra un navbar donde se pueden consultar los datos solicitados:
- http://localhost:3000/    Home, pagina principal.
- http://localhost:3000/FullList     Lista completa del alumnado.
- http://localhost:3000/HaveCertification    Correos del alumnado con certificacion.
- http://localhost:3000/credits500      Nombres de alumnado con creditos mayores a 500.
 
La interfaz es amigable con el usuario, para facil acceso a la data.

<img src="https://user-images.githubusercontent.com/101657514/166129126-b8770bc6-f8af-478e-91f5-8efc28803b78.jpg" align="center" height="250" width="auto"></img>
Gracias por ver 🥰
