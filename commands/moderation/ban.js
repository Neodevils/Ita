module.exports = {
	name: "ban", 
	type: 'interaction',
	prototype: 'slash', 
	code: `
$ban[$findUser[$interactionData[options.data[0].value];no];$guildID;;$replaceText[$interactionData[options.data[1].value];undefined;Uhm, etto... No reason given by $username..]]
	
$interactionReply[;{newEmbed:{author:$userTag:$authorAvatar}{description:
<:ban_ita:919656241674989578> Successfully **banned** __$userTag[$findUser[$interactionData[options.data[0].value];no]]__𓂃!!}{field:reason:<\\:dash_ita\\:919491119107158036> $replaceText[$interactionData[options.data[1].value];undefined;Uhm, etto... No reason given..]}{color:$getServerVar[hex]}}]
		$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$interactionData[options.data[0].value];no]]];{
		"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> That user is higher than me on role position}{color:$getServerVar[hex]}},
		"options":{
			"interaction" : true
		}
}]
	$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$interactionData[options.data[0].value];no]]];{
		"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> That user is higher than you on role position.}{color:$getServerVar[hex]}}",
		"options":{
			"interaction" : true
		}}]

$onlyForRoles[$getServerVar[ownerRole];$getServerVar[adminRole];$getServerVar[modRole];{
	"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> You don't have any roles higher than \`MODERATOR\` role~}{color:$getServerVar[hex]}}",
	"options":{
		"interaction" : true
}
	}]

	$onlyBotPerms[ban;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`BAN_MEMBERS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": true, 
	"options": {
	"interaction": true
		}
	}
]
	
	$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": true, 
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
]

`
}
