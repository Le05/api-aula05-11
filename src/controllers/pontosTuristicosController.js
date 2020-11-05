const { v4: uuidv4 } = require('uuid');


module.exports = app => {
    const pontosDB = app.database.pontos;
    const controller = {};

    const { pontos: pontosMock, } = pontosDB;

    controller.getAll = (req, res) => res.status(200).json(pontosDB);

    controller.store = (req, res) => {
        pontosMock.data.push({
          id: uuidv4(),
          country: req.body.country,
          city: req.body.city
        });
    
        res.status(201).json(pontosMock);
      }

    return controller;
}