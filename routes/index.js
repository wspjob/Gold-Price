var express = require('express');
var router = express.Router();
var axios = require("axios").default;

/* GET home page. */
router.get('/', async function(req, res, next) {
  //res.render('index', { title: 'Express' });

  var options = {
    method: 'GET',
    url: 'https://gold-price-live.p.rapidapi.com/get_metal_prices',
    headers: {
      'X-RapidAPI-Host': 'gold-price-live.p.rapidapi.com',
      'X-RapidAPI-Key': '34a3643aa2msh7ecf3b8c1946455p13c059jsna3c1b86995ca'
    }
  };
  
 


  await axios.request(options).then(function (response) {
    
    res.json({data : response.data  }).status(200);
    //console.log(response.data);
  }).catch(function (error) {
    res.json({error }).status(500);
    //console.error(error);
  });



});

module.exports = router;





