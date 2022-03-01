module.exports = ({
  name:"ban",
  code:`$reactionCollector[$splitText[1];$authorID;1m;<a:enabled:861074153880944680>,<a:disabled:861074181865078784>;yes,no;yes]
  $textSplit[$sendMessage[{author:$userTag:$authorAvatar}{description:
<a:dp_star6:835142297125519420> Are you really want to **ban** __<@$mentioned[1]>__ ?
    
*・You have __1 minutes__ to react for tap to “Yes” <a:enabled:861074153880944680> or “No” <a:disabled:861074181865078784> ✿* ʕ·ᴥ·　ʔ
  }{color:$getServerVar[hex]};yes]]
  
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];{description:<a:pas10:835152237042729040> That user is higher than me on role position}{color:$getServerVar[hex]}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{description:<a:pas10:835152237042729040> That user is higher than you on role position.}{color:$getServerVar[hex]}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:・Umm... You can't ban yourself..}{color:$getServerVar[hex]}]
$onlyIf[$findMember[$message[1];no]!=$clientID;{description:・Umm... So You want I ban myself..? Uhh..}{color:$getServerVar[hex]}]
  $onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];{description:<a:pas10:835152237042729040> You don't have \`moderator\` role~}{color:$getServerVar[hex]}]
$onlyIf[$findMember[$message[1]]!=;{description:<a:pas10:835152237042729040> Please give me ID or mention someone. . .}{color:$getServerVar[hex]}]
  `
})
