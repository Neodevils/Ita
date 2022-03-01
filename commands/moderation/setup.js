module.exports = ({

name: "set-ticket",

code: `
$if[$message[1]==remove]

$setServerVar[ticketchannel;0]

$color[$getServerVar[hex]]

$channelSendMessage[$channelID;<a:dp_star6:835142297125519420> <@$authorID> - Ticket Category was removed by $username#$discriminator[$authorID].]

$suppressErrors

$else

$if[$channelExists[$findServerChannel[$message]]==true]

$setServerVar[ticketchannel;$findServerChannel[$message]]

$awaitMessages[$authorID;30s;everything;tsp2;*・Command has been cancelled*]

$sendMessage[{description:**Which Category Do you want to make For Ticket System? 

> <a:dp_star6:835142297125519420> Provide the Category ID. 

This Command will be cancelled after** \`30 seconds\`.}{color:$getServerVar[hex]};no]

$endif

$endif

$onlyPerms[admin;{description:Only Users with \`ADMIN\` perms can use this}{color:$getServerVar[hex]}{delete:10s}]

$suppressErrors[]`

})