var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	"productId": String,
	"productName": String,
	"salePrice": Number,
	"productImage": String,
	"productUrl": String,
	"productNum":Number,
	"checked":String
});

module.exports = mongoose.model('good', productSchema);