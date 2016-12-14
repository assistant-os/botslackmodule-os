function Hour (ai) {

    this.ai = ai;
    this.id = 'hour';
    this.user = null;

    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'hour')){
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
            var timeH = date.getHours();
            var timeM = date.getMinutes();
            var timeS = date.getSeconds();

            this.ai.say(this.user, "The time is : " + timeH + "h " + timeM + "m " + timeS + "s");
        }
        this.user = null;
    };
}

module.exports = function (ai) {
    return [
        new Hour(ai)
    ];
};
