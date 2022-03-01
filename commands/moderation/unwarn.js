module.exports = ({

name: "unwarn", 

code: `$if[$serverChannelExists[$getServerVar[modlogs]]==true]

$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:<:strawberry:843222396424945694> Mod Logs <:strawberry:843222396424945694>}{field:\`🌸\` ⨯ action꒦꒷:unwarn}{field:\`🐻\` ⨯ staff꒦꒷:$username,, <@$authorID>}{field:\`🍯\` ⨯ who did get unwarn?꒦꒷:<@$mentioned[1]>}{thumbnail:$userAvatar}{color:$getServerVar[hex]}]
$endif

$color[$getServerVar[hex]]

$author[Removed warn from $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]. . .;$userAvatar[$mentioned[1;yes]]]

$description[<a:dp_star6:835142297125519420> **$username** has removed a warn from **$username[$mentioned[1;yes]]** :0
they now have \`$getUserVar[warns;$findUser[$message]]\` warnings. . .]
$footer[Are they going to be good member owo?;$authorAvatar]
$setUserVar[warns;$sub[$getUserVar[warns;$findUser[$message]];1];$findUser[$message]]

$removeSplitTextElement[$getTextSplitLength]

$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description:**<a:pas10:835152237042729040> That user is higher than me on role position**}{color:$getServerVar[hex]}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description:**<a:pas10:835152237042729040> That user is higher/equal than you on role position**}{color:$getServerVar[hex]}]

$onlyIf[$isBot[$mentioned[1;yes]]!=true;{description:・**Ano.. We bots just listen to you amazing people. We don't do anything by ourselves :/ so no need for unwarn too-**}{color:$getServerVar[hex]}]

$onlyIf[$mentioned[1]!=;{description:**<a:dp_star6:835142297125519420> Mention the user you want to unwarn :3**}{color:$getServerVar[hex]}]

$onlyIf[$mentioned[1]!=$authorID;{description:**Uhhh.. You can't unwarn yourself <@$authorID>** I forgive you whatever you did anyways uwu}{color:$getServerVar[hex]}]

$onlyForRoles[$getServerVar[owner];$getServerVar[admin];{description:<a:pas10:835152237042729040> You don't have admin role to use unwarn command.}{color:$getServerVar[hex]}]

$onlyBotPerms[manageroles;<a:pas10:835152237042729040> **I don't have** \`MANAGAGE_ROLES\` perms cutie]`

})