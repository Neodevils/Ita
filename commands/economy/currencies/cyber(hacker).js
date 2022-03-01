module.exports = {
  name: "cyber", 
  code:`
$deletecommand
  
$color[000001]

  $description[**๑ ⋆˚₊⋆────ʚ stealing accounts ɞ────⋆˚₊⋆ ๑
₊˚๑ <a:dp_star6:835142297125519420> has started. . . 
||you hacked <@$randomUserID>'s hidden account and stole <a:lowe:861599577387827201> $random[150;200] stawwies along with <a:evilsuu:861375574386671637> evil <a:goodsu:861383559565541406> good deeds*!!*||
 ・<a:pas10:835152237042729040>・<a:dp_star6:835142297125519420>・ \`now you have $numberSeparator[$getUserVar[xp]] lovsu ๑\`
・ —  — ・ˏ͛- <a:network:870002313249570866> ˎˊ˗・ —  —・**
$footer[💖 +$random[100;200] lovsu]

$setGlobalUserVar[good;$sum[$getGlobalUserVar[good;$authorID];1];$authorID]

$setGlobalUserVar[evil;$sum[$getGlobalUserVar[evil;$authorID];1];$authorID]

$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$random[100;200]];$authorID;$guildID]

$onlyIf[$getGlobalUserVar[case;$authorID]!=yok;<a:dp_star6:835142297125519420> You need a case to try steal an account~]
$onlyIf[$getGlobalUserVar[monitor;$authorID]!=yok;<a:dp_star6:835142297125519420> You need a monitor to try steal an account~]


$globalCooldown[2m;{description:**$nickname, wait __%time%__ secs, there is traffic on web**}{color:000001}]
`
}