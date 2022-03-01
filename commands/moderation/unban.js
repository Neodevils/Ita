module.exports = {
   name:"unban",
   code:`

$unban[$message[1]]
$color[$getRoleColor[$highestRole[784865728322338816]]]
$author[₊˚Unban Successfully Completed ✿₊˚!!;$serverIcon]
$description[<:dash4:817209877335375932> $username[$message[1]]#$discriminator[$message[1]] named user now __unbanned__ *!*
<:dash5:817209872990076982> <@$authorID> ꒰ $userTag ꒱ unbanned the user✿~]
$footer[Welcome back to $serverName!੭]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role for unban~}{color:$getServerVar[hex]}]
$onlyIf[$hasPerms[784865728322338816;ban]!=false;{description:<a:dp_star6:835142297125519420> Hey!! Can you give me \`ban\` permission first unu}{color:$getServerVar[hex]}]
$onlyIf[$isNumber[$message[1]]!=false;{description:**✿ Try to enter the user is ID uwu**}{color:$getServerVar[hex]}]
$onlyIf[$message!=;{description:*・Can you please enter a ID?*}{color:$getServerVar[hex]}]
$suppressErrors[{description:ꕥ the user already unbanned? owo}{color:$getServerVar[hex]}]
`
}