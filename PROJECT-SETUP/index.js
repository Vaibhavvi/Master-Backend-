const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

// Sample route
app.get('/', (req,res) => {
    res.render('main', { title: 'Project Setup', message: 'Welcome to the Project Setup Day 06!' });
})

app.listen(PORT, () => {
    console.log(`Server run on http://localhost:${PORT}`)
})