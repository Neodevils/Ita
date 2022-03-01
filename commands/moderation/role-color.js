module.exports = {
  name: "role-color",
  code: `
  $modifyRole[$findRole[$message[1]];$roleName[$findRole[$message[1]]];$message[2]]
$channelSendMessage[$channelID;{title:<a:dp_star6:835142297125519420> Role **color** changed successfully!!}{color:$message[2]}]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role~}{color:$getServerVar[hex]}]`
  
}