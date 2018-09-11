const express = require('express');
const getPackageDependencies = require('../package_dependencies').getPackageDependencies
const registryApi = require("../registry_api").fetchData

getPackageDependenciesRoute = (app) => {
  var route = express.Router();

  app.use('/api/', route);

  route.get('/:name', async (req, res) => {
    const name = req.params.name;

    const dependenciesData = await getPackageDependencies(registryApi, name)

    if (dependenciesData == {}) {
      res.status(404).json({
        status: 'not ok',
        data: null
      });
    } else {
      res.status(200).json({
        status: 'ok',
        data: dependenciesData
      });
    }
  });
};

module.exports = getPackageDependenciesRoute
