, {
	name: "set",
	type: 'interaction', 
	prototype: 'slash', 
	code: `
$changeNickname[$interactionData[options.data[0].options[0].value];$interactionData[options.data[0].options[1].value]]

$interactionReply[;{newEmbed:{description:<a\:dp_star6\:835142297125519420> $nickname[$interactionData[options.data[0].options[0].value]]'s nickname changed to \`$interactionData[options.data[0].options[1].value]\` **successfully ✿**}
{color:$getServerVar[hex]}};{actionRow:{button:reset member is nickname!:4:reset_nickname_$authorID:false:<a:dp_star6:835142297125519420>}}]

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

$onlyForRoles[$getServerVar[owner_role];$getServerVar[admin_role];$getServerVar[mod_role];$getServerVar[trainee_role];{
	"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> You don't have any roles higher than \`TRAINEE\` role~}{color:$getServerVar[hex]}}",
	"options":{
		"interaction" : true
}
	}]

	$onlyBotPerms[managenicknames;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`MANAGE_NICKNAMES\`** permission.}{color:$getServerVar[hex]}}",
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
}, {
	type: 'interaction', 
	prototype: 'button', 
	code: `

$changeNickname[$interactionData[options.data[0].options[0].value];$username[$interactionData[options.data[0].options[0].value]]]

$interactionReply[;{newEmbed:{description:**<a\:dp_star6\:835142297125519420>  Successfully resettled user is name ✿**}
{color:$getServerVar[hex]}};{actionRow:{button:back to username!:4:reset_nickname_$authorID:true:<a:dp_star6:835142297125519420>}}]

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

$onlyForRoles[$getServerVar[owner_role];$getServerVar[admin_role];$getServerVar[mod_role];$getServerVar[trainee_role];{
	"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> You don't have any roles higher than \`TRAINEE\` role~}{color:$getServerVar[hex]}}",
	"options":{
		"interaction" : true
}
	}]

	$onlyBotPerms[managenicknames;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`MANAGE_NICKNAMES\`** permission.}{color:$getServerVar[hex]}}",
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
}]





