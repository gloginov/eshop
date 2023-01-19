import db from '../models/index.mjs';
const Category = db.categories;

// Create and Save a new Product
const createCategory = (req, res) => {
// Validate request
//   console.log(req);
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Create a Category
  const category = {
    title: req.body.title,
    description: req.body.description,
    available: req.body.available || false,
    sticker: req.body.sticker
  };
  
  // Save category in the database
  Category.create(category)
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
  Category.findAll()
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
  Category.findOne({
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
  Category.findAll({
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

const updateCategory = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true,
    plain: true
  })
    .then(data => {
      // res.send(data)
      Category.findOne({
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

const deleteCategory = (req, res) => {
  Category.destroy({
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
  Category.destroy({
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
  createCategory,
  findAll,
  findOne,
  findAllPublished,
  updateCategory,
  deleteCategory,
  deleteAll
};
