module.exports = ({

name: "close",

code: `$channelSendMessage[$getServerVar[modlogs];{title:<:strawberry:843222396424945694> Mod Logs <:strawberry:843222396424945694>}{field:\`🌸\` ⨯ action꒦꒷:ticket close}{field:\`🐻\` ⨯ user꒦꒷:$username,, <@$authorID>}{field:\`🍯\` ⨯ ticket ending date:⬇⬇⬇⬇⬇}{timestamp}{thumbnail:$userAvatar}{color:$getServerVar[hex]}]
$endif

$closeTicket[{description: <a:pas10:835152237042729040> This is not a ticket}{color:$getServerVar[hex]}]

$onlyIf[$checkContains[$channelName;ticket]==true;{description: <a:dp_star6:835142297125519420> This command can only be used in tickets}{color:$getServerVar[hex]}{delete:10s}]

$suppressErrors`

})