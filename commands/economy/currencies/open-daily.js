module.exports = {

name: "open-daily",
aliases: ["op-day","daily-open","open-day"], 

code: `$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];750];$authorID]

$setGlobalUserVar[DailyChest;$sub[$getGlobalUserVar[DailyChest;$authorID];1];$authorID]

$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp;$authorID];35];$authorID]

$thumbnail[$userAvatar[$authorID]]

$color[$getServerVar[hex]]

$title[<a:daily:843466317188563004> Daily Chest <a:daily:843466317188563004>]

$description[**✦<:dash3:817209881559826492>୧︰ $username,, you opened your __daily chest!__ :୧ 
⌗  ◟・ <a:pas10:835152237042729040> ੭ ⸝⸝ and you earned. . .・ <a:dp_star6:835142297125519420> ໑**]

$footer[🍓 +750 stawwies₊˚ ┇ 💖 +35 love₊˚]

$onlyIf[$getGlobalUserVar[DailyChest;$authorID]==1;{description: <a:pas10:835152237042729040> **You dont have a Daily Chest yet! Try using \`$getServerVar[prefix]daily\` to receive your Daily Chest and then run this command to open it ✿**}{color:$getServerVar[hex]}]`
}