const { users } = require('../../models');

module.exports = {
  put: async (req, res) => {
    // console.log(req.session.userId);
    if(req.session.userId) {
      const update = users.update({ userImg: req.file.filename}, {
        where: { id: req.session.userId }
      })
      res.status(200).send({ data : update })
    } else {
      res.status(401).send({ message : 'Unauthorized' })
    }
  }
}
