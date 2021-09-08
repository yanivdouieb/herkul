const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('dist'));
app.use('css', express.static('css'));
app.use('js', express.static('js'));
app.use('img', express.static('img'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/room/connect/', (req, res) => {
    res.render('room-connect');
})

app.get('*', (req, res) => {
    res.render('404');
})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})