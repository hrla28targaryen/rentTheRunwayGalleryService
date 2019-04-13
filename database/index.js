const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const config = {
    useMongoClient : true, 
    useNewUrlParser: true,
};
 
mongoose.connect('mongodb://localhost/renttherunwaysimilarproduct', { useNewUrlParser: true })
    .then( () => console.log('Connect to MYSQL Database'))
    .catch( err => console.error('Cannot connect to database'));

const similarproductSchema = mongoose.Schema({
    images : [String],
    productID: { type: String, Unique: true },
    productName: { type: String },
    designerName: { type: String },
    rentPrice: { type: Number, required: true },
    purchasePrice: { type: Number },
}, {
    timestamps : { createdAt: "created_at" }
});

const productSchema = mongoose.Schema({
    productID: { type: String, Unique: true },
    productName: { type: String },
    designerName: { type: String },
    facebook: { type: Number },
    similarProduct: [similarproductSchema]
   });

//const ReviewService = mongoose.model('Reviews', reviewSchema);
const ProductService = mongoose.model('Product', productSchema);

module.exports = ProductService;