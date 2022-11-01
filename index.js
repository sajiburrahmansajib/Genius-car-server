const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


//Middle ware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Genius Car Server In Running')
});

app.listen(port, () => {
    console.log(`Genius Car Server Is Running On Port : ${port}`);
})