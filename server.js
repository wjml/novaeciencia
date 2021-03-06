const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

// faz o express procurar na pasta 'public' pelos assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   res.sendfile('./index.html');
});

app.get('/index.html', function (req, res) {
   res.sendfile('./index.html');
});

app.get('/about.html', function (req, res) {
   res.sendfile('./about.html');
});

app.get('/post.html', function (req, res) {
   res.sendfile('./post.html');
});

app.get('/contact.html', function (req, res) {
   res.sendfile('./contact.html');
});

app.get('/entrevista.html', function (req, res) {
   res.sendfile('./entrevista.html');
});

app.get('/cronica.html', function (req, res) {
   res.sendfile('./cronica.html');
});

app.get('/artigo.html', function (req, res) {
   res.sendfile('./artigo.html');
});

app.get('/noticias.html', function (req, res) {
   res.sendfile('./noticias.html');
});

app.get('/editorial.html', function (req, res) {
   res.sendfile('./editorial.html');
});

app.listen(port, function () {
   console.log('Our app is running on http://localhost:' + port);
});
