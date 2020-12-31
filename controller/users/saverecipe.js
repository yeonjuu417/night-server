const { recipeLogs } = require('../../models');


module.exports = {
    post: async (req, res) => {
        const { foodName, foodImg, link } = req.body;
        if (!foodName || !foodImg || !link) {
            res.status(422).send({ message: "insufficient parameters supplied" })
        }

        let resave = recipeLogs.findOne({
            where: { userId: req.session.userId, foodName: foodName }

        })
        if (resave) {
            res.status(409).send({ message: "recipe exists" })
        } else {
            await recipeLogs.create({
                userId: req.session.userId,
                foodName: foodName,
                foodImg: foodImg,
                link: link,
            })
        }
    }
}
