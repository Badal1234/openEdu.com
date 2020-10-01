const { string, object } = require('prop-types');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url)

module.exports.createCollection = ({db = string, collection = string}) => {
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url,(err,db)=>{
            var dbo = db.db(db)
            dbo.createCollection(collection,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })

        })
    })
}

module.exports.insertElement = ({db = string, obj = object, collection = string }) => {
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(db);
            
            dbo.collection(collection).insertOne(obj, function(err, res) {
              if(err) reject(err);
              resolve(res)
            });
          });
    })
}