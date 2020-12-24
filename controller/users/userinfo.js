const { users,recipeLog } = require('../../models');

module.exports = {
    get:async (req, res) => {
        if(req.session.userId){
            let userInfo = await user.findeOne({
                where : {id : req.session.userId}
            })
            let recipeLog = await recipelog.findeAll({
                where : {userId : req.session.userId}
            }) 
            res.status(200).json({data: userInfo, Log : recipeLog})
        }else{
            res.status(401).send({message : 'Unauthorized'})
        }
    }
}