module.exports = {
  name: "hack",
  type: 'interaction', 
  prototype: 'slash', 
  code: `
$interactionReply[;{newEmbed:{title:ー<:hacker_ita:920683462229360661> ₊˚𓂃 Hacking has started OwO!╰╮}
{description:𓏲 ׅ<:merge_ita:921808574882140180> ˖ ✧ you hacked **$random[2;5] IPs and sold them on deep web. . .**
*hacking means more itoins and seeds~*· ༝ ₊ <:merge_ita:921808574882140180>⬫
・・・・・・・・・・・・
**__For $random[2;5] IP's__
 \`⨯ \`<:evil_ita:919836869263515678>ᨎ<:angel_ita:919836336104570931>\` 1 evil and 1 good deeds endowed.→ $numberSeparator[$getGlobalUserVar[good_deeds]] | $numberSeparator[$getGlobalUserVar[evil_deeds]]\`
\`・ \`<:coins_ita:919837728827383838>ᨎ<:seed_ita:919836626463649793>\` stawwy & lovsu received.→ $numberSeparator[$getGlobalUserVar[stawwy_pocket]] | $numberSeparator[$getUserVar[lovsu]]\`**
・・・・・・・・・・・・}{color:dabeff}]
  
  
$if[$getGlobalUserVar[evil_deeds]>0]
$setGlobalUserVar[evil_deeds;$sub[$getGlobalUserVar[evil_deeds;$authorID];1];$authorID]
$endIf

$if[$getGlobalUserVar[good_deeds]>0]
$setGlobalUserVar[good_deeds;$sub[$getGlobalUserVar[good_deeds;$authorID];1];$authorID]
$endIf

$setGlobalUserVar[stawwy_pocket;$sum[$getGlobalUserVar[stawwy_pocket;$authorID];50];$authorID]

$setUserVar[lovsu;$sum[$getUserVar[lovsu;$authorID];50];$authorID;$guildID]

$onlyIf[$getGlobalUserVar[case;$authorID]!=yok;{"content":"<a:dp_star6:835142297125519420> You also need a \`CASE\`..~","ephemeral": true,"options":{"interaction" : true}}]

$onlyIf[$getGlobalUserVar[monitor;$authorID]!=yok;{"content":"<a:dp_star6:835142297125519420> You also need a \`MONITOR\`..~","ephemeral": true,"options":{"interaction" : true}}]

$onlyIf[$getGlobalUserVar[evil_deeds;$authorID]>0;{"embeds":"{newEmbed:{description: <:evil_ita:919836869263515678> Need more evil deeds}{color:ffaaaa}}","ephemeral": true,"options":{"interaction" : true}}]

$onlyIf[$getGlobalUserVar[good_deeds;$authorID]>0;{"embeds":"{newEmbed:{description: <:angel_ita:919836336104570931> Need more good deeds}{color:aaffe3}}","ephemeral": true,"options":{"interaction" : true}}]

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

$onlyIf[$interactionData[options._subcommand]==convert;]
  `
}