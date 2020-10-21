var EventSource = require('eventsource')
var express = require('express');
var app = express();

latest = null

const evtSource = new EventSource("https://www.blaseball.com/events/streamData");

evtSource.onmessage = function(event) {
    latest = JSON.parse(event.data)
}

app.get("/api/v1/latest/streamData", function(req, res) {
    res.json(latest)
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("app listening at http://%s:%s", host, port)
 })
