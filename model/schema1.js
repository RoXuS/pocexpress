/**
 * Schema1 model
 */

/* Load module dependencies */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/* Repository */
var Schema1Repository = require("../model/schema1Repository.js");

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

/* Add method of repo */
Schema1Repository(Schema1);

 /* export model */
module.exports = mongoose.model("Schema1", Schema1);