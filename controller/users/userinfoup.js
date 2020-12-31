const { users } = require('../../models');
const user = require('../../models/user');

module.exports = {
    put: async (req, res) => {
        const {username,password} = req.body
        // const {username,password,userImg} = req.body
        if(req.session.userId && username){
            await users.findOne({
                where : {id : req.session.userId}
            })
            .then(data =>{
                users.update({username : username},{where : {id : req.session.userId}})
                res.status(302).send({data: users.username})
            }).catch(err => {
                res.status(404).send({message: "user not found"});
            })
        }
        if(req.session.userId && password){
            await users.findOne({
                where : {id : req.session.userId}
            })
            .then(data =>{
                users.update({password : password},{where : {id : req.session.userId}})
                res.status(302).send({data: user.username})
            }).catch(err => {
                res.status(404).send({message: "user not found"});
            })
        }
        // if(userImg){
        //     await users.findOne({
        //         where : {userImg : userImg}
        //     })
        //     .then(data => {
        //         users.update({userImg : data.userImg},{where : {userImg : userImg}})
        //         res.status(302).send()
        //     })
        // }
    }   
}
