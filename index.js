const express = require('express');
const DataStore = require('nedb');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));


app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new DataStore('database.db');
database.loadDatabase();

app.post('/api', (request,response) => {
  console.log("request received");
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);

  response.json({
    status: "success",
    latitude: data.lat,
    longitude: data.lon,
    post: data.post,
    timestamp: timestamp
  });
});

app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});