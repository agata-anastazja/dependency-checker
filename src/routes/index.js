const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()
router.all('*', cors());
const getPackageDependencies = require('../packageDependencies').getPackageDependencies
const registryApi = require("../registryApi").fetchData


router.get('/api/:name', async function(req, res, next){
  const name = req.params.name
  try {
    const picked = await getPackageDependencies(name, registryApi)
    res.status(200).send({
        data: picked
    });
  }
  catch(error) {
    res.status(404).send({
      message: "not found"
    });
  }    
});



module.exports = router
