var EventSource = require('eventsource')
var express = require('express');
var app = express();

latest = null
games = null
leagues = null
temporal = null
fights = null

const evtSource = new EventSource("https://www.blaseball.com/events/streamData");

evtSource.onmessage = function(event) {
    data = JSON.parse(event.data);
    console.log(data);
    if (latest == null) {
        latest = data;
    }
    if (data.value.games != null) {
        games = data.value.games;
        latest.value.games = data.value.games;
    }
    if (data.value.leagues != null) {
        leagues = data.value.leagues;
        latest.value.leagues = data.value.leagues;
    }
    if (data.value.temporal != null) {
        temporal = data.value.temporal;
        latest.value.temporal = data.value.temporal;
    }
    if (data.value.fights != null) {
        fights = data.value.fights;
        latest.value.fights = data.value.fights;
    }
}

app.get("/api/v1/latest/streamData", function(req, res) {
    res.json(latest)
})

app.get("/api/v2/streamData/latest", function(req, res) {
    res.json(latest)
})
app.get("/api/v2/streamData/games", function(req, res) {
    res.json(games)
})
app.get("/api/v2/streamData/leagues", function(req, res) {
    res.json(leagues)
})
app.get("/api/v2/streamData/temporal", function(req, res) {
    res.json(temporal)
})
app.get("/api/v2/streamData/fights", function(req, res) {
    res.json(fights)
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("app listening at http://%s:%s", host, port)
 })
