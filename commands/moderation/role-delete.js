module.exports = {
  name: "role-delete",
  code: `
  $deleteRoles[$findRole[$message[1]]]
$channelSendMessage[$channelID;{title:<a:dp_star6:835142297125519420> Role **deleted** successfully!!}{color:$getServerVar[hex]}]
$onlyIf[$mentionedRoles[1]!=;{description:Please mention the role uwu}{color:$getServerVar[hex]}]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];{description:<a:pas10:835152237042729040> You don't have mod role~}{color:$getServerVar[hex]}]`
}
