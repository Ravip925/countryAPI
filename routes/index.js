const router = require('express').Router();
const countryData = require('../Controllers/country');
const stateData = require('../Controllers/state');
const cityData = require('../Controllers/city');

router.route('/country').get(countryData.apidatacontroller);
router.route('/state').get(stateData.apidatacontroller);
router.route('/city').get(cityData.apidatacontroller);

module.exports = router;