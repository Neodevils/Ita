module.exports = {
  name: "ad",
  code: `
$sendDM[$mentioned[1];{description:<a:pas10:835152237042729040> You have banned in $serverName[$guildID] cause of adversiting. You should not keep going for adversiment.}{color:$getServerVar[hex]}]
 $channelSendMessage[$channelID;{author:$userTag:$authorAvatar}{description:<a:dp_star6:835142297125519420> ┇ $username[$findMember[$message[1]]] has been banned. . .₊˚
<:dash4:817209877335375932> **Reason**
 $replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;<:stare:797156847903047810> The member is got ban tried to adversite instead asking for partnership :(];false;$messageSlice[2]]}{color:$getServerVar[hex]}]
 $deletecommand
$ban[$findMember[$message[1]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{title:Uhhh}{description:<:dash6:817209859686400000> \`This user has a role equal to or higher than me\`}{color:$getServerVar[hex]}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{title:Uhhh}{description:<:dash6:817209859686400000> This user has a role equal to or higher than you}{color:$getServerVar[hex]}]
 
$onlyIf[$findMember[$message[1]]!=$authorID;{description:please dont make brain moment qwq}{color:$getServerVar[hex]}]
$onlyIf[$message[1]!=;{title:Ummm...}{field:**Can you use it like this? **:\`$getServerVar[prefix]ad <member | userID>\`}{color:$getServerVar[hex]}]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role~}{color:$getServerVar[hex]}]
$onlyBotPerms[ban;{description:<a:pas10:835152237042729040> missing \`ban\` permission}{color:$getServerVar[hex]}]
$suppressErrors`
}