module.exports = {
  name: "daily", 
  code: `$setGlobalUserVar[DailyChest;$sum[$getGlobalUserVar[DailyChest;$authorID];1];$authorID]

$thumbnail[$userAvatar[$authorID]]

$color[$getRoleColor[$highestRole[784865728322338816]]]

$title[<a:strawwy:861057831712980992> Daily Chest <a:strawwy:861057831712980992>]

$description[
**ᗢᘏ౨ ﹕ Good job $username <a:pas10:835152237042729040> ︵ ✧ ˊ˗ 
╰ ┅ ๑ ┅ ๑ ┅ ๑ ┅ ๑ ┅ ๑ ┅ ๑ ┅ ๑ ౨
๑꒰⑅ᐢ. ֑ .ᐢ꒱ You received 1 daily chest! <a:daily:843466317188563004>
₊˚๑﹕This command can be done once every 12 hours.** <a:dp_star6:835142297125519420>
$footer[To open use, $getServerVar[prefix]open-daily]

$globalCooldown[12h;{description:<:dash6:817209859686400000>** Please wait %time% $username, before you can claim another daily chest ʕ*ﾉᴥﾉʔ**}{color:$getServerVar[hex]}]

$onlyIf[$getGlobalUserVar[DailyChest;$authorID]<1;{description: <a:dp_star6:835142297125519420> **You still have __unopened daily chest__ in your inventory. Open the chests. You can hold only a chests!!** \`$getServerVar[prefix]open-daily\`}{color:$getServerVar[hex]}]`
}