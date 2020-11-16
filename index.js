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
    latest = JSON.parse(event.data);
    console.log(latest);
    if (latest.value.games != null)
        games = latest;
    if (latest.value.leagues != null)
        leagues = latest;
    if (latest.value.temporal != null)
        temporal = latest;
    if (latest.value.fights != null)
        fights = latest;
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
