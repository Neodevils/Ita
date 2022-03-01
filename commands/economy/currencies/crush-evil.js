{
  name: "bad",
  $if: 'v4', 
  type: 'interaction', 
  prototype: 'slash', 
  code: `$if[$getGlobalUserVar[good_deeds]>0]
$setGlobalUserVar[good_deeds;$sub[$getGlobalUserVar[good_deeds;$authorID];1];$authorID]
$endIf

$setGlobalUserVar[evil_deeds;$sum[$getGlobalUserVar[evil_deeds;$authorID];1];$authorID]

$setGlobalUserVar[stawwy_pocket;$sum[$getGlobalUserVar[stawwy_pocket;$authorID];$random[80;145]];$authorID]

$setUserVar[lovsu;$sub[$getUserVar[lovsu;$authorID];$random[10;70]];$authorID;$guildID]

$interactionReply[;{newEmbed:{title:ー<:evil_ita:919836869263515678> ₊˚𓂃 We must crush more, more and MORE! ╰╮}{description:𓏲 ׅ<:dead_ita:925114742371131422> ˖ ✧ you used seeds and have crushed **$random[2;4] $randomText[small;big] insects!** I know how do you feeling~· ༝ ₊ <:dead_ita:925114742371131422>⬫
・・・・・・・・・・・・
**__Exchange for $random[2;4] $randomText[small;big] insects__
 \`⨯ \`<:coins_ita:919837728827383838>\` $random[80;145] itoins received.→ $numberSeparator[$getGlobalUserVar[stawwy_pocket]]\`
\`・ \`<:seed_ita:919836626463649793>\` $random[10;70] seeds endowed.→ $numberSeparator[$getUserVar[lovsu]]\`**
・・・・・・・・・・・・}{color:ffaaaa}};{actionRow:{button:$getGlobalUserVar[evil_deeds] deeds~:4:disabled_button2:true:<:devil_points_ita:920686396358942720>}{button::2:disabled_button1:true:<:spa_ita:920415421771960361>}{button:$getGlobalUserVar[good_deeds] deeds..:1:disabled_button0:true:<:good_point_ita:919836442191097856>}}]

$onlyIf[$getUserVar[lovsu;$authorID]>0;{
	"embeds":"{description: <:seed_ita:919836626463649793> Uh.. There's nothing endowe to earn itoins..}{color:aaffe3}",
	"ephemeral": true, 
	"options":{"interaction" : true}}]

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

$onlyIf[$interactionData[options._subcommand]==evil;]
`
}