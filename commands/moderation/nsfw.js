module.exports = {
  name: "nsfw",
  code: `$setTimeout[15m;
guildID: $guildID
userID: $mentioned[1]]
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]

$sendDM[$mentioned[1];{description:<a:pas10:835152237042729040> Your mute time has finished in $serverName[$guildID]}{color:$getServerVar[hex]}]
$takeRoles[$findMember[$message[1];$getServerVar[muted]]
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
 $channelSendMessage[$channelID;{author:$userTag:$authorAvatar}{description:<a:dp_star6:835142297125519420> ┇ $username[$findMember[$message[1]]] has been muted. . .₊˚
<:dash4:817209877335375932> **Reason**
 $replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;<:stare:797156847903047810>  NSFW (Pornographic content, other forms of content not safe for work) :/
 Not all people like dirty things.];false;$messageSlice[2]]}{color:$getServerVar[hex]}]
 $deletecommand
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{title:Uhhh}{description:<:dash6:817209859686400000> \`This user has a role equal to or higher than me\`}{color:$getServerVar[hex]}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{title:Uhhh}{description:<:dash6:817209859686400000> This user has a role equal to or higher than you}{color:$getServerVar[hex]}]
 
$onlyIf[$findMember[$message[1]]!=$authorID;{description:please dont make brain moment qwq}{color:$getServerVar[hex]}]
$onlyIf[$message[1]!=;{title:Ummm...}{field:**Can you use it like this? **:\`$getServerVar[prefix]nsfw <member | userID>\`}{color:$getServerVar[hex]}]
$onlyIf[$getServerVar[muted]!=;{description:**Ummm, I guess you haven't settled muted role.
 <a:dp_star6:835142297125519420> type \`$getServerVar[prefix]set-mute @role\` to set it**}{color:$getServerVar[hex]}]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role~}{color:$getServerVar[hex]}]
$onlyBotPerms[manageroles;{description:<a:pas10:835152237042729040> missing \`manageroles\` permission}{color:$getServerVar[hex]}]
$suppressErrors`
}