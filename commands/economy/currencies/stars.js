module.exports = {

name: "stars",
aliases: "star", 

code: `$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];$random[150;300]];$authorID]

$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$random[3;15]];$authorID;$guildID]

$color[$getServerVar[hex]]

$description[<:dot:797157264678060082> **you went over to collect <:stars:843223804447686696> loots..**
         ︶︶︶︶︶︶꒷꒦₊˚. <a:dp_star6:835142297125519420>
 and found **RARE <a:0_flower1:817391078810320916> flowers!**
<a:0_sparkle1:817208812825477121> (ﾉ˃ᴗ˂)ﾉ๑՞･ﾟ<a:strawwy:861057831712980992> you sold it and earned $random[150;300] <a:strawwy:861057831712980992>
<a:0_sparkle1:817208812825477121> **__\`you had $numberSeparator[$getGlobalUserVar[pocket]]\`__ <a:strawwy:861057831712980992> __\`✧\`__**]

$footer[🍓 +$random[150;300] stawwy | 💖 +$random[3;15] love]

$globalCooldown[60s;{description:<a:pas10:835152237042729040> You just went to under a star, I called a car it will be in here %time% ₊˚}{color:$getServerVar[hex]}]`

}