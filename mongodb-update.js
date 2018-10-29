// var MongoClient=require('mongodb').MongoClient;
const {MongoClient , ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
if(err){
   return console.log('unable to connect to mongodb');
}
console.log('connected to mongo');



db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bd6b6800326b82ed8522bce')    
},{
    $set:{
    completed:true
}
},{
    $inc:{
        age: 1
    }
},{
    returnOriginal: false
}).then((res)=>{
    console.log(res);
});

db.close();
});
