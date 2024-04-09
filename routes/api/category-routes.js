const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categoryId = req.params.id;
  await Category.findAll(categoryId, {
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
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryId = req.params.id;
  await Category.findByPk(categoryId, {
    include: [{ model: Product }],
  })
    .then((data) => {
      console.log("Data", data);
      return res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categoryId = req.params.id;
  await Category.findAll(categoryId, {
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
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  const categoryId = req.params.id;
  await Category.findByPk(categoryId, {
    include: [Product],
    where: { id: categoryId },
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
  // delete a category by its `id` value
  const categoryId = req.params.id;
  await Category.destroy(categoryId, {
    include: [Product],
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

module.exports = router;
