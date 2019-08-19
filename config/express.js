/*configurando a requisição e chamada do express no arquivo em config*/
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressValidator = require('express-validator');

module.exports = function() {
    
  var app = express();
  
  /*definindo o motor de view a ser utilizado*/
  app.set('view engine', 'ejs');
  /*definindo o local das views*/
  app.set('views', './app/views');

  /*indicando para a aplicação onde ela deve buscar recursos estáticos (por exemplo: link css)*/
  app.use(express.static('./app/public'));

  /*Preparando a aplicação para enviar os dados*/
  /*quando os dados são enviados por post, o padrão é enviar via urlencoded*/
  app.use(bodyParser.urlencoded({extended: true}));
  /*para aceitar tbm json*/ 
  app.use(bodyParser.json());
  app.use(methodOverride('_method'));
  app.use(expressValidator());
  
  /*informando onde queremos carregar o arquivo 'routes' em 'app'*/
  /*cwd indica o local em que o load deve procurar*/
  load('routes',{cwd: 'app'})
        .then('infra')
        .into(app);
  
  return app;
};

