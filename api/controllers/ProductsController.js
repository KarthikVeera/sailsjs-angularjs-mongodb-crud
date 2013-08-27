/**
 * ProductsController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */

  model: function (req,res) {
    var modelname = req.param('modelname');
    Products.findByName(modelname).done(function (err, model) {
       if (err) return res.send(err,500);
       res.send({ model: model });
    });
  }

};
