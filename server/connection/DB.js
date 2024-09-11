const mongoose=require('mongoose');

const dotenv=require('dotenv');
dotenv.config();


DB_USERNAME=process.env.DB_USERNAME;
DB_PASSWORD=process.env.DB_PASSWORD;

const db_link=`mongodb+srv://akhilesh4149yadav:yoql89ll2@cluster0.bidvlwq.mongodb.net/bookstore`;

const connectionWithDB=()=>{
    
mongoose
.connect( db_link, { useNewUrlParser: true, useUnifiedTopology: true })
.then(function(db){
    console.log("__ DB CONNECTED __");
})
.catch(function(err){
    console.log(err);
})

}

module.exports= connectionWithDB;
