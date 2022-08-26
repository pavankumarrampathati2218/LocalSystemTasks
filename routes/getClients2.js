var express = require('express');
var router = express.Router();
var cors = require('cors')
const { Client } = require('pg');
const client = new Client({
    user : 'postgres',
    host : 'localhost',
    database : 'postgres',
    password : 'Pav@12345',
    port : 5432
});

client.connect()
router.use(cors())
router.get('',(req,res)=>{
    //var InsertQuerry = `(SELECT * FROM clients WHERE clientname = '')`
    var InsertQuerry = `SELECT * FROM clients`;
    client.query(InsertQuerry).then((results)=>{
     res.send(JSON.stringify(results.rows))
     console.log('clients names is inserted in database')
    }).catch((err)=>{
       console.log(err)
    });
})
module.exports = router

