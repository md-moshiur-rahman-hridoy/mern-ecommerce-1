const express = require('express');
const app = express();




app.get("/test", (req, res)=>{
    res.status(200).send({
        message: 'API is working fine!'
    });
});

app.listen(5000, ()=>{
    console.log(`Server is running at http://localhost:5000`);
});