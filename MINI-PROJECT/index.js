const express = require('express');
const app = express();
const path = require('path');
const { title } = require('process');
const fs = require('fs');


// Middleware and Configurations
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



const PORT = 3000;

app.get('/', (req,res) => {
   fs.readdir(`./files`, function(err, files){
    res.render('main', {files: files});
   })
});

app.get('/files/:filename', (req,res)=> {
   const filename = req.params.filename;
   fs.readFile(`./files/${filename}`, 'utf8', function(err, data){
    if (err) {
        return res.status(404).send('File not found');
    }
      res.render('readContainer', {filename: filename, content: data});
   })
})

app.post('/create', (req,res) => {
   fs.writeFile(`./files/${req.body.title.split(' ').join(' ')}`, req.body.description, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
    res.redirect('/');
   });
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})