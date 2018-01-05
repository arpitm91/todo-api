const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
	if(err){
		return console.log('Unable to connect to Mongo DB server');
	}

	console.log('connected to Mongo DB server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5a4ff4b276e1b833e28df21e')
	// }).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// }, (err)=>{
	// 	console.log('Unable to fetch todos',err);
	// });

	db.collection('Users').find({name:'Arpit'}).count().then((count)=>{
		console.log('Users count :', count);
	}, (err)=>{
		console.log('Unable to fetch Users',err);
	});

	db.close();
});