/**
 * Schema1 model
 */

/* Load module dependencies */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/* Schema1 */
var Schema1 = new Schema(
    {
        title: {
			type: Date
		},
        author: {
			type: String,
			default: 'Anon'
        }
    }
);

 /* export model */
module.exports = mongoose.model('Schema1', Schema1);