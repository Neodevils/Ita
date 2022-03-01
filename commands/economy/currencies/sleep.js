{
type: 'interaction', 
prototype: 'slash', 
code: `
$if[$sub[$dateStamp;$getUserVar[sleep_cooldown]]>0]

$setGlobalUserVar[stawwy_pocket;$sum[$getGlobalUserVar[stawwy_pocket;$authorID];$random[100;400]];$authorID]

$setUserVar[lovsu;$sum[$getUserVar[lovsu;$authorID];$random[5;10]];$authorID;$guildID]

$setUserVar[sleep_cooldown;$sum[60000;$dateStamp]]

$interactionReply[;{newEmbed:{description:
**.  * <\:br_number_1\:837050777129451550> ✦  .   ⁺  .⁺ 　<\:br_number_2\:837050780959375391>  ˚.  *  ✦  .   <\:br_number_3\:837050785875361822>　⁺ 　 .⁺ ˚ 
zZ𝗭 ʕ - ᴥ - ʔ୧ଓ‿︵ଓ
<\:ribbon\:797165741375881226> $username, you slept $randomText[early;at the time;late. . .] today but I am a good being so here is your reward for sleeping $randomText[early;at the time;late. . .] *!*
__\`You got $random[100;400] stawwies\`__ <a\:strawwy\:861057831712980992>**}{color:$getServerVar[hex]}}]
$else

$interactionReply[;{newEmbed:{description: <a:dp_star6:835142297125519420> You just woke up cutie, your bed time is **$humanizeMs[$sub[$getUserVar[sleep_cooldown];$dateStamp]]** later~}{color:$getServerVar[hex]}}]
$endif

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

$onlyIf[$interactionData[options._subcommand]==sleep;]
`
}