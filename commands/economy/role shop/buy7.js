module.exports = {
  name: "buy-7",
  code:`$setUserVar[xp;$sub[$getUserVar[xp;$authorID];$getServerVar[price7]];$authorID;$guildID]
$title[<a:pas10:835152237042729040> Thank you, cutie!!]
$description[╭・You bought __<@&$getServerVar[role7]>__ role for **<a:lowe:861599577387827201> $getServerVar[price7] love!**]
$giveRole[$authorID;$getServerVar[role7]]

$color[$getServerVar[hex]]
$onlyIf[$getUserVar[xp]>=$getServerVar[price7];<a:mnrubs:817219196953952267> Uhmm... You don't have enough love :(]
$onlyIf[$hasRole[$authorID;$getServerVar[role7]]==false;<a:bun_question:817219210279256066> You have already bought the role in shop, don't you remember? -3-]`
}