const { resultRecipes } = require('../../models');

module.exports = {
    get: async (req, res) => {
        const { potato, egg, rice, sesame, onion, tofu, spam, bread, gochujang, pork, chicken, tuna, flour, kimchi, nutella, pocachip } = req.body

        if (egg && rice && spam && bread && chicken) {
            let id = Math.floor(Math.random() * (6 - 1)) + 1;
            let result = await resultRecipes.findOne({
                where: { id: id }//id:1~4
            })
            res.status(200).send({ data: result  })

        } else if (egg && rice) {
            let result = await resultRecipes.findOne({
                where: { id: 1 }
            })
            res.status(200).send({ data: result,message : "eggrice" })
        } else if (egg && sesame) {
            let result = await resultRecipes.findOne({
                where: { id: 2 }
            })
            res.status(200).send({ data: result ,message : "eggroll"})
        } else if (spam && egg && bread) {
            let result = await resultRecipes.findOne({
                where: { id: 3 }
            })
            res.status(200).send({ data: result ,message : "spamsand" })
        } else if (spam && egg) {
            let result = await resultRecipes.findOne({
                where: { id: 4 }
            })
            res.status(200).send({ data: result ,message : "spammayo" })
        } else if (chicken && egg) {
            let result = await resultRecipes.findOne({
                where: { id: 5 }
            })
            res.status(200).send({ data: result,message : "chickenmayo" })
        } else if (tofu && onion) {
            let result = await resultRecipes.findOne({
                where: { id: 6 }
            })
            res.status(200).send({ data: result })
        } else if (gochujang && pork && kimchi) {
            let id = Math.floor(Math.random() * (9 - 7)) + 7;
            let result = await resultRecipes.findOne({
                where: { id: id }//7~8
            })
            res.status(200).send({ data: result })
        } else if (gochujang && pork) {
            let result = await resultRecipes.findOne({
                where: { id: 7 }
            })
            res.status(200).send({ data: result ,message : "bullgogi"})
        } else if (kimchi && pork) {
            let result = await resultRecipes.findOne({
                where: { id: 8 }
            })
            res.status(200).send({ data: result ,message : "kimchistew" })
        } else if (potato && flour) {
            let result = await resultRecipes.findOne({
                where: { id: 9 }
            })
            res.status(200).send({ data: result ,message : "potatopizza"})
        } else if (potato) {
            let result = await resultRecipes.findOne({
                where: { id: 10 }
            })
            res.status(200).send({ data: result ,message : "hashbrown"})
        } else if (kimchi && flour) {
            let result = await resultRecipes.findOne({
                where: { id: 11 }
            })
            res.status(200).send({ data: result ,message : "kimchipizza" })
        } else if (tuna && rice) {
            let result = await resultRecipes.findOne({
                where: { id: 12 }
            })
            res.status(200).send({ data: result ,message : "tunarice"})
        } else {
            let result = await resultRecipes.findOne({ //배민링크
                where: { id: 13 }
            })
            res.send({data: result , message: "No recipe" })
        }
    }
}