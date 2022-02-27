module.exports = [{
	name: "unban", 
	type: 'interaction',
	prototype: 'slash', 
	code: `
	$unban[$findUser[$interactionData[options.data[0].value];no];$guildID]
	
	$interactionReply[;{newEmbed:{author:₊˚Unban Successfully Completed ✿₊˚!!:$serverIcon}
{description:<:user_circle_ita:919884479420575784> $userTag[$interactionData[options.data[0].value]] named user now __unbanned__ *!*
<:pen_ita:919866873816952852> <@$authorID> ꒰ $userTag ꒱ unbanned the user✿~}
{footer:Welcome back to $serverName!੭}{color:$getServerVar[hex]}}]

$suppressErrors[{
		"content":"<a:dp_star6:835142297125519420> Umm, I didn't find the user on the ban list..",
		"ephemeral" : "true", 
		"options":{
			"interaction" : true
		}
}]

$onlyForRoles[$getServerVar[ownerRole];$getServerVar[adminRole];$getServerVar[modRole];{
	"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> You need \`MODERATOR+\` role~}{color:$getServerVar[hex]}}",
	"options":{
		"interaction" : true
}
	}]
	$onlyIf[$findUser[$interactionData[options.data[0].value];no]!=;{
		"content":"<a:dp_star6:835142297125519420> May you check the ID again? Cause i cant find the user. .",
		"ephemeral" : "true", 
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
}]