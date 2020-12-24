require('dotenv').config();
const axios = require('axios');
const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

module.exports = async (req, res) => {
  let google = await axios.post('https://oauth2.googleapis.com/token', {
    client_id: clientID,
    client_secret: clientSecret,
    code: req.body.authorizationCode
  }, {
    headers: {
      "Accept": "application/json"
    }
  })
  console.log(google.data.access_token)
  res.send(200, {
    accessToken: google.data.access_token
  });
}