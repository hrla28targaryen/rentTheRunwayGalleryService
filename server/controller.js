const Products = require('../database/index.js');

const getAll = (req, res) => {
    Products.find()
    .then( data => res.status(200).send(data))
    .catch( err => console.error('Error'));
};

const getProductSimilarGallery = (req, res) => {
    Products.find(req.params)
    .then( data => res.status(200).send(data))
    .catch( err => console.error('Error'));
};

module.exports = {
    getAll,
    getProductSimilarGallery
}