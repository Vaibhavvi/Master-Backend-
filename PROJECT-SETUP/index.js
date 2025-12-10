const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

// Sample route
app.get('/', (req,res) => {
    res.render('main', { title: 'Project Setup', message: 'Welcome to the Project Setup Day 06!' });
})

app.get('/profile/:username', (req,res) => {
    const username = req.params.username;
    res.send("chal rha hai");
    console.log(username);
})

app.get('/about/:username/:age', (req,res) => {
    const username = req.params.username;
    const age = req.params.age;
    res.send(username + " " + age);
    console.log(username + " " + age);
})
app.listen(PORT, () => {
    console.log(`Server run on http://localhost:${PORT}`)
})