module.exports = ({

name: "deposit", 

aliases: 'dep',

code: `$setGlobalUserVar[moneybox;$sum[$getGlobalUserVar[moneybox;$authorID];$message];$authorID]

$setGlobalUserVar[pocket;$sub[$getGlobalUserVar[pocket;$authorID];$message];$authorID]

$title[<a:dp_star6:835142297125519420> Deposited. . .]

$thumbnail[$userAvatar[$authorID]]

$color[$getServerVar[hex]]

$description[

**$username, you deposited <a:strawwy:861057831712980992> \`$numberSeparator[$message]\` stawwies into your moneybox ♡**]

$footer[🍓 $numberSeparator[$sub[$getGlobalUserVar[pocket;$authorID];$message]] stawwies ┇ 💰 $numberSeparator[$sum[$getGlobalUserVar[moneybox;$authorID];$message]] in moneybox]

$onlyIf[$isNumber[$message[1]]==true;{description: <a:dp_star6:835142297125519420> That's not number.. You should try to enter numbers..}{color:$getServerVar[hex]}]

$onlyIf[$message<=$getGlobalUserVar[pocket;$authorID];{description: ・I-
<a:pas10:835152237042729040> I **cannot** deposit more than what's in your wallet.. owo}{color:$getServerVar[hex]}]

$argsCheck[<1;{description: <a:pas10:835152237042729040> How much are you depositing? 
⨯ Try this: \`$getServerVar[prefix]dep <amount>\`}{color:$getServerVar[hex]}]

$onlyIf[$getGlobalUserVar[pocket;$authorID]>0;{description: Uh.. There's nothing to deposit a.}{color:$getServerVar[hex]}]`

})