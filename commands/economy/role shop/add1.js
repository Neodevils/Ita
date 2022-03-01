module.exports = {
  name: "server-shop",
  type: 'interaction', 
  prototype: 'slash', 
  code:`
  
$interactionReply[;{newEmbed:{title:<a:dp_star6:835142297125519420> Role has added to role shop!}
{description:<a:pas10:835152237042729040> <@&$interactionData[options.data[0].options[0].value]> role added to shop for <a:lowe:861599577387827201> \`$interactionData[options.data[0].options[1].value]\` lovsu!!}
{color:$getServerVar[hex]}}]

$setServerVar[role_1;$interactionData[options.data[0].options[0].value]]

$setServerVar[price_1;$interactionData[options.data[0].options[1].value]]

$onlyPerms[admin;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}",
	"ephemeral": "true", 
	"options": {
	"interaction": true
		}
}]

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
]
$onlyIf[$interactionData[options._subcommand]==add;]
`
}