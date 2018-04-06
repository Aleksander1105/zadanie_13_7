var fs = require('fs');
var colors = require('colors');


fs.readdir('./','utf-8', function(err, files) {
    if (err) throw err;
    console.log('Before command'.red);
    fs.writeFile('./text.txt', function(err) {
    	if (err) throw err;
    	console.log('Done!'.red);
    	fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            if (err) throw err;
    		console.log('The file is composed of: '.red + data);
    	});
    });
});