module.exports = [{
	name: "profile", 
	type: 'interaction', 
	prototype: 'slash', 
	code: `
	$interactionReply[;{newEmbed:
		{author:$userTag[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]︱is public profile!:$userAvatar[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]}{color:dabeff}
		{thumbnail:$userAvatar[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]}
		{description:*・Here is the information as you requested!*}
		{field:⛀ currency ﹅:╰・・<:branch_ita:921808496767402104> ┇ __$numberSeparator[$getUserVar[data;$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]] data__
\b\b\b╰・<:data_crystal_ita:920687025210945556> ┇ ||$numberSeparator[$getGlobalUserVar[dataCrystal;$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]] data crystal-||:no}
		{field:⾕ projects ✦:╰・・<:project_ita:947569452235501598> | **$getGlobalUserVar[project;$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]** project
━━━━━━━━━━━━━━━━━━━━━━━━:yes}
		{field:🆥˚. data items:╰・・<:bug_ita:919838138841587723> **unknown amount of** ៸៸ virus bug~
\b\b\b╰・<:data_shield_ita:919837981928464395> **ugh, can get the data** ៸៸ ∞:no}
		{field:<\\:discord_ita\\:919466382016520192> discord:➥ $getGlobalUserVar[discordLink]:no}
		{footer:જ you're allowed to see their public profile!!}};
	{actionRow:
		{button:compare with mine!:2:profileButton:false:<:hacker_ita:920683462229360661>}
}]

	$onlyBotPerms[externalemojis;{
		"embeds":"{newEmbed:
			{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}
			{color:$getServerVar[hex]}}",
		"ephemeral": "true", 
		"options": {
			"interaction": true
		}
	}]

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
	code: `$interactionReply[;{newEmbed:
{author:Your︱hidden profile!:$userAvatar[$clientID]}

{color:dabeff}

{thumbnail:$authorAvatar}

{description:
*・Welcome back~*}

{field:⛀ currency ﹅:╰・・<:branch_ita:921808496767402104> ┇ __$numberSeparator[$getUserVar[data]] data__
\b\b\b╰・<:data_crystal_ita:920687025210945556> ┇ ||$numberSeparator[$getGlobalUserVar[dataCrystal]] data crystal-||:no}
		{field:⾕ projects ✦:╰・・<:project_ita:947569452235501598> | **$getGlobalUserVar[project]** project
━━━━━━━━━━━━━━━━━━━━━━━━:yes}
		{field:🆥˚. data items:╰・・<:bug_ita:919838138841587723> **$getGlobalUserVar[dataBug]**៸៸ virus bug~
\b\b\b╰・<:data_shield_ita:919837981928464395> **$getGlobalUserVar[dataShield]**៸៸ data shield:no}

{field:<\\:discord_ita\\:919466382016520192> discord:➥ $getGlobalUserVar[discordLink]:no}

{footer:જ There's your profile #COLON#3}};;;;yes]

$onlyIf[$interactionData[customId]==profileButton;]
`
}]