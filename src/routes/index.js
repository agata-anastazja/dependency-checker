const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()
const api = require('./api')
router.all('*', cors());

api.use(app);

//
// const getPackageDependencies = require('../package_dependencies').getPackageDependencies
// const registryApi = require("../registry_api").fetchData
//
//
// router.get('/api/:name', async function(req, res, next){
//   const name = req.params.name
//   const picked = await getPackageDependencies(registryApi, name)
//
//   res.status(200).send({
//       data: picked
//   });
// });

module.exports = router
