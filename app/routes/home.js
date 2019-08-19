module.exports = function (app) {
    app.get("/", function (req, res) {
        // var connection = app.infra.connectionFactory();
        // var produtosDAO = new app.infra.ProdutosDAO(connection);
        //
        // produtosDAO.lista(function (error, results, fields) {
        //     res.render('home/index', { livros: results });
        // });
        // connection.end();
        res.render('home/index.ejs');

    });
    app.get("/editor", function (req, res) {
        res.render('editor/preview');
    });
    app.get("/chat", function (req, res) {
        res.render('chat/chat');
    });

      // App routing
    app.get("/shared", function (req, res) {
        res.render('shared/shared.ejs');
    });

    app.get("/load", function (req, res) {
        res.render('home/loading.ejs');
    });

    app.get("/professor", function (req, res) {
        res.render('professor/distribuirAlunos.ejs');
    });

    app.get("/acompanhamento", function (req, res) {
        res.render('professor/acompanhamento.ejs');
    });

}
