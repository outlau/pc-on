const fs = require('fs');

module.exports = {
  get: async(req, res) => {
    try {
      const stateJSON = fs.readFileSync('./state/state.json');
      const state = JSON.parse(stateJSON);
      res.send(state.enabled);
    } catch (e) {
      res.send (e);
    }
  },
};
