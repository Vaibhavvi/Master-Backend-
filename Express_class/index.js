const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log('Middleware Executed');
    next();  // This will move to the next middleware or route handler
})

app.get('/', (req,res,next) => {
    res.send('Hey Vaibhav Once Again We are Learning Express.js with More Details and Working Examples!');
    return next();
})

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
})