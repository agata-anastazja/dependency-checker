const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()
router.all('*', cors());
const getPackageDependencies = require('../package_dependencies').getPackageDependencies

router.get('/api/:name', async function(req, res, next){
  const name = req.params.name
  const picked = await getPackageDependencies(name)
  res.status(200).send({
      data: picked
  });
});

module.exports = router
