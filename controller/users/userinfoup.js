const { users } = require('../../models');

module.exports = {
    get: async (req, res) => {
        const {username,password,userImg} = req.body
        if(username){
            await users.findOne({
                where : {username : username}
            })
            .then(data =>{
                users.update({username : data.username},{where : {username : username}})
                res.status(302).send()
            })
        }
        if(password){
            await users.findOne({
                where : {password : password}
            })
            .then(data =>{
                users.update({password : data.password},{where : {password : password}})
                res.status(302).send()
            })
        }
        if(userImg){
            await users.findOne({
                where : {userImg : userImg}
            })
            .then(data => {
                users.update({userImg : data.userImg},{where : {userImg : userImg}})
                res.status(302).send()
            })
        }
    }   
}
