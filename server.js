const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const port = process.env.PORT || 8080;

const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));

// motor de plantillas
app.set('view engine', 'ejs');

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render(path.join(__dirname, 'views', 'index'), { titulo: "inicio EJS" });
});

app.get("/nosotros", function (req, res) {
  res.render(path.join(__dirname, 'views', 'index'), { titulo: "Nosotros" });
});

app.listen(port);
