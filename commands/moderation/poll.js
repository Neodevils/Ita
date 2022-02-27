module.exports = {
  name: "poll", 
	type: 'interaction', 
	prototype: 'slash',
  code: `

$sendMessage[{
"embeds":"{newEmbed:{thumbnail:$userAvatar[$clientID]}{author:꒰₊˚ ଘ  Poll by $username・♡ ྀ ﾟ⊹꒱:$authorAvatar}{description:<:poll_ita:922164496796090429>:**︰Okay,, now~~\\n$interactionData[options.data[0].value]\\n꒷︶꒷꒥꒷ ‧₊˚ ૮₍´｡• ᵕ •｡'₎ა ‧₊˚꒷︶꒷꒥꒷\\n\\n໒<:br_number_1:837050777129451550>ა﹕Yes! I am in! ฅ ‧˚₊\\n\\n໒<:y_number_2:837050845325426729>ა﹕Umm... No. ฅ ‧˚₊\\n\\n꒷︶꒷꒥꒷ ‧₊˚ ૮₍´｡• ᵕ •｡'₎ა ‧₊˚꒷︶꒷꒥꒷**}{color:$getServerVar[hex]}{footer:˗ˏˋ✦ 🍪・Vote now~}}",
"fetchReply" : true,
"options": {
  "reactions" : ["837050777129451550","837050845325426729"],
  "interaction" : true
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