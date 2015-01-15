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
    {name: 'Café Chic', consumer: {name: "johnson"}, productor: null},
    {name: 'Red Light', consumer: null, productor: {name: "callaghan"}},
    {name: 'Le Network', consumer: null, productor: null},
    {name: 'PM you !', consumer: {name: "Robert"}, productor: {name: "DADADA"}},
    {name: 'Chez Hortense', consumer: null, productor: null},
    {name: 'Le freedom', consumer: null, productor: null},
    {name: "Murphy's house", consumer: null, productor: null},
    {name: "la grande salle du 7ème", consumer: null, productor: null}
];

app.get('/bars', function (req, res) {
    res.send({bars: bars});
});


app.use(lessMiddleware(__dirname + '/'));
app.use(express.static(__dirname + '/'));

console.log("Please open http://localhost:3000/index.html");
app.listen(process.env.PORT || 3000);