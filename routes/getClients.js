var express = require('express');
var router = express.Router();
var cors = require('cors');
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

    //GET CLIENTNAMES IN CLIENTS TABLE
    var InsertQuerry = `SELECT * FROM clients`;
    client.query(InsertQuerry).then((results)=>{
        res.send(JSON.stringify(results.rows));
     console.log('get clients names in database')
    }).catch((err)=>{
       console.log(err)
    });
})
module.exports = router

