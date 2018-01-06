const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
	if(err){
		return console.log('Unable to connect to Mongo DB server');
	}

	console.log('connected to Mongo DB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5a502436c3e1de14c104b376')
	// }, {
	// 	$set:{
	// 		completed: false
	// 	}
	// }, {
	// 	returnOriginal :false
	// }).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5a4ff5cd5b55b033e3924a98')
	}, {
		$set:{
			name: 'Arpit'
		},
		$inc: {
			age: -1
		}
	}, {
		returnOriginal :false
	}).then((result)=>{
		console.log(result);
	});

	db.close();
});