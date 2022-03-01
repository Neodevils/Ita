module.exports = {
  name: "unmute",
  code: `
$takeRoles[$findMember[$message[1]];$getServerVar[muted]]
$deletecommand
$author[Oki doki!;$authorAvatar]
$description[**<a:dp_star6:835142297125519420> ┇ $username[$findMember[$message[1]]] has been unmuted!₊˚**]
$color[$getRoleColor[$highestRole[784865728322338816]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{title:Uhhh}{description:<:dash6:817209859686400000> \`This user has a role equal to or higher than me\`}{color:$getServerVar[hex]}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{title:Uhhh}{description:<:dash6:817209859686400000> This user has a role equal to or higher than you}{color:$getServerVar[hex]}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:・Umm... You what? uh. You can't unmute yourself owo}{color:$getServerVar[hex]}]
$onlyIf[$getServerVar[muted]!=;{description:**Ummm, I guess you haven't settled muted role.
 <a:dp_star6:835142297125519420> type \`$getServerVar[prefix]set-mute @role\` to set it**}{color:$getServerVar[hex]}]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role~}{color:$getServerVar[hex]}]
$onlyBotPerms[manageroles;{description:<a:pas10:835152237042729040> You don't have \`manageroles\` permission}{color:$getServerVar[hex]}]
$suppressErrors
$onlyIf[$message[1]!=;{title:Ummm...}{field:**Can you use the command like this?**:\`$getServerVar[prefix]unmute <member | userID>\`}{color:$getServerVar[hex]}]`
}