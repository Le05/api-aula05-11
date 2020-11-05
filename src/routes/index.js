module.exports  = app => {
    const controller = app.controllers.pontosTuristicosController;
    
    app.route('/api/v1/pontos/getAll')
    .get(controller.getAll);

    app.route('/api/v1/pontos/store')
    .post(controller.store);
}
