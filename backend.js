const Datastore = require('nedb');
const crypto = require("crypto");

let db = new Datastore({ filename: 'storage.db', autoload: true });

function addList(title) {
    const id = crypto.randomBytes(16).toString("hex");
    let doc = ({
        title,
        id,
        cards: []
    })
    return new Promise(resolve => {
        db.insert(doc, function (err, docs) {
            resolve(docs)
        });
    });
}

function getAll() {
    return new Promise(resolve => {
        db.find({}, function (err, docs) {
            resolve(docs);
        });
    });
}

module.exports.addList = addList;
module.exports.getAll = getAll;
