module.exports = [{
name: "open-spiteful",
code: `$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];$randomText[1;850;860;900;950;1000;1000;1000;1100;1150;1175;1200;1250;1500;5000;10000]];$authorID]

$setGlobalUserVar[spiteful;$sub[$getGlobalUserVar[spiteful;$authorID];1];$authorID]

$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$random[10;20]];$authorID]

<a:spiteful:843468902314541076> *breathing in, breathing out. . .*

$editIn[4s;$randomText[ehehe, where is the key? ||sowwy, it was there my bad, my bad ( ´･ω･)||;$username, are you ready to open the chest owo?];<a:dp_star6:835142297125519420> *opening the chest slowly*;Kaeru: (\`🍓\`ω\`🍓\`*) stawwi;{thumbnail:$userAvatar[$authorID]}

{color:$getServerVar[hex]}

{title:<a:spiteful:843468902314541076> spiteful chest <a:spiteful:843468902314541076>}

{description:

> **you opened a spiteful chest!**
> ↓ *and you have gotten* ↓}



{footer: 🍓+$numberSeparator[$randomText[1;850;860;900;950;1000;1000;1000;1100;1150;1175;1200;1250;1500;5000;10000]] stawwy | 💖 +$random[10;20] lovsu:$authorAvatar}]

$onlyIf[$getGlobalUserVar[spiteful;$authorID]>=1;**Umm.. $username-

You can't open a chest you don't have! Try purchasing one spiteful chest from the shop^^**]
$globalCooldown[20m;you just purchased a spiteful chest! storage will have another spiteful chest for you in\`%time%\`!]`
},
{
name: "open-lucky",
code:`

<a:dp_star6:835142297125519420> *opening the chest. . .*
$editIn[2s;{thumbnail:$userAvatar[$authorID]}
{color:$getServerVar[hex]}
{title:<:lucky:843466529031192606> lucky chest <:lucky:843466529031192606>}
{description:— you opened a __lucky chest!__
and received. . .
}
{footer:🍓 +$numberSeparator[$randomText[300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;500;1000;5000]] strawwy | 💖 +$random[3;7] lovsu}]
$setGlobalUserVar[pocket;$sum[$getGlobalUserVar[pocket;$authorID];$randomText[300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;500;1000;5000]];$authorID]

$setGlobalUserVar[lucky;$sub[$getGlobalUserVar[lucky;$authorID];1];$authorID]

$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp;$authorID];$random[3;7]];$authorID]
$onlyIf[$getGlobalUserVar[lucky;$authorID]>=1;**Umm.. $username-
You can't open a chest you don't have! Try purchasing one from the shop^^**]
$globalCooldown[3m;you just purchased a chest! storage will have another lucky chest for you in \`%time%\`!]`
}]
 
 