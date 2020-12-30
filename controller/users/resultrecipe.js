const { resultRecipes } = require('../../models');

module.exports = {
    get: async (req, res) => {
        const result = [];
        const { potato, egg, rice, sesame, onion, tofu, spam, bread, gochujang, pork, chicken, tuna, flour, kimchi, nutella, pocachip } = req.body

        // if (egg && rice && spam && bread && chicken) {
        //     let id = Math.floor(Math.random() * (6 - 1)) + 1;
        //     let result = await resultRecipes.findOne({
        //         where: { id: id }//id:1~4
        //     })
        //     res.status(200).send({ data: result  })
        // } 
        
        if (egg && sesame) {
            let eggroll = await resultRecipes.findOne({
                where: { id: 1 }
            })
            result.push(eggroll);
            //res.status(200).send({ data: result ,message : "eggroll"})
        }
        if (egg && rice) {
            let eggrice = await resultRecipes.findOne({
                where: { id: 2 }
            })
            result.push(eggrice);
            //res.status(200).send({ data: result,message : "eggrice" })
        } 
        if (spam && egg && bread) {
            let spamsand = await resultRecipes.findOne({
                where: { id: 3 }
            })
            result.push(spamsand)
            //res.status(200).send({ data: result ,message : "spamsand" })
        } 
        if (spam && egg) {
            let spammayo = await resultRecipes.findOne({
                where: { id: 4 }
            })
            result.push(spammayo)
            //res.status(200).send({ data: result ,message : "spammayo" })
        } 
        if (chicken && egg) {
            let chickenmayo = await resultRecipes.findOne({
                where: { id: 5 }
            })
            result.push(chickenmayo)
            //res.status(200).send({ data: result,message : "chickenmayo" })
        } 
        if (tofu && onion) {
            let result = await resultRecipes.findOne({
                where: { id: 6 }
            })
            result.push(tofufood)
            //res.status(200).send({ data: result ,message : "tofufood"})
        }
        // } else if (gochujang && pork && kimchi) {
        //     let id = Math.floor(Math.random() * (9 - 7)) + 7;
        //     let result = await resultRecipes.findOne({
        //         where: { id: id }//7~8
        //     })
        //     res.status(200).send({ data: result })
        // } 
        
        if (gochujang && pork) {
            let bullgogi = await resultRecipes.findOne({
                where: { id: 7 }
            })
            result.push(bullgogi)
            //res.status(200).send({ data: result ,message : "bullgogi"})
        } 
        if (kimchi && pork) {
            let kimchistew = await resultRecipes.findOne({
                where: { id: 8 }
            })
            result.push(kimchistew)
            //res.status(200).send({ data: result ,message : "kimchistew" })
        } 
        if (potato && flour) {
            let potatopizza = await resultRecipes.findOne({
                where: { id: 9 }
            })
            result.push(potatopizza)
            //res.status(200).send({ data: result ,message : "potatopizza"})
        } 
        if (potato) {
            let hashbrown = await resultRecipes.findOne({
                where: { id: 10 }
            })
            result.push(hashbrown)
            //res.status(200).send({ data: result ,message : "hashbrown"})
        } 
        if (kimchi && flour) {
            let kimchipizza = await resultRecipes.findOne({
                where: { id: 11 }
            })
            result.push(kimchipizza)
            //res.status(200).send({ data: result ,message : "kimchipizza" })
        } 
        if (tuna && rice) {
            let tunarice = await resultRecipes.findOne({
                where: { id: 12 }
            })
            result.push(tunarice)
            //res.status(200).send({ data: result ,message : "tunarice"})
        } 
        if(result.length === 0) {
            let result = await resultRecipes.findOne({ //배민링크
                where: { id: 13 }
            })
            res.send({data: result , message: "No recipe" })
        }
        let i = Math.floor(Math.random() * (result.length - 0)) + 0;
        res.send({data : result[i]})
    }
}
