const functions = require("firebase-functions");
const app = require('express')();

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore().collection("todos");

//Todos: create Todo

//Todo: get Todo

app.get("/todos", function(request, response){

    db.get()
    .then(function(docs){
        let todos = [];

        docs.forEach(function(doc){
            todos.push({id: doc.id, description: doc.data().description});
        })
        response.json(todos);
    })
    

});

app.post("/todos", function(request, response){

     const newTodo = {
         description:request.body.description
     }
    db.add(newTodo)
    .then(function(){
        response.status(200).json({mss:"feito"})
    })
    
});

exports.api = functions.https.onRequest(app);
