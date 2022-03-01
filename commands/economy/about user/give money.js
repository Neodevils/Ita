module.exports = {

name: "givestawwy", 
aliases: "give", 
code: `$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]

$setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];$noMentionMessage];$authorID]

$color[$getServerVar[hex]]

$thumbnail[$userAvatar[$authorID]]

$title[$username gave $username[$mentioned[1]] stawwies!]

$description[

<a:strawwy:861057831712980992> ┇ $username gave $username[$mentioned[1]] **$noMentionMessage** stawwies!!

$username[$mentioned[1]] is now holding **$sum[$getGlobalUserVar[pocket;$mentioned[1]];$noMentionMessage]** <a:strawwy:861057831712980992> in their pocket!

]

$onlyIf[$noMentionMessage<=$getGlobalUserVar[pocket;$authorID];**<a:pas10:835152237042729040> You don't have enough in your pocket :(**]

$onlyIf[$mentioned[1]!=$authorID;**<a:dp_star6:835142297125519420> Uhhh.. You gave money to yourself, now you have $getGlobalUserVar[pocket;$authorID]<a:strawwy:861057831712980992> stawwies?**]

$onlyIf[$mentioned[1]!=;**<a:pas10:835152237042729040> Mention someone to give stawwies to and then the amount, try using this format**: \`$getServerVar[prefix]givemoney <@user> <amount>\`]

$onlyIf[$isBot[$mentioned[1]]!=true;**<a:dp_star6:835142297125519420> I just gave them don't worry,keep that stawwies to yourself..**]

$onlyIf[$isNumber[$noMentionMessage]==true;**<a:pas10:835152237042729040> That is not a number, try using this format**: \`$getServerVar[prefix]givemoney <@user> <amount>\`]

$suppressErrors[<:dash6:817209859686400000> Usage: **$getServerVar[prefix]givestawwy <@user> <amount>**]`

}