const router = require("express").Router();
const { model } = require("mongoose");
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// get all products
router.get("/", (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  Product.findAll({
    include: [
      {
        model: Category,
      },
      {
        model: Tag,
        through: ProductTag,
        as: "tags",
      },
    ],
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one product
router.get("/:id", async (req, res) => {
  const tagId = req.params.id;
  await Product.findByPk(tagId, {
    include: [Category],
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

// create new product
router.post("/", async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  const productId = req.params.id
  await Product.findAll(productId, {
    include: [
      {
        model: Category,
      },
      {
        model: Tag,
        through: ProductTag,
        as: "tags",
      },
    ],
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update product
router.put("/:id", async(req, res) => {
  // update product data
  const productId = req.params.id;
  await Product.findByPk(productId, {
    include: [Category],
  })
  .then((data) => {
    console.log("Data", data);
    return res.json(data)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.delete("/:id", async (req, res) => {
  // delete one product by its `id` value
  const productId = req.params.id;
  await Product.findByPk(productId, {
    include: [Category],
  })
  .then((data) => {
    console.log("Data", data);
    return res.json(data)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json(data)
  })
});

module.exports = router;
