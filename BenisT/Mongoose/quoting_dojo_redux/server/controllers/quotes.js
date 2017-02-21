var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
  show: function(req, res){
    Quote.find({}, function(err, quotes){
      res.render('quotes', {quotes: quotes})
    })
  },
  create: function(req, res){
    var quote = new Quote({name: req.body.name,quote: req.body.quote})
    quote.save(function(err) {
          if (err) {console.log('we have errors', err)}
          else{res.redirect('/quotes')}
      })
    }
  }