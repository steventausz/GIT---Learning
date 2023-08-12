const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"public","index.html"))
})




app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
})