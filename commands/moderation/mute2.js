module.exports = {
  name:"vmute",
  code:`
$muteUser[$findMember[$message[1]];yes;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;<:stare:797156847903047810> No reason given.];false;$messageSlice[1]]]
$author[Shhhh!;$authorAvatar]
$description[**<a:dp_star6:835142297125519420> ┇ $username[$findMember[$message[1]]] has been muted in voice channels!₊˚**]
$addField[<:dash6:817209859686400000> Reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;<:stare:797156847903047810> No reason given.];false;$messageSlice[1]]]
$color[$getRoleColor[$highestRole[784865728322338816]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{title:Uhhh}{description:<:dash6:817209859686400000> \`This user has a role equal to or higher than me\`}{color:$getServerVar[hex]}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{title:Uhhh}{description:<:dash6:817209859686400000> This user has a role equal to or higher than you}{color:$getServerVar[hex]}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:・Umm... You can't mute yourself..}{color:$getServerVar[hex]}]
$onlyIf[$voiceID[$findUser[$message[1]]]!=;{description:The member you are trying to voice mute is not in a voice channel o.o''}{color:FFB87D}]
$onlyIf[$message[1]!=;{title:Ummm...}{field:**Can you use the command like this?**:\`$getServerVar[prefix]vmute <member | userID>\`}{color:$getServerVar[hex]}]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role~}{color:$getServerVar[hex]}]
$onlyBotPerms[manageroles;{description:<a:pas10:835152237042729040> You don't have \`manageroles\` permission}{color:$getServerVar[hex]}]`
}