module.exports = function (app) {
    app.get("/inicio", function (req, res) {
        // var connection = app.infra.connectionFactory();
        // var produtosDAO = new app.infra.ProdutosDAO(connection);
        res.render('inicio/instrucoes');
     });
}