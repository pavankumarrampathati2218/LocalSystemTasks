var express = require('express');
var router = express.Router();
const { Client } = require('pg');
const client = new Client({
    user : 'postgres',
    host : 'localhost',
    database : 'postgres',
    password : 'Pav@12345',
    port : 5432
});

client.connect()
router.post('',()=>{
    //INSERT CLIENTS TABLE
   /* var InsertQuerry = `CREATE TABLE clients(clientid VARCHAR,clientname VARCHAR);`;
    client.query(InsertQuerry).then((results)=>{
     console.log('clients table inserted in database')
    }).catch((err)=>{
       console.log(err)
    }); */

    //INSERT CLIENTNAMES IN CLIENTS TABLE
    var InsertQuerry = `INSERT INTO clients(clientid, clientname) VALUES('1','PAVAN'),('2','KUMAR'),('3','UMA')`;
    client.query(InsertQuerry).then((results)=>{
     console.log('clients names is inserted in database')
    }).catch((err)=>{
       console.log(err)
    });
})
module.exports = router

