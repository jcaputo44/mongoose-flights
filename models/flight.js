const mongoose = require('mongoose');
//optional shortcut to mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        default: 'DEN',
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        required: true
    },
    departs: {
        type: Date
    }, 
});


module.exports = mongoose.model('Flight', flightSchema);