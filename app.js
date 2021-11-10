const express = require('express');
const port = 3000;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');

});

app.get('/connect4', (request, response) => {
    response.sendFile(__dirname + '/views/connect4.html');

});

app.get('/snake', (request, response) => {
    response.sendFile(__dirname + '/views/snake.html');

});
app.listen(port, () => {
    console.log('Server is running');
})