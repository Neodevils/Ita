module.exports ={
  name: "read", 
  code: `$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];$random[150;350]];$authorID]

$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$random[5;30]];$authorID;$guildID]

$color[$getServerVar[hex]]


$description[**₊˚︵‿₊୨✦・\`🍓\` Reading <a:pas10:835152237042729040> \`🍓\`・✦୧₊‿︵˚₊
 <a:pas10:835152237042729040> Ita saw your your work while you are reading and Ita loved it ₊˚✿

And gave you <a:strawwy:861057831712980992> $random[150;350] stawwies!
<a:dp_star6:835142297125519420> ╴╴╴╴╴╴╴╴╴╴╴╴×**]
$footer[🍓 +$random[150;350] stawwies | 💖 +$random[5;10] love]

$globalCooldown[30m;{description: <a:dp_star6:835142297125519420> Didn't you just read the book, let your eyes relax?
  Come back to library %time% later. .}{color:$getServerVar[hex]}]`
}