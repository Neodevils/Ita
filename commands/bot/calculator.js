module.exports = {
name: "calculator",
    aliases: "calc", 

  code: `$djsEval[(async () => {

const Discord = require('discord.js');

const { Calculator } = require("leaf-utils");

//Settings

const Leafcalculator = new Calculator({

  destroy: "okay we are done :3", //Default: "Calculator Locked"

  invalid: "Can you put in a valid calculation?", //Default: Invalid Calculation :x"

  notauthor: "May you please use this command for yourself?", //Default: "Only the author can use the calculator-"

  deactivatemessasge: "Because of deactivated, I disabled it.", //Default: "The Calculator got deactivated~"

  deactivatetime: 1000000, //Default are 10 minutes

  message: message, //Required

});

await Leafcalculator.start();

})()]`
}