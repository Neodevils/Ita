//Setup
const mongoose = require('mongoose')
const mongo = require('dbdjs.mongo').default
mongoose.connect(process.env.CLUSTER, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify: false,
 keepAlive: true
})

mongo.createModel('main')

const keepAlive = require('./server.js');

const aoijs = require('aoi.js');
const config = require('./config.js');
const bot = new aoijs.Bot(config.Bot);
const fs = require('fs');

const voice = new aoijs.Voice(bot, {
  soundcloud: {
    clientId: process.env.SC,
  },
  cache: {
    cacheType: "Memory",
    enabled: true,
  }, 
});

//Configs
require('./handler/status')(bot) 
require('./handler/variables')(bot) 
require('./handler/callbacks')(bot) 

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
 
    text: ["gray", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgRed"],
    type: ["bright", "fgWhite"],
    text: ["bright", "fgBlue"]
  },
 
})

const files = fs.readdirSync('./events').filter(file => file.endsWith('js'))
files.forEach( x => {
	require(`./events/${x}`)(bot)
});

keepAlive()
