const { users } = require('../../models');


module.exports = {// When login, send userInfo and recipeLog all information ... ? 
    post: async (req, res) => {
        //Get information from the database via email and password
        const {email,password} = req.body;
        const userInfo = await users.findOne({
            where: {email,password},
        });
        if(!userInfo){ //Failed
            res.status(400).send({data: null, message : "not authorized"})
        }else{ //Successful
            req.session.userId = userInfo.id;
            console.log(req.session);
            res.send({message : "Login successfully" })
        }
    }
}
