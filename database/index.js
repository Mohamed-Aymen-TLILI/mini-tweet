const mongoose = require ('mongoose');


mongoose.connect('mongodb+srv://****:****@cluster0-4guqr.mongodb.net/twitter?retryWrites=true&w=majority',{ 
        useNewUrlParser: true, useUnifiedTopology: true
 }).then(()=>console.log('connexion OK !'
)).catch(err=>console.log('error') );
