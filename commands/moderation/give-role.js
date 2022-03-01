module.exports = {
  name: "role-add",
  code:`$channelSendMessage[$channelID;{title:<a:dp_star6:835142297125519420> Added **$roleName[$findRole[$message[2]]]** to **$usertag[$findUser[$message[1]]]**}{color:$getServerVar[hex]}]
$giveRole[$findUser[$message[1]];$findRole[$message[2]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:**<a:pas10:835152237042729040>: That user is higher than me on role position**}{color:$getServerVar[hex]}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description**<a:pas10:835152237042729040> That user is higher/equal to you on role position**}{color:$getServerVar[hex]}]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role~}{color:$getServerVar[hex]}]`
}