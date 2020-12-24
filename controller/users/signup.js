const { users } = require('../../models');

module.exports = {
    post: async (req, res) => {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            res.status(422).send({ message: "insufficient parameters supplied" })
        }
        const isemail = await user.findOne({
            where: { email: req.body.email }
        })
        if(isemail){
            res.status(409).send({message : "email exists"})
          }else{
           await user.create({
              email: email,
              password: password,
              username : username,
          },)
          res.status(201).json({ message :"Sign successfully" })
          }
    }
}