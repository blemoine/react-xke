var express = require('express');
var browserify = require('browserify-middleware');
var lessMiddleware = require('less-middleware');

var app = express();

var packages = ['jquery', 'react', 'lodash', 'flux'];

app.get('/js/lib.js', browserify(packages, {
    cache: true,
    precompile: true
}));

app.get('/js/bundle.js', browserify('./scripts/app.jsx', {
    external: packages,
    transform: [[
        "reactify",
        {
            "es6": true,
            "strip-types": true
        }
    ]]
}));

var bars = [
    {id: 1, name: 'Café Chic', consumer: "Johnson", producer: null},
    {id: 2, name: 'Red Light', consumer: null, producer: "Callaghan"},
    {id: 3, name: 'Le Network', consumer: null, producer: null},
    {id: 4, name: 'PM you !', consumer: "Robert", producer: "Mikhaïl"},
    {id: 5, name: 'Chez Hortense', consumer: null, producer: null},
    {id: 6, name: 'Le freedom', consumer: null, producer: null},
    {id: 7, name: "Murphy's house", consumer: null, producer: null},
    {id: 8, name: "la grande salle du 7ème", consumer: null, producer: null}
];

app.get('/bars', function (req, res) {
    res.send({bars: bars});
});


app.use(lessMiddleware(__dirname + '/'));
app.use(express.static(__dirname + '/'));

console.log("Please open http://localhost:3000/index.html");
app.listen(process.env.PORT || 3000);