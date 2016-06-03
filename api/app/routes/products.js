var products = {

  getAll: function(req, res) {
    res.json(fakeData);
  },

  getOne: function(req, res) {
    res.json(fakeData[req.params.id]);
  },

  create: function(req, res) {
    var input = req.body;
    fakeData.push(input); // Spoof a DB call
    res.json(input);
  },

  update: function(req, res) {
    var update = req.body;
    data[req.params.id] = update; // Spoof a DB call
    res.json(update);
  },

  delete: function(req, res) {
    data.splice(req.params.id, 1); // Spoof a DB call
    res.json(true);
  }
};

var fakeData = [{
  name: 'product 1',
  id: '1'
}, {
  name: 'product 2',
  id: '2'
}, {
  name: 'product 3',
  id: '3'
}];

module.exports = products;
