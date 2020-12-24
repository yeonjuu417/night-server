const { user } = require('../../models');

module.exports = {
    get: async (req, res) => {
        const {username,password,userImg} = req.body
        if(username){
            await user.findOne({
                where : {username : username}
            })
            .then(data =>{
                user.update({username : data.username},{where : {username : username}})
                res.status(302).send()
            })
        }
        if(password){
            await user.findOne({
                where : {password : password}
            })
            .then(data =>{
                user.update({password : data.password},{where : {password : password}})
                res.status(302).send()
            })
        }
        if(userImg){
            await user.findOne({
                where : {userImg : userImg}
            })
            .then(data => {
                user.update({userImg : data.userImg},{where : {userImg : userImg}})
                res.status(302).send()
            })
        }
    }   
}