const { recipeLogs } = require('../../models');


module.exports = {
    post: async (req, res) => {
        const { foodName, foodImg, link } = req.body;
        if (!foodName || !foodImg || !link) {
            res.status(422).send({ message: "insufficient parameters supplied" })
        }
        await recipeLogs.create({
            foodName: foodName,
            foodImg: foodImg,
            link: link,
        })
        res.status(201).json({ message: "Save successfully" })
    }
}
