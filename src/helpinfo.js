function HelpInfo (ai) {

    this.ai = ai;
    this.id = 'helpinfo';
    this.user = null;



    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'help info')){
            this.user = user;
            return true;
        }else{
            return false;
        }
    };

    this.do = function () {
        console.log('help info');
        if (this.user) {
            this.ai.say(this.user, 'You have the command:\n add info <key> [and|or <key> ...] <value>\nhelp info\nget info <key>\ndelete info <key>\n <key>\nlist info\nhour[<place>]\nhelp hour');
            console.log('HelpInfo');
        }
        this.user = null;
    };
};

module.exports = function (ai) {
    return [
        new HelpInfo(ai)
    ];
};