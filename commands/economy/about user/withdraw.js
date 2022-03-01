module.exports = ({

name: "withdraw", 

aliases: 'with',

code: `$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];$message];$authorID]

$setGlobalUserVar[moneybox;$sub[$getGlobalUserVar[moneybox;$authorID];$message];$authorID]

$title[<a:dp_star6:835142297125519420> Withdrew. . .]

$thumbnail[$userAvatar[$authorID]]

$color[$getServerVar[hex]]

$description[

**$username, you withdrew <a:strawwy:861057831712980992> \`$numberSeparator[$message]\` stawwies from your moneybox ✿**]

$footer[🍓 $numberSeparator[$sum[$getGlobalUserVar[pocket;$authorID];$message]] stawwies ┇ 💰 $numberSeparator[$sub[$getGlobalUserVar[moneybox;$authorID];$message]] in moneybox]

$onlyIf[$isNumber[$message[1]]==true;{description: <a:dp_star6:835142297125519420> That's not number.. You should try to enter numbers..?}{color:$getServerVar[hex]}]
$onlyIf[$message[1]<=$getGlobalUserVar[moneybox;$authorID];{description: ・I-
<a:pas10:835152237042729040> I **cannot** withdraw more than what's in your moneybox.. owo}{color:$getServerVar[hex]}]

$argsCheck[>1;{description: <a:pas10:835152237042729040> How much are you withdrawing? 
⨯ Try this: \`$getServerVar[prefix]with <amount>\`}{color:$getServerVar[hex]}]

$onlyIf[$getGlobalUserVar[pocket;$authorID]>0;{description: Uh.. There's nothing to deposit you don't have stawwies}{color:$getServerVar[hex]}]`

})