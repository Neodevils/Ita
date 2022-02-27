module.exports ={
  name: "wyr", 
	type: 'interaction', 
	prototype: 'slash', 
  code:`

  $sendMessage[{
"embeds":"{newEmbed:{description:˚｡ *╭ <a:dp_star6:835142297125519420> ₊˚✿ would you rather ₊˚✿੭ <a:dp_star6:835142297125519420> ʕ · ﻌ · ʔ\\n<:qotd_ita:922164546343403561>  ┊ <:dash_ita:919491119107158036> Question: **Would you rather...**\\n๑ ꒦︶︶꒷︶︶︶꒷꒦ ɞ\\n<:brown_fish_ita:919839217532678195> ┊。<:br_number_1:837050777129451550> $interactionData[options.data[0].value]\\n ┊or\\n<:red_fish_ita:919839146447601744> ┊。<\:y_number_2\:837050845325426729> $interactionData[options.data[1].value]\\n\\n୨୧ ━ ━ ━ ━ ━ <:spa_ita:920415421771960361> ━ ━ ━ ━ ━ ୨୧}{footer:$username asked:$authorAvatar}{timestamp}{color:$getServerVar[hex]}}", 
"fetchReply" : true,
"options": {
  "reactions" : ["837050777129451550","837050845325426729"],
  "interaction" : true
}
}
]  


$onlyForRoles[$getServerVar[ownerRole];$getServerVar[adminRole];$getServerVar[modRole];$getServerVar[traineeRole];{
	"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> You don't have a staff role to make would you rather~}{color:$getServerVar[hex]}}",
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
]

`
}