module.exports = {
  name:"userinfo",
  aliases: 'whois', 
  code:`
  $color[$getRoleColor[$highestRole[$mentioned[1;yes]]]]
 $author[┇ $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]'s info  ✿₊˚੭;$authorAvatar]
 
$description[$thumbnail[$userAvatar[$mentioned[1;yes]]]

$addField[・permissions;$userPerms[$mentioned[1;yes]];yes]

$addField[・highest role;
  <@&$highestRole[$mentioned[1;yes]]>;yes  role]
  
$addField[・joined at;$memberJoinedDate[$mentioned[1;yes];time] ago;yes]

$addField[・creation date;
⨯ **__$creationDate[$mentioned[1;yes];date]__**
✿ $creationDate[$mentioned[1;yes];time] ago;yes]

$addField[・is bot? owo;
  $replaceText[$replaceText[$isBot[$mentioned[1;yes]];false;Umm, no. ;-1];true;Yep!;-1]]
  
$addField[・badge;
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$mentioned[1;yes]];Nitro Classic;<:nitro_badge:849937852720480307> Nitro;-1];Nitro Boosting;<:NitroBoost:849937943397531689> Server Booster;-1];Early Verified Developer;<:bot_dev:849938776025071636> Bot Developer;-1];House Balance;<:Balance:849937893459755048> Balance;-1];House Brilliance;<:Brilliance:849937789914841099> Brilliance;-1];House Bravery;<:Bravery:849937977403899905> Bravery;-1];none;<a:dp_star6:835142297125519420> Not even in a hypersquad. .;-1]]

$addField[・on;
  $replaceText[$replaceText[$replaceText[$replaceText[$platform[$mentioned[1;yes]];mobile;<:mobile:850003398941737040> mobile platform;-1];desktop;
♡ discord client;-1];none;<a:dp_star6:835142297125519420> They are offline now. . .;-1];web;ꕥ discord app(browser);-1]]
  
$addField[・custom status;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$status[$findMember[$mentioned[1;yes]]];offline;<:offline:849942623599067196>];online;<:online:849942524453978123>];dnd;<:dnd:849942689989656597>];idle;<:away:849942352558292992>];streaming;<:streaming:849942436280270878>] $replaceText[$getCustomStatus[$findUser[$mentioned[1;yes]]];none;<a:pas10:835152237042729040> Empty status.. like my heart :(]
$replaceText[$replaceText[$replaceText[$replaceText[$activity[$mentioned[1;yes]];Custom Status;;-1];Spotify;<:Spotify:850128169259368450> Listening to **Spotify**;-1];,;;-1];none;;-1]]

$addField[・avatar;[৶Click Here!!]($userAvatar[$mentioned[1;yes];2048;yes]);yes]

$addField[・discord id;
  $mentioned[1;yes]]
  
$addField[ ・nickname in server;
  $nickname[$mentioned[1;yes]]]
  ]`
}