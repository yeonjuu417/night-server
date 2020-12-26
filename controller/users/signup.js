const { users } = require('../../models');

module.exports = {
    post: async (req, res) => {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            res.status(422).send({ message: "insufficient parameters supplied" })
        }
        let iseamil = await users.findOne({
            where: { email: req.body.email }
        })
	if(isemail){
            res.status(409).send({message : "email exists"})
          }else{
           await users.create({
              email: email,
              password: password,
              username : username,
          },)
          res.status(201).json({ message :"Sign successfully" })
          }
	
    }
}
