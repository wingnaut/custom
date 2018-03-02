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
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
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

        // Load the chat package again to account for any changes
        bot.loadChat();

      }
    

    
    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: 'drunkbØt',
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
        cmdDeletion: true,
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: false,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        historySkip: true,
        timeGuard: false,
        strictTimeGuard: true,
        maximumSongLength: 22,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        thorCommand: true,
        thorCooldown: 0,
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
        motdInterval: 11,
        motd: 'Temporary Message of the Day',
        filterChat: false,
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
        propsCommand: true,
        niceCommand: true,
        blacklists: {
            NSFW: 'https://rawgit.com/basicBot/custom/master/blacklists/NSFWlist.json',
            OP: 'https://rawgit.com/basicBot/custom/master/blacklists/OPlist.json',
            BANNED: 'https://rawgit.com/basicBot/custom/master/blacklists/BANNEDlist.json'
       
        }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
