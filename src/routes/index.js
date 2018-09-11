const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()
router.all('*', cors());
const getPackageDependencies = require('../package_dependencies').getPackageDependencies
const registryApi = require("./registry_api").registryApi


router.get('/api/:name', async function(req, res, next){
  const name = req.params.name
  const picked = await getPackageDependencies(name, registryApi)
  res.status(200).send({
      data: picked
  });
});

module.exports = router
