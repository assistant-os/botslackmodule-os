function Hour (ai) {

    this.ai = ai;
    this.id = 'hour';
    this.user = null;

    var input;

    var hour = this;

    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'hour')){
            this.user = user;
            input = '';

            if(words.length >= 2){
                input = words[1];
                for(var i = 2; i<words.length; i++){   
                    input += " " + words[i];
                }
                console.log('input: ' + input);
                return true;
            }else{
                return true;
            }
            
        }else{
            return false;
        }
    };

    this.do = function () {
        console.log("Hour");
        if (this.user) {

            var date;
            var timeH;
            var timeM;
            var timeS;

            if(input == 'new york'){
                date = new Date();
                timeH = date.getUTCHours() - 5;
                timeM = date.getUTCMinutes();
                timeS = date.getUTCSeconds();

                hour.ai.say(hour.user, "The time in New York is : " + timeH + "h " + timeM + "m " + timeS + "s");
            }else if(input == 'saint pierre'){
                date = new Date();
                timeH = date.getUTCHours() + 4;
                timeM = date.getUTCMinutes();
                timeS = date.getUTCSeconds();

                hour.ai.say(hour.user, "The time in Saint Pierre is : " + timeH + "h " + timeM + "m " + timeS + "s");
            }else if(input == 'santiago de chili'){
                date = new Date();
                timeH = date.getUTCHours() - 3;
                timeM = date.getUTCMinutes();
                timeS = date.getUTCSeconds();

                hour.ai.say(hour.user, "The time in Santiago de Chili is : " + timeH + "h " + timeM + "m " + timeS + "s");
            }else if(input == 'stockholm'){
                date = new Date();
                timeH = date.getUTCHours() + 1;
                timeM = date.getUTCMinutes();
                timeS = date.getUTCSeconds();

                hour.ai.say(hour.user, "The time in Stockholm is : " + timeH + "h " + timeM + "m " + timeS + "s");
            }else if(input == ''){
                date = new Date();
                timeH = date.getHours();
                timeM = date.getMinutes();
                timeS = date.getSeconds();

                hour.ai.say(hour.user, "The time is : " + timeH + "h " + timeM + "m " + timeS + "s");
            }else{
                hour.ai.say(hour.user, 'We don\'t have this city yet. For more information enter "help hour"');
            }
        }
        hour.user = null;
    };
}

function HourNewYork (ai) {

    this.ai = ai;
    this.id = 'hournewyork';
    this.user = null;

    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'new york')){
            this.user = user;
            return true;
        }else{
            return false;
        }
    };

    this.do = function () {
        console.log("Hour");
        if (this.user) {
            var date = new Date();
            var timeHNY = date.getUTCHours() - 5;
            var timeMNY = date.getUTCMinutes();
            var timeSNY = date.getUTCSeconds();

            this.ai.say(this.user, "The time in New York is : " + timeHNY + "h " + timeMNY + "m " + timeSNY + "s");
            console.log('timeHNY');
        }
        this.user = null;
    };
}

function HourSaintPierre (ai) {

    this.ai = ai;
    this.id = 'saintpierre';
    this.user = null;

    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'saint pierre')){
            this.user = user;
            return true;
        } else {
            return false;
        }
    };

    this.do = function () {
        console.log("Hour");
        if (this.user) {
            var date = new Date();
            var timeHR = date.getUTCHours() + 4;
            var timeMR = date.getUTCMinutes();
            var timeSR = date.getUTCSeconds();

            this.ai.say(this.user, "The time in Saint Pierre is : " + timeHR + "h " + timeMR + "m " + timeSR + "s");
        }
        this.user = null;
    };
}

function HourSantiagoDeChili (ai) {

    this.ai = ai;
    this.id = 'hoursantiagodechili';
    this.user = null;

    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'santiago de chili')){
            this.user = user;
            return true;
        } else {
            return false;
        }
    };

    this.do = function () {
        console.log("Hour");
        if (this.user) {
            var date = new Date();
            var timeHC = date.getUTCHours() - 3;
            var timeMC = date.getUTCMinutes();
            var timeSC = date.getUTCSeconds();

            this.ai.say(this.user, "The time in Santiago De Chili is : " + timeHC + "h " + timeMC + "m " + timeSC + "s");
        }
        this.user = null;
    };
}

function HourStockholm(ai) {

    this.ai = ai;
    this.id = 'hourstockholm';
    this.user = null;

    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'stockholm')){
            this.user = user;
            return true;
        } else {
            return false;
        }
    };

    this.do = function () {
        console.log("Hour");
        if (this.user) {
            var date = new Date();
            var timeHS = date.getUTCHours() + 1;
            var timeMS = date.getUTCMinutes();
            var timeSS = date.getUTCSeconds();

            this.ai.say(this.user, "The time in Stockholm is : " + timeHS + "h " + timeMS + "m " + timeSS + "s");
        }
        this.user = null;
    };
}

function HelpHour (ai) {

    this.ai = ai;
    this.id = 'helphour';
    this.user = null;

    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'help hour')){
            this.user = user;
            return true;
        } else {
            return false;
        }
    };

    this.do = function () {
        console.log("Hour");
        if (this.user) {

            this.ai.say(this.user, 'You have the cities:\n new york\nstockholm\nsantiago de chili\nsaint pierre\n');
        }
        this.user = null;
    };
}










module.exports = function (ai) {
    return [
        new Hour(ai), new HourNewYork(ai), new HourSaintPierre(ai), new HourSantiagoDeChili(ai), new HourStockholm(ai), new HelpHour(ai)
    ];
};

