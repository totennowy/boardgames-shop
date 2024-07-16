const express = require('express');
const { 
  getAllProducts, 
  getProductById, 
  getPromotionalProducts, 
  getNewReleases, 
  getBestsellers, 
  getUpcomingReleases 
} = require('../controllers/productController');

const router = express.Router();

router.get('/promotions', getPromotionalProducts);
router.get('/new-releases', getNewReleases);
router.get('/bestsellers', getBestsellers);
router.get('/upcoming-releases', getUpcomingReleases);
router.get('/', getAllProducts);
router.get('/:id', getProductById);

module.exports = router;
