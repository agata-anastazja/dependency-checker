const express = require('express')
const router = express.Router()
const cors = require('cors')
const fetch = require("isomorphic-fetch")
const app = express()
router.all('*', cors());

const callApi = async (package_name = "express", version = "latest") => {
  const url = "https://registry.npmjs.org/" + package_name + "/" + version
  var response = "";
  try {
    response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(response.message);
    return body["dependencies"];
  }
  catch(error) {
    console.error(error);
  }
};


router.get('/api/:name', async function(req, res, next){
  const name = req.params.name
  const picked = await callApi()
  
  res.status(200).send({
      data: picked
})

})

module.exports = router
