module.exports = {
    post: (req, res) => {
        if (!req.session.userId) {
            res.status(400).json({ data: null, message: 'not authorized' });
        } else {//Session has userId
            req.session.destroy(function () {//Delete Session
                req.session;
            });
            res.status(205).json({ data: null, message: 'Logout successfully' });

        }
    }


}