const { users,recipeLogs } = require('../../models');

module.exports = {
    get:async (req, res) => {
	    console.log(req.session.userId);
        if(req.session.userId){
            let userInfo = await users.findOne({
                where : {id : req.session.userId}
            })
            let recipelog = await recipeLogs.findAll({
                where : {userId : req.session.userId}
            }) 
	    console.log(userInfo.username);
            res.status(200).json({data: userInfo, log : recipelog})
        }else{
            res.status(401).send({message : 'Unauthorized'})
        }
    }
}
