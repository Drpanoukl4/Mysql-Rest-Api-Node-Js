import express from "express";
import localhost from "os";
import { pool } from "./db.js";


const app = express();
app.use(express.json());

//Welcome
app.get(("/"), async (req, res) => {

res.send("Welcome To My First SQL Rest APi")

});

//Get
app.get(("/data"), async (req, res) => { 

const [data] = await pool.query('SELECT * FROM datos')

res.json(data)
    
});

app.get(("/data/:id"), async (req, res) => {

const id = req.params.id

const [data] = await pool.query('SELECT * FROM datos WHERE id = (?)',[id])
    
res.json(data[0])
        
});

//Post
app.post(("/data"), async (req, res) => {

const {name, info} = req.body
await pool.query('INSERT INTO datos (name, info) VALUES (?, ?)', [name, info])

res.send("Post Susscessfuly")


});

//Put
app.put(("/data/:id"), async (req, res) => {


const id = req.params.id
const {name, info} = req.body
    
await pool.query('UPDATE datos SET name = (?), info = (?) WHERE id = (?)', [name, info, id])
    
res.send(`Editing table with id ${id}`)

});


//Delete
app.delete(("/data/:id"),async (req, res) => {

const id = req.params.id

await pool.query('DELETE FROM datos WHERE id = (?)',[id])
        
res.send(`Susscessful deleting of table with id ${id}`)



});



app.listen(3000, localhost, () => {

console.log("Listening on port ",3000);

});