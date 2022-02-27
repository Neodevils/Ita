module.exports = {
	name: "kick", 
	type: 'interaction',
	prototype: 'slash', 
	code: `
	$kick[$interactionData[options.data[0].value];$guildID;;$replaceText[$interactionData[options.data[1].value];undefined;No reason given. .]]
	
$interactionReply[;{newEmbed:{author:$userTag:$authorAvatar}{description:
<:eliminated_ita:919656327322665010> Successfully **kicked** __$userTag[$findUser[$interactionData[options.data[0].value];no]]__𓂃!!}{field:id:<\\:id_ita\\:919669616685514764> $findUser[$interactionData[options.data[0].value]]}{field:reason:<\\:dash_ita\\:919491119107158036> $replaceText[$interactionData[options.data[1].value];undefined;No reason given. .]}{color:$getServerVar[hex]}}]
		$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$interactionData[options.data[0].value]]];{
		"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> That user is higher than me on role position}{color:$getServerVar[hex]}},
		"options":{
			"interaction" : true
		}
}]
	$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$interactionData[options.data[0].value]]];{
		"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> That user is higher than you on role position.}{color:$getServerVar[hex]}}",
		"options":{
			"interaction" : true
		}}]

$onlyForRoles[$getServerVar[ownerRole];$getServerVar[adminRole];$getServerVar[modRole];$getServerVar[traineeRole];{
	"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> You don't have any \`STAFF\` role~}{color:$getServerVar[hex]}}",
	"options":{
		"interaction" : true
}
	}]

	$onlyBotPerms[kick;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`KICK\`** permission.}{color:$getServerVar[hex]}}",
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