const fs = require('fs');

exports.fileRead = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, 'utf-8', (error, data) => {
            if (error) {
                return fail(error);
            }
            return success(data);
        });
    });
};

exports.fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, 'utf-8', (error) => {
            if (error) {
                return fail(error);
            }
            return success();
        });
    });
};