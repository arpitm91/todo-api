const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
	if(err){
		return console.log('Unable to connect to Mongo DB server');
	}

	console.log('connected to Mongo DB server');

	//delete many
	// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result =>{
	// 	console.log(result);
	// }))

	//delete one
	db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result =>{
		console.log(result);
	}))

	//findOneAndDelete
	db.collection('Todos').findOneAndDelete({completed: false}).then((result =>{
		console.log(result);
	}))

	db.close();
});