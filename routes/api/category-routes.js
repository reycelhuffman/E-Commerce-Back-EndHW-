
const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200)(categoryData);
  } catch (err) {
    res.status(500).json(err);
  
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // JOIN with travellers, using the Trip through table
      include: [{ model: Product, through: Tag, as: 'category_product' }]
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
