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
        // ***** STAFF COMMANDS *****  
        
        // arkey
        bot.commands.arkeyCommand = {
          command: 'arkey',  
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("https://media.giphy.com/media/xzdiSnh6uuL5u/giphy.gif");
            }
          }
        };
        
        // B-1
        bot.commands.b1Command = {
          command: 'b1',  
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("https://media.discordapp.net/attachments/423148585853648909/493617422948106251/Moe_memerap.png");
            }
          }
        };
        
                
        // Jif Command
        bot.commands.jifCommand = {
          command: 'jif',  
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("https://i.giphy.com/eU60UxWVBMuEE.gif");
            }
          }
        };      
                
        // Loki Command
        bot.commands.lokiCommand = {
          command: 'loki',  
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("https://data.whicdn.com/images/118772733/original.gif");
            }
          }
        }; 
        
        //  Sparky Command
        bot.commands.sparkyCommand = {
          command: 'sparky',  
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("https://66.media.tumblr.com/6d3bbdb8966afc2cf52ecbeb2a5b0b4e/tumblr_ocmrr9vMkl1skn0b9o1_400.gif");
            }
          }
        };      
        
        
        // END STAFF COMMANDS
        
        
        //Props command 1
        bot.commands.propsCommand = {
            command: 'props',
            rank: 'user',
            type: 'exact',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat(chat.un +" just gave props to @"+ API.getDJ().username +" for playing a dope track!");
                }
            }
        };

        //Props command2:
        bot.commands.niceCommand = {
            command: ['nice', 'tight', 'dope'],
            rank: 'user',
            type: 'startsWith',
            functionality: function(chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void(0);
                    else {
                        var crowd = API.getUsers();
                        var msg = chat.message;
                        var argument = msg.substring(cmd.length + 1).replace(/@/g, '');
                        var randomUser = Math.floor(Math.random() * crowd.length);
                        var randomNice = Math.floor(Math.random() * basicBot.chat.dope.length);
                        var randomSentence = Math.floor(Math.random() * 1);
                        API.sendChat(chat.un + API.getDJ().username + basicBot.chat.dope[randomNice]);
                    }
                }
            };
            
        //shot command
        bot.commands.shotCommand = {
                command: 'shot',
                rank: 'user',
                type: 'startsWith',
                functionality: function(chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void(0);
                    else {
                        var crowd = API.getUsers();
                        var msg = chat.message;
                        var argument = msg.substring(cmd.length + 1).replace(/@/g, '');
                        var randomUser = Math.floor(Math.random() * crowd.length);
                        var randomShot = Math.floor(Math.random() * basicBot.chat.shots.length);
                        var randomSentence = Math.floor(Math.random() * 1);
                        API.sendChat(chat.un + API.getDJ().username + basicBot.chat.shots[randomShot]);
                    }
                }
            };

        
        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: 'drunkBot',
        language: 'english',
        chatLink: 'https://rawgit.com/wingnaut/source/master/lang/en.json',
        scriptLink: 'https://rawgit.com/wingnaut/source/master/basicBot.js',
        roomLock: false, // Requires an extension to re-load the script
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        autowoot: true,
        autoskip: true,
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
        voteSkip: true,
        voteSkipLimit: 5,
        historySkip: true,
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
        blacklists: {
            NSFW: 'https://rawgit.com/wingnaut/custom/master/blacklists/NSFWlist.json',
            OP: 'https://rawgit.com/wingnaut/custom/master/blacklists/OPlist.json',
            BANNED: 'https://rawgit.com/wingnaut/custom/master/blacklists/BANNEDlist.json'
        }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/wingnaut/source/master/basicBot.js", extend);

}).call(this);
