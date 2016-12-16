const fs = require('fs');
const path = require('path');


function GetInfo (ai) {

    this.ai = ai;
    this.id = 'get info';
    this.user = null;

    var getinfo = this;

    var input;




    


    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'get info')){
            console.log("MACHABUDA CA PASSE(get info)");
            if(words.length === 3){
                input = words[2];
            }
            else{
                return false;
            }

            this.user = user;
            return true;

        }else if(words.length == 1){
            console.log("Enter in the key in get info");
            input = words[0];
            console.log('input: ' + words[0]);

            var data = fs.readFileSync(path.join(__dirname, '../infoJson.json'), 'utf8');

            console.log('file reading in the valid of get info');
            if (data.length == 0){
                return false;
            }   
                        
            var json = JSON.parse(data);    
            console.log('send info in the valid of get info');
            if(json.hasOwnProperty(input))
            {
                getinfo.user = user;
                console.log('CA PASSE ICI APRES LE USER DU JSON')
                return true;
             }else{
                return false;
            }
        }else{
            console.log("MACHABUDA(false)");
            return false;
        }

    };

    this.do = function () {
        console.log('totro');
        if (this.user) {
            console.log('tatra');
            fs.readFile(path.join(__dirname, '../infoJson.json'), 'utf8', function (err, data) {
            console.log('file reading');
                if (err) {
                    if(err.code == "ENOENT")
                    {
                        getinfo.ai.say(getinfo.user, 'There is no key call ' + input);
                    }
                    else{
                        console.log('error:', err);
                    }
                    return;
                }
                var json = {};

                if (data.length != 0){

                    json = JSON.parse(data);
                    console.log('read info');
                }   
                console.log('send info');
                if(json.hasOwnProperty(input)){
                    getinfo.ai.say(getinfo.user, 'The value(s) is: ' + json[input]);
                }else{
                    getinfo.ai.say(getinfo.user, 'There is no key call ' + input);
                }
                    
                    
                getinfo.user = null;

                
            });
        }
    };


};


module.exports = function (ai) {
    return [
        new GetInfo(ai)
    ];
};