{
  name: "hacking",
  $if: 'v4', 
  type: 'interaction', 
  prototype: 'slash', 
  code:`$if[$sub[$dateStamp;$getUserVar[hack_sabotage_cooldown]]>0]
  
$interactionEdit[;{newEmbed:{title: <:evil_ita:919836869263515678> $randomText[I couldn't wait anymore;I have been waiting for hours; Here we go, $username. . .;Finally done~~] ₊˚}
 {description:<:dead_ita:925114742371131422> ****$randomText[you used drone to hack a person's phone;you hacked a person's gallery and threatened to show them on social media;You spread a deadly tech virus thru wiring circuits and exploded nearby computers owo;You hacked the hospital's electrical connection nice nicee;you were staring at the ATM for seconds and you stole it OwO]
⊹₊꒷︶꒷꒦<:devil_points_ita:920686396358942720>⊹₊꒷︶꒷꒦**
||nice job $username it was __$randomText[cool!;fun;scary to me;op move]__||
 }{color:abcdef}{footer:$randomText[This is your payment;No mercy? I like it~]:$authorAvatar}};
{actionRow:{button:$random[450;900] itoins!:4:disabled_button_2:true:<:coins_ita:919837728827383838>}{button::2:disabled_button_1:true:<:infinity_ita:920415342742888508>}{button:$getGlobalUserVar[hacker_points]:2:disabled_button_0:true:}{button:$getGlobalUserVar[good_deeds] deeds..:1:disabled_button0:true:<:good_point_ita:919836442191097856>}}]
$wait[3s]
 $interactionReply[<a:dp_star6:835142297125519420> **You stared scarii. . .**]
 
$setUserVar[hack_sabotage_cooldown;$sum[45000;$dateStamp]]

$setGlobalUserVar[hacker_points;$sum[$getGlobalUserVar[hacker_points;$authorID];1];$authorID]

$if[$getGlobalUserVar[good_deeds]>0]
$setGlobalUserVar[good_deeds;$sub[$getGlobalUserVar[good_deeds;$authorID];1];$authorID]
$endIf

$setGlobalUserVar[stawwy_pocket;$sum[$getGlobalUserVar[stawwy_pocket;$authorID];$random[450;900]];$authorID]
 
$else
$interactionReply[;{newEmbed:{description:**anonymous, chill! we don't want cops arrest us right? wait for  $humanizeMs[$sub[$getUserVar[hack_sabotage_cooldown];$dateStamp]] *!***}{color:$getServerVar[hex]}}]

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

$onlyIf[$interactionData[options._subcommand]==sabotage;]
`
}