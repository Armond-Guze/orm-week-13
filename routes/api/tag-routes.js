const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{
      model: Product,
      through: ProductTag,
      as: 'products'
    }]
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.get('/:id', async (req, res) => {
  const tagId = req.params.id;
  await Tag.findByPk(tagId,{
    include: [Product],
  })
  .then((data) => {
    console.log("Data", data);
    return res.json(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagId = req.params.id
  await Tag.findAll(tagId, {
    include: [{
      model: Product,
      through: ProductTag,
      as: 'products'
    }]
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.put('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagId = req.params.id
  await Tag.findAll(tagId, {
    include: [{
      model: Product,
      through: ProductTag,
      as: 'products'
    }]
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tagId = req.params.id
  const tag = await Tag.findByPk(tagId, {
    include: [{
      model: Product,
      through: ProductTag,
      as: 'products'
    }]
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
  if (!tag) {
    return res.status(404).json({ message: 'Tag not found' });
  }
  
tag.destroy();
});

module.exports = router;
