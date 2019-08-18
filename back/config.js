const path = require('path');

const rootPath = __dirname;

const dbUrl = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/place': 'mongodb://localhost/place';

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    dbUrl,
    mongoOptions: {
        useNewUrlParser: true,
        useCreateIndex: true
    }
};
