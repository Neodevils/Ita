module.exports = {
  name: "qotd", 
  type: 'interaction', 
  prototype: 'slash', 
  code: `

$channelSendMessage[$get[id2];<a:dp_star6:835142297125519420> <@&$getServerVar[qotdRole]> so, yah! let's see the answers *!*]
$wait[1s]
$let[id2;$createThread[$channelID;— answers here𓂃!!;1440;public;$get[id];yes]]

$let[id;$sendMessage[{
"content":"<:qotd_ita:922164546343403561> *$username asks question of the day!*", 
"embeds":"{newEmbed:{title:<:exclamation_ita:919876276788015115> answers goes to thread channel! the rules still apply 👀}{thumbnail:$serverIcon}{description:✄・┈┈・┈┈・┈┈・\\n> **__question:__** **$interactionData[options.data[0].value]** \\n ✄・┈┈・┈┈・┈┈・\\n<:moon_stars_ita:920646794571038740> ๑ ꒦︶︶꒷︶︶︶꒷꒦ ɞ}{color:$getServerVar[hex]}}", "fetchReply": true,"options":{"interaction":true}};yes]]

$onlyForRoles[$getServerVar[ownerRole];$getServerVar[adminRole];$getServerVar[modRole];$getServerVar[traineeRole];{
	"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> You don't have a \`STAFF\` role to make qotd~}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
	}
}
]

$onlyIf[$getServerVar[qotdRole]!=;{
"embeds" : "{newEmbed:{description:**Ummm, I guess you haven't settled qotd role.\\n<a:dp_star6:835142297125519420> type \`$getServerVar[prefix]set-qotd @role\` to set it**}{color:$getServerVar[hex]}}",
"options" : {
"interaction" : true
}
}]

$onlyBotPerms[createpublicthreads;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`CREATE_PUBLIC_THREAD\`** permission.}{color:$getServerVar[hex]}}",
"ephemeral": "true",
"options":{
		"interaction": true}
}]

$onlyBotPerms[sendmessageinthreads;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`SEND_MESSAGE_IN_THREAD\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
		"interaction": true
		}
	}
]

$onlyBotPerms[mentioneveryone;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`MENTION_EVERYONE\`** permission, to mention role.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyBotPerms[managemessages;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`MANAGE_MESSAGES\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyBotPerms[addreactions;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`ADD_REACTIONS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyBotPerms[embedlinks;{
	"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
	}
]

$onlyIf[$guildID!=;{ 
"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}",
"options" : {
"interaction" : true
    }
  }
]`
}