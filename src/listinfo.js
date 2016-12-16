const fs = require('fs');
const path = require('path');


function ListInfo (ai) {

    this.ai = ai;
    this.id = 'listinfo';
    this.user = null;

    var listinfo = this;

    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'list info')){
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
                    if(err.code != "ENOENT")
                    {
                       console.log('error:', err);
                    }
                    return;
                }
                
                var json = {};

                if (data.length != 0){

                    json = JSON.parse(data);
                    console.log('read info');
                    console.log('send info');
                    for(var i in json)
                    {
                        listinfo.ai.say(listinfo.user,  i + ': '+ json[i] );
                    }
                }   
                listinfo.user = null;        
            });
        }
    };


    

};

module.exports = function (ai) {
        return [
            new ListInfo(ai)
        ];
    };