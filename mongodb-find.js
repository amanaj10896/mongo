var MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
if(err){
   return console.log('unable to connect to mongodb');
}
console.log('connected to mongo');
 db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs));
 },(err)=>{
     console.log('unable to fetch',err);
 });

// db.close();
});