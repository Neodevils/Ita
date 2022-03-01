module.exports = ({

name: "warn",

code: `$if[$serverChannelExists[$getServerVar[modlogs]]==true]

$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:<:strawberry:843222396424945694> Mod Logs <:strawberry:843222396424945694>}{field:\`🌸\` ⨯ action꒦꒷:unwarn}{field:\`🐻\` ⨯ staff꒦꒷:$username,, <@$authorID>}{field:\`🍯\` ⨯ who did get warn?꒦꒷:<@$mentioned[1]>}{field:\`🍷\` ⨯ reason꒦꒷:$noMentionMessage}{thumbnail:$userAvatar}{color:$getServerVar[hex]}]
$endif

$deletecommand

$color[$getServerVar[hex]]

$title[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]] you bad bad]

$description[<a:dp_star6:835142297125519420> **$username** has warned **$username[$mentioned[1;yes]]** for \`$noMentionMessage\`

and now they have \`$getUserVar[warns;$mentioned[1]]\` warnings owo]
$footer[Staff:$userTag[$authorID];$authorAvatar]
$setUserVar[reason;$getUserVar[reason;$mentioned[1]]/**$date+:$hour:$minute:$second**+> $noMentionMessage+;$mentioned[1]]

$setUserVar[warns;$sum[$getUserVar[warns;$mentioned[1]];1];$mentioned[1]]

$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description:**<a:pas10:835152237042729040> That user is higher than me on role position**}{color:$getServerVar[hex]}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description:**<a:pas10:835152237042729040> That user is higher/equal than you on role position**}{color:$getServerVar[hex]}]

$onlyIf[$message[2]!=;{description:**<a:dp_star6:835142297125519420> Can you provide a reason? That will be easier to understand for others uwu**}{color:$getServerVar[hex]}]


$onlyIf[$mentioned[1]!=;{description:**<a:dp_star6:835142297125519420> Mention the user you want to warn and provide a reason :3**}{color:$getServerVar[hex]}]

$onlyIf[$mentioned[1]!=$authorID;{description:**Uhhh.. You can't warn yourself <@$authorID>** I forgive you whatever you did :(}{color:$getServerVar[hex]}]

$onlyIf[$isBot[$mentioned[1;yes]]!=true;{description:・**Ano.. We bots just listen to you amazing people. We don't do anything by ourselves :/**}{color:$getServerVar[hex]}]

$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role to use warn command.}{color:$getServerVar[hex]}]

$onlyBotPerms[manageroles;<a:pas10:835152237042729040> **I don't have** \`MANAGAGE_ROLES\` perms cutie]`

})