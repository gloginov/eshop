import db from '../models/index.mjs';
const Image = db.images;

// Create and Save a new Product
const createImage = (req, res) => {
// Validate request
//   console.log(req);
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Create a Product
  const image = {
    title: req.body.title,
    description: req.body.description,
  };
  
  // Save Product in the database
  Image.create(image)
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
  Image.findAll()
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
  Image.findOne({
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
  Image.findAll({
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

const updateImage = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  
  Image.update(req.body, {
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

const deleteImage = (req, res) => {
  Image.destroy({
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
  Image.destroy({
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

export { createImage, findAll, findOne, findAllPublished, updateImage, deleteImage, deleteAll };
