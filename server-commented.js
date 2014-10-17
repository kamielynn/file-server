//include built-in modules http and fs ('file system')
var http = require('http');
var fs = require('fs');

//create a node server using the http module
http.createServer(function (req, res) {
	fs.readFile('data.txt', function readData(err, data){
  		//set the HTTP status response code to 200 = success 
  		//set the content-type to 'text/plain'
  		res.writeHead(200, {'Content-Type': 'text/plain'});
	//output the data in the response
	res.end(data);
	});
 }).listen(9000, '127.0.0.1');

// log it
console.log('Server running at http://127.0.0.1:9000/');