var socketMgr = require('../../lib/proxy').socketMgr;

module.exports = function(req, res) {
  socketMgr.sendData(req.body);
  res.json({ec: 0});
};
