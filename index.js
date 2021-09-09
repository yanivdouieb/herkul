const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
var rn = require('random-number');
var randomLetter = require('random-letters');
const editJsonFile = require("edit-json-file");

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('dist'));
app.use('css', express.static('css'));
app.use('js', express.static('js'));
app.use('img', express.static('img'));

// WEBSITE
app.get('/', (req, res) => {
    res.render('index');
})
app.get('/room/connect/', (req, res) => {
    res.render('room-connect');
})
app.get('/room/new/', (req, res) => {
    res.render('room-new');
})

//API
app.post('/api/room/new/', (req, res) => {
    let room_name = req.headers.room_name;
    let room_password = req.headers.room_password;
    let uuid_api = uuidv4()
    var options_uuid = {
        min:  100
      , max:  999
      , integer: true
      }
    let uuid = `${rn(options_uuid)}-${randomLetter(3).toUpperCase()}`
    let db = editJsonFile("./db/rooms.json");
    db.set(`${uuid}.room_name`, room_name);
    db.set(`${uuid}.room_password`, room_password);
    db.set(`${uuid}.uuid_api`, uuid_api);
    res.json({uuid: uuid, uuid_api: uuid_api});
    db.save()
})
app.get('/api/rooms/:uuid', (req, res) => {
    let uuid = req.params.uuid;
    let db = editJsonFile("./db/rooms.json");
    let room = db.get(`${uuid}`);
    if(room) {
        res.json(room);
    }else{
        res.json({error: "Room not found"});
    }
})

app.get('*', (req, res) => {
    res.render('404');
})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})