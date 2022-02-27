module.exports = {
	name: "clean",
	type: 'interaction',
	prototype: 'slash',
	code: `
$interactionEdit[;{newEmbed:{title:Messages Deleted}
{description:<:trash_ita:923546741133955143> **$username** cleaned messages}{color:$getServerVar[hex]}};{actionRow:{button:$interactionData[options.data[0].value] messages disappeared~:4:disabled_button0:true}}]
$wait[1s]
$interactionReply[<:progress_ita:919653811331674202> $randomText[Done;Hai;Did it]! I guess OwO?]
$clear[$sum[1;$interactionData[options.data[0].value]];$replaceText[$interactionData[options.data[1].value];undefined;everyone]]


$onlyForRoles[$getServerVar[ownerRole];$getServerVar[adminRole];$getServerVar[modRole];$getServerVar[traineeRole];{
"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> You don't have any \`STAFF\` role~}{color:$getServerVar[hex]}}",

	"options":{

		"interaction" : true

}

	}]
$onlyBotPerms[managemessages;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`MANAGE_MESSAGES\`** permission.}{color:$getServerVar[hex]}}",
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
]
`
}