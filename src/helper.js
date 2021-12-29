const fs = require('fs')

exports.mkdirSync = function (dir, removeContent) {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    } else if (removeContent) {
        fs.rmdirSync(dir, {recursive:true, force: true})
        fs.mkdirSync(dir, { recursive: true });
    }
}

exports.log = console
