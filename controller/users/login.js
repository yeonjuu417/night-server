const { users } = require('../../models');


module.exports = {// When login, send userInfo and recipeLog all information ... ? 
    post: async (req, res) => {
        //Get information from the database via email and password
	console.log(req.body);
        const {email,password} = req.body;
	                console.log(email);
            console.log(password);
        const userInfo = await users.findOne({
            where: {email,password},
        });
        if(!userInfo){ //Failed
            res.status(400).send({data: null, message : "not authorized"})
        }else{ //Successful
            req.session.userId = userInfo.id;
            res.send({message : "Login successfully" })
        }
    }
}
