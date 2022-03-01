module.exports = {

name: "bal", 
aliases: ["cash","balance","money"], 
code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;{description: **(｡ﾉω＼｡) We bots don't have a pocket. . .✧**}{color:$getServerVar[hex]}]

$thumbnail[$userAvatar[$mentioned[1;yes]]]

$color[$getServerVar[hex]]

$title[<a:0_flower1:817391078810320916> $username[$mentioned[1;yes]]'s Balance <a:0_flower1:817391078810320916>]

$description[
*<:exp_heart:843229991491469342> Hello there, you wanted to check balance so there is it!* <a:strawwy:861057831712980992>
$addField[Love ♡;

<:exp_heart:843229991491469342> ┇ __$numberSeparator[$getUserVar[xp;$mentioned[1;yes]]] love__]

$addField[In Pocket ✿;

<a:strawwy:861057831712980992> ┇ __$numberSeparator[$getGlobalUserVar[pocket;$mentioned[1;yes]]] stawwy__]
$addField[In Moneybox ꕥ;

<:moneybox:843231859127091220> ┇ $numberSeparator[$getGlobalUserVar[moneybox;$mentioned[1;yes]]] stawwy in <:moneybox:843231859127091220> moneybox]

$addField[Totally ੭;

<a:dp_star6:835142297125519420> ┇ $numberSeparator[$sum[$getGlobalUserVar[pocket;$mentioned[1;yes]];$getGlobalUserVar[moneybox;$mentioned[1;yes]]]] <a:strawwy:861057831712980992> with <:moneybox:843231859127091220>]

]`

}