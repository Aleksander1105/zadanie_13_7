var fs = require('fs');


fs.readdir('./','utf-8', function(err, files) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.writeFile('./text.txt', 'A tak wyglądają po zapisie!', function(err) {
    	if (err) throw err;
    	console.log('Zapisano!'.blue);
    	fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    		console.log('Dane po zapisie'.blue);
    		console.log(data);
    	});
    });
});