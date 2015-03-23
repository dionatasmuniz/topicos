var http = require('http');
var fs = require('fs');

var _readPage = function (file, cb) {
    fs.readFile(__dirname + file, function(err, data){
        if (err)
            return console.log(err);

        return cb(data);
    });
}

var _writePage = function (res, data, statusCode) {
    res.writeHeader(statusCode || 200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
}

var server = http.createServer(function(req, res){
    switch (req.url) {
        case '/':
            _readPage('/index.html', function (data) {
                _writePage(res, data);
            });
            break;
        case '/login':
            _readPage('/login.html', function (data) {
                _writePage(res, data);
            });
            break;
        default:
            _readPage('/index.html', function (data) {
                _writePage(res, data, 404);
            });
            break;
    }
});

server.listen(3000, function(){
  console.log('Listen 3000');
});