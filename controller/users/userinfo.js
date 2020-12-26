const { users,recipeLogs } = require('../../models');

module.exports = {
    get:async (req, res) => {
        if(req.session.userId){
            let userInfo = await users.findeOne({
                where : {id : req.session.userId}
            })
            let recipelog = await recipeLogs.findeAll({
                where : {userId : req.session.userId}
            }) 
            res.status(200).json({data: userInfo, Log : recipelog})
        }else{
            res.status(401).send({message : 'Unauthorized'})
        }
    }
}