var MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
if(err){
   return console.log('unable to connect to mongodb');
}
console.log('connected to mongo');
db.collection('Users').insertOne({
    text:'Something to do',
    completed: false
},(err,result)=>{
    if(err){
        return console.log('unable to insert to mongodb', err);
     }
     console.log(result.ops[0]._id.getTimestamp());
})

db.close();
});
