const fs = require('fs');
const path = require('path');


function AddInfoKey (ai) {


    this.ai = ai;
    this.id = 'infoaddkey';
    this.user = null;

    var key;
    var value;
    var addinfokey = this;
    
    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'add info')) {
			if(words.length >= 4){
				key = words[2];
            	value = words[3]; 
            	for(var i = 4; i < words.length; i++){
            		value += ' ' + words[i];
				}

            	this.user = user;
            	console.log(user);
            	return true;
        	} else {
        		return false;
        	}
        } else {
            return false;
        }
    };

    this.do = function () {
        
        if (this.user) {
        	fs.readFile(path.join(__dirname, '../infoJson.json'), 'utf8', function (err, data) {
        		if (err) {
        			if(err.code != "ENOENT")
        			{
        				console.log('error:', err);
        				return;
        			}
        		}
				var json = {};
        		if (data && data.length != 0){
					json = JSON.parse(data);
        		}	
        		
        		json[key] = value;
        		
        		fs.writeFile(path.join(__dirname, '../infoJson.json'), JSON.stringify(json), function (err){
        			if(err){
        				console.log('error: ', err);
        				return;
        			}
        			console.log('HOURRA!');
        			addinfokey.ai.say(addinfokey.user, 'The key ' + key + ' has been added');
        			addinfokey.user = null;
        		});

        		console.log(data); 
        	});
       	}
    };

}

module.exports = function (ai) {
    return [
        new AddInfoKey(ai)
    ];
};








