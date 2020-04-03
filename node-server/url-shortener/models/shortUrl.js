const mongoose = require('mongoose');
const shortId = require('shortid');

const shortUrlSchema = new mongoose.SchemaType({
    full: {
        type: string,
        require: true,
    },
    short: {
        type: string,
        require: true,
        default: shortId.generate
    },
    clicks: {
        type: number,
        require: true,
        default: 0
    }
})

module.exports = mongoose.model('shortUrl',shortUrlSchema);