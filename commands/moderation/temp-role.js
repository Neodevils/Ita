module.exports = ({

name: "temprole",
aliases: "trole", 
code: `$if[$serverChannelExists[$getServerVar[modlogs]]==true]

$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:<:strawberry:843222396424945694> Mod Logs <:strawberry:843222396424945694>}{field:\`🌸\` ⨯ action꒦꒷:temprole removed..}{field:\`🐻\` ⨯ who has given the role?꒦꒷:$username}{field:\`🍯\` ⨯ user꒦꒷:$userTag[$mentioned[1]]}{field:\`🍷\` ⨯ role꒦꒷:<@&$findRole[$message[2]]> removed}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}]

$endif

$channelSendMessage[$channelID;{title:Time is up!}{description:
> <@$mentioned[1]>, I removed the $roleName[$findRole[$message[2]]] role~}{color:$getServerVar[hex]}]

$takeRoles[$mentioned[1];$findRole[$message[2]]]


$wait[$replaceText[$replaceText[$checkCondition[$message[3]==];true;24d];false;$message[3]]]

$channelSendMessage[$channelID;{title:Alright!}{description:⨯ <@$authorID>
<a:dp_star6:835142297125519420> ┇ $username[$mentioned[1]]#$discriminator[$mentioned[1]] has been given the $roleName[$findRole[$message[2]]] role for \`$replaceText[$replaceText[$checkCondition[$message[3]==];true;undefined time];false;$message[3]]\`}{color:$getServerVar[hex]}]

$giveRoles[$mentioned[1];$findRole[$message[2]]]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]

$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:<:strawberry:843222396424945694> Mod Logs <:strawberry:843222396424945694>}{field:\`🌸\` ⨯ action꒦꒷:temprole added!}{field:\`🐻\` ⨯ staff꒦꒷:$username}{field:\`🍯\` ⨯ user꒦꒷:$userTag[$mentioned[1]]}{field:\`🍷\` ⨯ role꒦꒷:<@&$findRole[$message[2]]>}{field:\`🍄\` ⨯ time꒦꒷: \`$message[3]\`}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}]

$endif
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];{description:<a:pas10:835152237042729040> That user is higher than me on role position}{color:$getServerVar[hex]}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{description:<a:pas10:835152237042729040> That user is higher than you on role position.}{color:$getServerVar[hex]}]
$suppressErrors[{title:Uhhhh...}{description:<:dash6:817209859686400000> I can't find the role :(}{color:$getServerVar[hex]}]

$argsCheck[>3;{title:Na..na..na..}{description:<a:dp_star6:835142297125519420> Use it like this:
\`$getServerVar[prefix]temprole @user @role <time>\`}{color:$getServerVar[hex]}]

$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role~}{color:$getServerVar[hex]}]`

})

