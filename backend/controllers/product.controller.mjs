import db from '../models/index.mjs';
const Product = db.products;

// Create and Save a new Product
const createProduct = (req, res) => {
// Validate request
//   console.log(req);
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Create a Product
  const product = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false,
    remainder: req.body.remainder || false,
    available: req.body.available || false,
    discount: req.body.discount || false,
    price: req.body.price || false,
    oldPrice: req.body.oldPrice || false,
    category: req.body.category || false,
    storage: req.body.storage || false,
    name: req.body.name || false
  };
  
  // Save Product in the database
  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

const findAll = (req, res) => {
  Product.findAll()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
    // Product.getAll(title, (err, data) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

const findOne = (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with id " + req.params.id
        });
      }
    })
};

const findAllPublished = (req, res) => {
  Product.findAll({
    where: {
      "available": true
    }
  })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    })
};

const updateProduct = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  
  Product.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true,
    plain: true
  })
    .then(data => {
      // res.send(data)
      Product.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(data => {
          res.send(data)
        })
    })
    .catch(err => {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating Tutorial with id " + req.params.id
        });
      }
    })
};

const deleteProduct = (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      res.send({ message: `Product ${req.params.id} was deleted successfully!` })
    })
    .catch(err => {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id
        });
      }
    })
};

const deleteAll = (req, res) => {
  Product.destroy({
    truncate: true
  })
    .then(data => {
      res.send({ message: `All Products were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all products."
      });
    })
};

export {
  createProduct,
  findAll,
  findOne,
  findAllPublished,
  updateProduct,
  deleteProduct,
  deleteAll
};
