const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create
  };

  function create(req, res) {
      req.body.flight = req.params.id;
      const ticket = new Ticket(req.body);
      ticket.save(function(err) {
        if (err) return res.redirect(`/flights/${req.params.id}`);
        res.redirect(`/flights/${req.params.id}`);
      });
  }
