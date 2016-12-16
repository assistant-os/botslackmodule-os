const fs = require('fs');
const path = require('path');


function AddInfoKey (ai) {


    this.ai = ai;
    this.id = 'infoaddkey';
    this.user = null;

    
    var value;
    var someKeys;
    var addinfokey = this;
    
    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'add info')) {
            console.log("test");
            console.log(words);
			if(words.length >= 4){
                console.log('Test 1');
                someKeys = [];
                value = '';
                for(var i = 2; i<words.length; i+=2){
                    someKeys.push(words[i]);
                    console.log('Test 3 :', someKeys);
                    if(words[i + 1] != 'and' && words[i + 1] != 'or'){
                        console.log('Test 4 :', words[i+1]);
                       for(var j = i+1; j < words.length; j++){
                        console.log('Test 5 :', j);
                            if(j == i+1){
                                value += words[j];
                                console.log('Test 6 :', value);
                            }else{
                                value += " " + words[j];
                                console.log('Test 7 :', value);
                            }
                        }     
                        break;                  
                    }
                }
                this.user = user;
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
        		
                for(var i = 0; i<someKeys.length; i++){
        		  json[someKeys[i]] = value;
                }
                fs.writeFile(path.join(__dirname, '../infoJson.json'), JSON.stringify(json), function (err){
                    if(err){
                        console.log('error: ', err);
                        return;
                    }
                    console.log('HOURRA!');
                    addinfokey.ai.say(addinfokey.user, 'The key(s) ' + someKeys.join(', ') + ' have been added');
                    addinfokey.user = null;
                });
        		
            });
        }
    };

}

module.exports = function (ai) {
    return [
        new AddInfoKey(ai)
    ];
};








