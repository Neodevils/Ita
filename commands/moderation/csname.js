module.exports = {
  name:"csname",
  code:`
$setGuildName[$message]


$title[New Server Name]
$description[You have changed server name, it is now \`$message\`!]
$color[$getRoleColor[$highestRole[784865728322338816]]]
$cooldown[3m;{description:Wait %time% for change it is name again.}{color:$getServerVar[hex]}]
$argsCheck[>1;{title:Oppsie}{descrpition:Enter a name.}]
$onlyIf[$message!=;{title:Ummm...} {description:You didn't enter a name.}{color:$getServerVar[hex]}]
$onlyPerms[manageserver;{title:Oppsie!}{description:You don't have \`Manage Server\` permission.}{color:$getServerVar[hex]}]`
}