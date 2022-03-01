module.exports = [{
  name: "bad",
  $if: 'v4', 
  type: 'interaction', 
  prototype: 'slash', 
  code: ` 
$if[$sub[$dateStamp;$getUserVar[evil_crime_cooldown]]>0]

$if[$getGlobalUserVar[good_deeds]>0]
$setGlobalUserVar[good_deeds;$sub[$getGlobalUserVar[good_deeds;$authorID];1];$authorID]
$endIf

$setGlobalUserVar[stawwy_pocket;$sum[$getGlobalUserVar[stawwy_pocket;$authorID];$random[130;850]];$authorID]

  $setGlobalUserVar[evil_deeds;$sum[$getGlobalUserVar[evil_deeds;$authorID];1];$authorID]

$setUserVar[lovsu;$sum[$getUserVar[lovsu;$authorID];$random[3;7]];$authorID;$guildID]

$interactionReply[;{newEmbed:{description[**꒦︶︶<:criminal_ita:919837609985986580>︶︶꒦꒷
₊˚ <a:dp_star6:835142297125519420> Let's commit a crime $username. . . :3
||$randomText[you robbed a bank and earned <:coins_ita:919837728827383838>;you stole good of amount itoins on restaurant and it was <:coins_ita:919837728827383838>;you pickpocketed with great stealth but only picked up <:coins_ita:919837728827383838>;you tried to steal from someone, but at least you found some on the ground :O and it was <:coins_ita:919837728827383838>] $random[130;850] itoins!|| <a:dp_star6:835142297125519420> 
╭━━━━━━━━━━━━╯
╰──➢\`now you have \`__\`$numberSeparator[$getGlobalUserVar[stawwy_pocket]]\`__<:coins_ita:919837728827383838>__ ✿\`
· ─────── ·𖥸· ─────── ·**}{color:ffaaaa}};{actionRow:
{button:$random[130;850] itoins!:4:disabled_button_2:true:<:coins_ita:919837728827383838>}{button::2:disabled_button_1:true:<:infinity_ita:920415342742888508>}{button:$random[3;7] seeds.:1:disabled_button_0:true:<:seed_ita:919836626463649793>}}

{actionRow:{button:$getGlobalUserVar[evil_deeds] deeds~:4:disabled_button2:true:<:devil_points_ita:920686396358942720>}{button::2:disabled_button1:true:<:spa_ita:920415421771960361>}{button:$getGlobalUserVar[good_deeds] deeds..:1:disabled_button0:true:<:good_point_ita:919836442191097856>}}]

$setUserVar[evil_crime_cooldown;$sum[60000;$dateStamp]]
$else

$interactionReply[;{newEmbed:{description:<a:dp_star6:835142297125519420> Let's wait **$humanizeMs[$sub[$getUserVar[good_favor_cooldown];$dateStamp]]** for next crime. . . <:criminal_ita:919837609985986580>}{color:ffaaaa}};;;;yes]


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

$onlyIf[$interactionData[options._subcommand]==crime;]
`
}]



}, {
  name: "bad",
  $if: 'v4', 
  type: 'interaction', 
  prototype: 'slash', 
  code:`$if[$sub[$dateStamp;$getUserVar[bad_evil_cooldown]]>0]
  
$interactionEdit[;{newEmbed:{title: <:evil_ita:919836869263515678> $randomText[Here we go again baby;Ohhh you're committing to evil deeds; I was waiting for you $username!;Finally you are here] ₊˚}
 {description:<:dead_ita:925114742371131422> **$randomText[You took someone's lunch;You took some candy from a baby 3:);You settled a kitten on fire \:);You burned down a church hhhh;You punched to a guy.. that was so powerful slap OwO I liked it!;You robbed a woman's bag! You are doing well!!;Y-you.. YOU DID WHAT-... I'm scared to say it..; I never thought you are going to do this to me... Uhm it felt so good thanks for it yah, massage felt good~;You threw a cat to trash can and smiled, so evilll;You don't have to break my heart... I don't deserve this. Don't hurt to my feelings over and over $username.. :/;You suddenly swore to an old woman lol what :D?; You didn't show respect to a woman's clothing :/. Let them whatever they wear, but I guess you care huh :3]
⊹₊꒷︶꒷꒦<:devil_points_ita:920686396358942720>⊹₊꒷︶꒷꒦**
||well done $username $getGlobalUserVar[evil_deeds] evil deeds... pretty __$randomText[dirty;cruel;brutal;anarchic;savage!;sadistic!!;sensational!!!]__||}{color:ffaaaa}{footer:$randomText[Nice niceee, keep going! before I forgot;Good job $username let's meet later again. Ah]:$authorAvatar}};
{actionRow:{button:$random[70;550] itoins!:4:disabled_button_2:true:<:coins_ita:919837728827383838>}{button::2:disabled_button_1:true:<:infinity_ita:920415342742888508>}{button:$random[1;4] seeds.:1:disabled_button_0:true:<:seed_ita:919836626463649793>}}

{actionRow:{button:$getGlobalUserVar[evil_deeds] deeds~:4:disabled_button2:true:<:devil_points_ita:920686396358942720>}{button::2:disabled_button1:true:<:spa_ita:920415421771960361>}{button:$getGlobalUserVar[good_deeds] deeds..:1:disabled_button0:true:<:good_point_ita:919836442191097856>}}]
$wait[3s]
 $interactionReply[<a:dp_star6:835142297125519420> **You stared scarii. . .**]
 
$setUserVar[bad_evil_cooldown;$sum[30000;$dateStamp]]

$if[$getGlobalUserVar[good_deeds]>0]
$setGlobalUserVar[good_deeds;$sub[$getGlobalUserVar[good_deeds;$authorID];1];$authorID]
$endIf

$setGlobalUserVar[evil_deeds;$sum[$getGlobalUserVar[evil_deeds;$authorID];2];$authorID]

$setGlobalUserVar[stawwy_pocket;$sum[$getGlobalUserVar[stawwy_pocket;$authorID];$random[50;100]];$authorID]

$setUserVar[lovsu;$sum[$getUserVar[lovsu;$authorID];$random[10;50]];$authorID;$guildID]
 
$else
$interactionReply[;{newEmbed:{description:<:dead_ita:925114742371131422> **$username.. wait $humanizeMs[$sub[$getUserVar[bad_evil_cooldown];$dateStamp]] u for next engage :3 we don't want to get caught, right?**}{color:$getServerVar[hex]}}]

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

$onlyIf[$interactionData[options._subcommand]==evil;]
`
}, {
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