var MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
if(err){
   return console.log('unable to connect to mongodb');
}
console.log('connected to mongo');


// deleteMany
// db.collection('Todos').deleteMany({text: 'Something to do'}).then((res)=>{
//     console.log(res);
// });


// deleteOne works same except it deletes first one matching the criteria



//findOneAndDelete
db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
    console.log(res);
});

db.close();
});
