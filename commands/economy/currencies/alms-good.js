module.exports = {
  name: "good", 
  $if: 'v4', 
  type: 'interaction', 
  prototype: 'slash', 
  code: `
$interactionReply[;{newEmbed:{title:ー<:angel_ita:919836336104570931> ₊˚𓂃 You are really a nice person.. :)╰╮}{description:𓏲 <:receive_heart_ita:920658263224250368> ˖ ✧ you have given alms to **$random[2;4] $randomText[poor;homeless] people** *love others as love yourself ;)*· ༝ ₊ <:receive_heart_ita:920658263224250368>⬫
・・・・・・・・・・・・
**__For helping $random[2;4] $randomText[poor;homeless] people__
 \`⨯ \`<:coins_ita:919837728827383838>\` $random[10;20] itoins endowed.→ $numberSeparator[$getGlobalUserVar[stawwy_pocket]]\`
\`・ \`<:seed_ita:919836626463649793>\` $random[10;30] seeds received.→ $numberSeparator[$getUserVar[lovsu]]\`**
・・・・・・・・・・・・}{color:#aaffe3}};{actionRow:{button:$getGlobalUserVar[good_deeds] deeds! ᭡:1:disabled_button0:true:<:good_point_ita:919836442191097856>}{button::2:disabled_button1:true:<:spa_ita:920415421771960361>}{button:$getGlobalUserVar[evil_deeds] deeds..:4:disabled_button2:true:<:devil_points_ita:920686396358942720>}}]

$if[$getGlobalUserVar[evil_deeds]>0]
$setGlobalUserVar[evil_deeds;$sub[$getGlobalUserVar[evil_deeds;$authorID];1];$authorID]
$endIf

$setGlobalUserVar[good_deeds;$sum[$getGlobalUserVar[good_deeds;$authorID];1];$authorID]

$setGlobalUserVar[stawwy_pocket;$sub[$getGlobalUserVar[stawwy_pocket;$authorID];$random[10;20]];$authorID]

$setUserVar[lovsu;$sum[$getUserVar[lovsu;$authorID];$random[10;30]];$authorID;$guildID]

$globalCooldown[5s;{
	"embeds":"{newEmbed:{description:**$nickname, we will be in __%time%__ for next $randomText[poor;homeless] people ଘ੭ˊᵕˋ੭**}{color:#aaffe3}}",
	"ephemeral": true, 
"options":{
	"interaction" : true
}
}]

$onlyIf[$getGlobalUserVar[pocket;$authorID]>0;{
	"embeds":"{newEmbed:{description: Uh.. There's nothing endowe to earn lovsu..}{color:88C2FF}}",
	"ephemeral": true, 
"options":{
	"interaction" : true
}
}]
  `
}