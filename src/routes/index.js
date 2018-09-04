const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()
router.all('*', cors());

const fakeNews = [{
  name: '1',
  dependencies: 'Mad owl chases car',
  }, {
  name: '2',
  dependencies: 'Owl stowaway',
  }];

router.get('/api/:name', function(req, res, next){
  const name = req.params.name

  const picked = fakeNews.find(o => o.name === name);

  res.status(200).send({
      data: picked
})

})

module.exports = router
