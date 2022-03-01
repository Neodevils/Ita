

module.exports = {

    name: "rock-paper-scisors",

    aliases: ['rps'],

    code: `

$djsEval[const opponent = message.mentions.users.first();

const { RockPaperScissors } = require('weky');

  RockPaperScissors({

	message: message,

	opponent: message.mentions.users.first(),

	embed: {

		title: '꒰꒰Rock,, ꒰꒰Paper,, ꒰꒰Scissors',

		description: '<a:dp_star6:835142297125519420> What do you choose :3',

	color: '#fcbfcb',

		timestamp: true,

	},

	buttons: {

		rock: 'Rock',

		paper: 'Paper',

		scissors: 'Scissors',

		accept: 'Accept',

		deny: 'Deny',

	},

	time: 60000,

	acceptMessage:

		'<@{{challenger}}> has challenged <@{{opponent}}> for a game of Rock Paper and Scissors! owo',

	winMessage: 'Game ended, and the winner is <@{{winner}}>, yay!',

	drawMessage: 'This game is draw..',

	endMessage: "<@{{opponent}}> didn't answer in time. So, yah.",

	timeEndMessage:

		"Both of you didn't pick something in time. So, yah game ended without starting hhhh",

	cancelMessage:

		'<@{{opponent}}> refused to have a game of Rock Paper and Scissors with you! *looks scared to lose*',

	choseMessage: '<a:dp_star6:835142297125519420>You picked {{emoji}}',

	noChangeMessage: '<a:dp_star6:835142297125519420>You cannot change your selection!',

	othersMessage: '<a:dp_star6:835142297125519420>Only {{author}} can use the buttons!',

	returnWinner: true,

}).then(a => a)]

$onlyIf[$mentioned[1;no]!=$authorID; **OwO** You cant play with yourself...]

$onlyIf[$isBot[$mentioned[1;no]]==false;You cant play with bots... baka]

$onlyIf[$mentioned[1;no]!=;You cant play with the air ehehehe]

`

} 

