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
            console.log("MACHABUDA CA PASSE(length)");
            input = words[0];
            this.user = user;

            return true;
        }else{
            console.log("MACHABUDA CA PASSE(false)");
            return false;
        }

    };

    this.do = function () {
        if (this.user) {
            fs.readFile(path.join(__dirname, '../infoJson.json'), 'utf8', function (err, data) {
            console.log('file reading');
            if (err) {
                    if(err.code == "ENOENT")
                    {
                        getinfo.ai.say(getinfo.user, 'There is no key call ' + input);
                    }
                    else
                    {
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
            if(json.hasOwnProperty(input))
            {
                getinfo.ai.say(getinfo.user, 'The value(s) is: ' + json[input]);
            }else{
                getinfo.ai.say(getinfo.user, 'There is no any key call ' + input);
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