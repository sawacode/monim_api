require('dotenv').config();
//Importation
const express = require("express");
const helmet = require('helmet');
const swaggerSpec = require('./swaggerConfig');
const api_key = require('./http/middleware/api.key');
const path = require('path');
const config = require('./config/app');
const routeManager = require('./route_manager');


//Constante
const PORT = 8188;
const base_url = config.base_url;

//Instances Express
const app = express();
//DOCS DE SWAGGER
swaggerSpec(app, PORT);

// Utilisation de Helmet avec tous ses middlewares par défaut
app.use(helmet());
//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(base_url + "/medias/", express.static(path.join(__dirname, "medias")));

//Middleware key
app.use(api_key);

app.use((req, res, next) => {
  console.log(`🔍 Requête reçue : ${req.method} ${req.url}`);
  console.log(`   Base URL configurée : "${base_url}"`);
  console.log(`   URL complète attendue : ${base_url}${req.url}`);
  next();
});
//Définition des routes
routeManager(app);

// Gestion des erreurs pour les routes non trouvées
app.use((req, res, next) => {
  console.error('Erreur client: route not found');
  return res.json({ status: 404, error: 'Route not found' });
});

// Gestion globale des erreurs
app.use((err, req, res, next) => {
  console.error('Erreur serveur :', err);
  return res.json({ status: 500, error: 'Server error. please try again later' });
});

//Start app*
app.listen(PORT, () => console.log("http://localhost:" + PORT + base_url));
