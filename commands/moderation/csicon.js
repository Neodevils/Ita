module.exports = {
  name:"csicon",
  code:`
$setGuildIcon[$message]
$argsCheck[>1;{title:Oppsie}{descrpition:Enter a link.}]
$onlyIf[$message!=;{title:Ummm...} {description:You didn't enter a link.}{color:$getServerVar[hex]}]
$title[New Server Icon]
$description[You have changed server link, it is now \$message\`!]
$color[$getRoleColor[$highestRole[784865728322338816]]]
  $onlyPerms[manageserver;{title:Oppsie!}{description:You don't have \`Manage Server\` permission.}{color:$getServerVar[hex]}]
$cooldown[3m;{description:Wait %time% for change it is icon again.}{color:$getServerVar[hex]}]`
}