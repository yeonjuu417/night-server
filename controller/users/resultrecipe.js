const { resultRecipes } = require('../../models');

module.exports = {
    get: async (req, res) => {
        const result = [];
        const { potato, egg, rice, sesame, onion, tofu, spam, bread, gochujang, pork, chicken, tuna, flour, kimchi, nutella, pocachip } = req.body
        console.log(req.body)
        if (egg && sesame) {
            let eggroll = await resultRecipes.findOne({
                where: { id: 1 }
            })
            result.push(eggroll);
        }
        if (egg && rice) {
            let eggrice = await resultRecipes.findOne({
                where: { id: 2 }
            })
            result.push(eggrice);
        } 
        if (spam && egg && bread) {
            let spamsand = await resultRecipes.findOne({
                where: { id: 3 }
            })
            result.push(spamsand)
        } 
        if (spam && egg) {
            let spammayo = await resultRecipes.findOne({
                where: { id: 4 }
            })
            result.push(spammayo)
        } 
        if (chicken && egg) {
            let chickenmayo = await resultRecipes.findOne({
                where: { id: 5 }
            })
            result.push(chickenmayo)
        } 
        if (tofu && onion) {
            let result = await resultRecipes.findOne({
                where: { id: 6 }
            })
            result.push(tofufood)
        }
   
        if (gochujang && pork) {
            let bullgogi = await resultRecipes.findOne({
                where: { id: 7 }
            })
            result.push(bullgogi)
        } 
        if (kimchi && pork) {
            let kimchistew = await resultRecipes.findOne({
                where: { id: 8 }
            })
            result.push(kimchistew)
        } 
        if (potato && flour) {
            let potatopizza = await resultRecipes.findOne({
                where: { id: 9 }
            })
            result.push(potatopizza)
        } 
        if (potato) {
            let hashbrown = await resultRecipes.findOne({
                where: { id: 10 }
            })
            result.push(hashbrown)
        } 
        if (kimchi && flour) {
            let kimchipizza = await resultRecipes.findOne({
                where: { id: 11 }
            })
            result.push(kimchipizza)
        } 
        if (tuna && rice) {
            let tunarice = await resultRecipes.findOne({
                where: { id: 12 }
            })
            result.push(tunarice)
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
