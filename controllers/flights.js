const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}

function create(req, res) {
    const flight = new Flight(req.body);
    console.log(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }

    function newFlight(req, res) {
        res.render('flights/new');
    }

    function index(req, res) {
        Flight.find({}, function(err, flights) {
            res.render('flights/index', { flights });
        });
    }