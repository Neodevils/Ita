module.exports = {
	name: "roleshop",
	type: 'interaction', 
	prototype:'selectMenu', 
	code:`

$giveRole[$guildID;$authorID;$getServerVar[role_1]]

$setUserVar[lovsu;$sub[$getUserVar[lovsu];$getServerVar[price_1]]]

$interactionReply[;{newEmbed:{title:<a:pas10:835152237042729040> Thank you, senpai!!}
{description:╭・You bought __<@&$getServerVar[role_1]>__ role for **<a:lowe:861599577387827201> $getServerVar[price_1] love!**}
{color:$getServerVar[hex]}}]

$onlyIf[$getUserVar[lovsu]>=$getServerVar[price_1];{
	"embeds":"<a:mnrubs:817219196953952267> Uhmm... You don't have enough love :(",
	"ephemeral": true, 
"options":{
	"interaction" : true
}
}]

$onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[role_1]]==false;{
	"embeds":"<a:bun_question:817219210279256066> You have already bought the role in shop, don't you remember? -3-",
	"ephemeral": true, 
"options":{
	"interaction" : true
}
}]

$onlyIf[$interactionData[values[0]]==0;]

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
`
}