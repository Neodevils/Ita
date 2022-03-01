module.exports = ({

name: "ticket",

code: `$if[$serverChannelExists[$getServerVar[modlogs]]==true]

$channelSendMessage[$getServerVar[modlogs];{title:<:strawberry:843222396424945694> Mod Logs <:strawberry:843222396424945694>}{field:\`🌸\` ⨯ action꒦꒷:ticket}{field:\`🐻\` ⨯ user꒦꒷:$userTag[$authorID],, <@$authorID>}{field:\`🍯\` ⨯ ticket creation date?꒦꒷:⬇⬇⬇⬇⬇}{timestamp}{thumbnail:$userAvatar}{color:$getServerVar[hex]}]
$endif

$if[$serverChannelExists[$getServerVar[ticketchannel]]==true]

$newTicket[ticket-$username[$authorID];{title:✿ Ticket opened ✿}{description:> <:dash6:817209859686400000> Hello, <@$authorID>. Here is your ticket!
> Please give the information about your problem or feedback. 

Thanks in advance for being patient  (●'▽'●)ゝ}{footer:Use $getServerVar[prefix]close to close your ticket}{color:fcbfcb};$getServerVar[ticketchannel];no;・ <@$authorID>, I failed to create your ticket! Try again]

$sendMessage[{description:Ticket Successfully opened! Hello, <@$authorID>. Go to **$toLowercase[#$username$discriminator]** to describe your issue!}{color:fcbfcb};<a:dp_star6:835142297125519420> Something went wrong. . .]
$endif`
})