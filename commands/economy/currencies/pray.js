{
  name: "good",
  $if: 'v4', 
  type: 'interaction', 
  prototype: 'slash', 
  code: ` $if[$sub[$dateStamp;$getUserVar[good_pray_cooldown]]>0]
  
$interactionReply[;{newEmbed:{description:✦     .     　⁺ 　 .     .     　⁺ 　 .      .     　⁺
it was so cold. . . it was raining <a:0_sparkle3:817219219598475274>
<a:0_flower2:817391074556510269> ˚ꮺ₊˚⊹ but you prayed and stawwies has rained from the sky! <a:0_sparkle3:817219219598475274>
 ₊  ︵︵ ‧˚₊ **well done <@$authorID> :)**}{color:aaffe3}};{actionRow:
{button:$random[50;350] seeds!:1:disabled_button_0:true:<:seed_ita:919836626463649793>}{button::2:disabled_button_1:true:<:infinity_ita:920415342742888508>}{button:$random[15;45] itoins~:4:disabled_button_2:true:<:coins_ita:919837728827383838>}

{actionRow:{button:$getGlobalUserVar[good_deeds] deeds!:1:disabled_button0:true:<:good_point_ita:919836442191097856>}{button::2:disabled_button1:true:<:spa_ita:920415421771960361>}{button:$getGlobalUserVar[evil_deeds] deeds..:4:disabled_button2:true:<:devil_points_ita:920686396358942720>}}]

$if[$getGlobalUserVar[evil_deeds]>0]
$setGlobalUserVar[evil_deeds;$sub[$getGlobalUserVar[evil_deeds;$authorID];1];$authorID]
$endIf
  
  $setGlobalUserVar[good_deeds;$sum[$getGlobalUserVar[good_deeds;$authorID];1];$authorID]
  $setGlobalUserVar[stawwy_pocket;$sum[$getGlobalUserVar[stawwy_pocket;$authorID];$random[15;45]];$authorID]
$deletecommand
$setUserVar[lovsu;$sum[$getUserVar[lovsu;$authorID];$random[50;350]];$authorID;$guildID]

$setUserVar[good_pray_cooldown;$sum[75000;$dateStamp]]
$else

$interactionReply[;{newEmbed:{description:<a:dp_star6:835142297125519420> You just prayed for your God. May you wait %time% for next pray? <a:c_heart5:854144533024342016>}{color:aaffe3}};;;;yes]


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

$onlyIf[$interactionData[options._subcommand]==pray;]
`
}]


