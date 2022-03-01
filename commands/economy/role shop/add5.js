module.exports = {
  name: "add-5",
  code:`
$title[<a:dp_star6:835142297125519420> Role has added to role shop!]
$description[<a:pas10:835152237042729040> <@&$mentionedRoles[1]> role added to shop for <a:lowe:861599577387827201> \`$message[2]\` lovsu!!]
$color[$getServerVar[hex]]
$setServerVar[role5;$mentionedRoles[1]]
$setServerVar[price5;$message[2]]
$argsCheck[>2;{description:<a:galaxy_heart:861385723886567425> Please use \`$getServerVar[prefix]add-5 @role <price>\`}{color:$getServerVar[hex]}]
$onlyIf[$hasPerms[$authorID;admin]!=false;{description:<a:dp_star6:835142297125519420> Sorry, this command can be used by \`managers\`.}{color:$getServerVar[hex]}]`
}