(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "wingnaut";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['nibba', 'nibbas', 'fag', 'spic'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };

        //Props command1:

        bot.commands.propsCommand = {
            command: 'props',
            rank: 'user',
            type: 'exact',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat(chat.un +" just gave props to @"+ API.getDJ().username +" for playing a great track!");
                }
            }
        }

        //Props command2:
        bot.commands['props'] = new Command(true,0,"props|nice|dope :: Show some appreciation for the DJ! Any rank.",function(){
    const dj = getUser(room.booth.currentDJ);
    let msg = "";
    if (!room || !~dj || (~dj && arguments[1] === dj.username)) return;
    if (arguments[2]) {
        msg = "dope";
    } else {
        //props list
        const props = [
            "dope", "tight",
            ":fire:", "I came a little",
            "nips just got hard", "this is rad",
            "just came all over my hand", "awesome spin",
            "sexy spin", "fuckyes",
            "hotness", "tune"
        ];
        msg = props[Math.floor(Math.random() * props.length)];
    }
    if (msg.trim() !== "")
        sendMessage("/me @" + arguments[1] + " gave props to @" + dj.username + ", \"" + msg + "!\"");
});
        //Roll Command: 
        bot.commands['roll'] = new Command(true,0,"roll [<1-10>|<1-20d1-999999999>] :: Returns a random number with given amount of digits, or rolls dice. Default: 2 digits. Any rank.",function(){
    if (arguments.length !== 3) return;
    let data = arguments[1];
    let splitmsg = arguments[2];

    let sndmsg = "";
    if (splitmsg[1] && arrFind(splitmsg[1],'d') > 0 && arrFind(splitmsg[1],'d') < 3 && /^(?:\d{1,2}d\d{1,9})$/.test(splitmsg[1])) {


        let d,rolls,sides,sum,die;
        d = splitmsg[1].match(/^(?:\d{1,2}d\d{1,9})$/)[0].split('d');
        rolls = parseInt(d[0]);
        sides = parseInt(d[1]);
        if (rolls > 20 || rolls < 1)
            rolls = 2;
        if (sides > 999999999 || sides < 1)
            sides = 6;
        sum = 0;
        die = (rolls > 1 ? "dice" : "die");

        sndmsg = '@'+data.un+' rolled '+rolls+' '+sides+'-sided '+die+' and got: '

        for (;rolls>=1;rolls--) {
            sum += Math.floor((Math.random()*sides)+1);
        }


        sndmsg += sum.toString();


    } else {
        let roll = 2;
        let combos = [' [dubs!]',' [trips!]',' [quads!]',' [quints!]',' [sexts!]',' [septs!!]',' [octs!!!]',' [nons!!!!]',' [decs!!!!!]'];
        let dig = parseInt(splitmsg[1]);
        if (!isNaN(dig) && dig > 0 && dig < 11) roll = dig;
        let rollnum = Math.floor(Math.random() * Math.pow(10, roll)).toString();
        rollnum = "0".repeat(roll - rollnum.length) + rollnum;
        sndmsg = '@' + data.un + ' rolled: ';
        sndmsg += rollnum;

        let j = 0,
            i,
            repeatcheck = rollnum[rollnum.length - 1];
            
        for (i = (rollnum.length - 1); i > -1; i--) {
            if (rollnum[i] === repeatcheck)
                j++;
            else
                break;
        }
        if (j > 1 && combos[j - 2] !== undefined) {
            sndmsg += combos[j - 2]
        } else if (rollnum.substr(rollnum.length - 2) === '69') {
            sndmsg += ' hehe xd';
        }
    }
    sendMessage(sndmsg);
});


        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: 'drunkBot',
        language: 'english',
        chatLink: 'https://rawgit.com/basicBot/source/master/lang/en.json',
        scriptLink: 'https://rawgit.com/basicBot/source/master/basicBot.js',
        roomLock: false, // Requires an extension to re-load the script
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        autowoot: true,
        autoskip: false,
        smartSkip: true,
        cmdDeletion: false,
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        historySkip: false,
        timeGuard: true,
        strictTimeGuard: true,
        maximumSongLength: 22,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        thorCommand: true,
        thorCooldown: 2,
        skipPosition: 1,
        skipReasons: [
            ['theme', 'This song does not fit the room theme. '],
            ['op', 'This song is on the OP list. '],
            ['history', 'This song is in the history. '],
            ['mix', 'You played a mix, which is against the rules. '],
            ['sound', 'The song you played had bad sound quality or no sound. '],
            ['nsfw', 'The song you contained was NSFW (image or sound). '],
            ['unavailable', 'The song you played was not available for some users. ']
        ],
        afkpositionCheck: 15,
        afkRankCheck: 'ambassador',
        motdEnabled: false,
        motdInterval: 5,
        motd: 'Temporary Message of the Day',
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: '!',
        blacklists: {
            NSFW: 'https://rawgit.com/basicBot/custom/master/blacklists/NSFWlist.json',
            OP: 'https://rawgit.com/basicBot/custom/master/blacklists/OPlist.json',
            BANNED: 'https://rawgit.com/basicBot/custom/master/blacklists/BANNEDlist.json'
        }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
