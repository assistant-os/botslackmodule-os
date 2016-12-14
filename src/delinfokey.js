const fs = require('fs');
const path = require('path');


function DelInfoKey (ai) {

    this.ai = ai;
    this.id = 'delinfokey';
    this.user = null;

    var delinfokey = this;

    var input;


    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'delete info')){

            if(words.length === 3){
                input = words[2];
            }
            else
            {
                return false;
            }

            this.user = user;
            return true;
        } else {
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
                        delinfokey.ai.say(delinfokey.user, 'There is no key call ' + input);
                    }
                    else
                    {
                        console.log('error:', err);
                    }
                    return;
                }
                
                console.log('get info 3');


                var json = {};

                if (data.length != 0){

                    json = JSON.parse(data);
                    console.log('read info');
                }   
                
                var value = json[input];

                    console.log('send info');
                    if(json.hasOwnProperty(input))
                    {
                        delete json[input];
                        delinfokey.ai.say(delinfokey.user, 'The ' + input + ' has been deleted');

                        fs.writeFile(path.join(__dirname, '../infoJson.json'), JSON.stringify(json), function (err){
                            if(err){
                                console.log('error: ', err);
                                return;
                            }
                    
                        });
                        

                    }else{
                        delinfokey.ai.say(delinfokey.user, 'There is not a key call ' + input);
                    }

                
                
                delinfokey.user = null;

                
            });
        }
    };


};


module.exports = function (ai) {
    return [
        new DelInfoKey(ai)
    ];
};