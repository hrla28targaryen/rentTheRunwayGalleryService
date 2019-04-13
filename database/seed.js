const mongoose = require('mongoose');
var Promise = require("bluebird");
const Product = require('./index.js');
const s3 = require('./s3.js');

const s3url = 'https://s3.amazonaws.com/hrla28renttherunway/';

const designerPool = [
    'Alexander McQueen', 'Betsey Johnson', 'Emilio Pucci', 'Miuccia Prada', 'Riccardo Tisci', 'Le Corbusier', 'Coco Chanel'
];
   
const itemNamePool= [
    'Chill', 'Lit', 'n', 'Mara', 'Delicate', '1004', 'Payton', 'Chiffon', 'Cropped', 'Column', 'Wrap', 'Isabella', 'Lia',
    'Metallic', 'Deconstructed', 'Hetty', 'Track', 'Nell', 'Ella', 'Tank', 'Tie', 'Wild', 'WildFlower', 'Tiger', 'Ellii',
    'Sha', 'Ira', 'Miya', 'dark', 'light'
];
   
const cataPool = [
    'Dress', 'Bag', 'Earrings', 'Top', 'Pants'
];

const similarDressDesigner = ['Carven','L.K. Bennett', 'Milly', 'Marchesa Notte', 'Parker', 'Rebecca Taylor', 'Rebecca Taylor', 'Saloni', 'Snider', 'Theia'];

const similarDressNames = ['Ambery Poppy Dress', 'Tilly-B Dress', 'Jennifer Combo Dress', 'Iris Print Anna Dress', 'Sleeveless Houndstooth Dress',  ];

const similarDressID = ['CVN38', 'LKB18', 'ML272', 'MN145', 'PK342', 'RT181', 'RT190', 'SAL60', 'SND4', 'TA132'];

const seedFunction = () => {

    // for(var i = 0; i < 100; i++) {
        var i = 10;
        let productID = 'HRLA';
        if (i.toString().length === 1) {
            productID += '00' + i.toString();
        } else if (i.toString().length === 2) {
            productID += '0' + i.toString();
        } else if (i.toString().length === 3) {
            productID += i.toString();
        }

        let productName = `${itemNamePool[Math.floor(Math.random() * itemNamePool.length)]} Dress`;
        let designerName = `${designerPool[Math.floor(Math.random() * designerPool.length)]}`;
        let facebook = Math.floor(Math.random() * 1000);
        let rentPrice = 80 + 10 * Math.round(Math.random() * 5);
        let purchasePrice = rentPrice * 5;

        let similarProduct = [];


        s3.listObjectsDress()
            .then( data => {
                let imageKeyArr = [];
                for (let k = 2; k < data.Contents.length; k++) {
                    if(data.Contents[k].Key.includes('jpg')){
                        imageKeyArr.push(s3url + data.Contents[k].Key);
                    } else {
                        let obj = {
                            productName: similarDressNames[Math.floor(Math.random() * similarDressNames.length)],
                            designerName: similarDressDesigner[Math.floor(Math.random() * similarDressDesigner.length)],
                            rentPrice: 80 + 10 * Math.round(Math.random() * 5),
                            purchasePrice: (80 + 10 * Math.round(Math.random() * 5)) * 5,
                            images: imageKeyArr
                        };
                        similarProduct.push(obj);
                        imageKeyArr = [];
                    }
                }

                let obj = {
                    productName: similarDressNames[Math.floor(Math.random() * similarDressNames.length)],
                    designerName: similarDressDesigner[Math.floor(Math.random() * similarDressDesigner.length)],
                    rentPrice: 80 + 10 * Math.round(Math.random() * 5),
                    purchasePrice: (80 + 10 * Math.round(Math.random() * 5)) * 5,
                    images: imageKeyArr
                };
                similarProduct.push(obj);
                imageKeyArr = [];

                return similarProduct;
            })
            .then( (similarProduct) => {
                let prod = new Product({
                    productID: productID, //through for loop
                    productName: productName, //random generator,
                    purchasePrice: purchasePrice,
                    designerName: designerName, //random gen
                    facebook: facebook, // random gen
                    similarProduct: similarProduct
                });
            
                prod.save()
                    .then(() => {
                        Product.findOne({ productID }) // just to see if the prod above is saved
                        .then(productWithGallery => {
                            console.log('Exists in database!');
                            console.log(productWithGallery);
                        });
                    }).then( () => {
                        console.log('Database seeded!');
                        mongoose.connection.close();
                    })
                    .catch( err => console.log('Didnt create anything', err));
            })
};

seedFunction();

