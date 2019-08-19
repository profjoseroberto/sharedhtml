module.exports = function (app) {
    app.get("/exercicios", function (req, res) {
        // var connection = app.infra.connectionFactory();
        // var produtosDAO = new app.infra.ProdutosDAO(connection);
        res.render('exercicios/exercicioinicial');
     });
}