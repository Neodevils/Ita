module.exports = {
  name: "buy-3",
  code:`$setUserVar[xp;$sub[$getUserVar[xp;$authorID];$getServerVar[price3]];$authorID;$guildID]
$title[<a:pas10:835152237042729040> Thank you, cutie!!]
$description[╭・You bought __<@&$getServerVar[role3]>__ role for **<a:lowe:861599577387827201> $getServerVar[price3] love!**]
$giveRole[$authorID;$getServerVar[role3]]

$color[$getServerVar[hex]]
$onlyIf[$getUserVar[xp]>=$getServerVar[price3];<a:mnrubs:817219196953952267> Uhmm... You don't have enough love :(]
$onlyIf[$hasRole[$authorID;$getServerVar[role3]]==false;<a:bun_question:817219210279256066> You have already bought the role in shop, don't you remember? -3-]`
}