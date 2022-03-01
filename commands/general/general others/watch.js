module.exports = {

name: 'watch', 

code: `$if[$checkcontains[$tolowercase[$message[1]];youtube;yt]==true]

$djseval[

const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.discordTogether.createTogetherCode('$voiceID', 'youtube').then(async invite => {

 return message.channel.send(invite.code);

 });]

$elseif[$message==]

<a:dp_star6:835142297125519420> You need a message to supply it :3

$endelseif

$else 

uhhh, I couldn't find it... sowwy

$endif

$onlyif[$voiceID!=;<a:pas10:835152237042729040> how about you join vc and try :3]

$onlyif[$hasperms[$authorID;speak]==true]`

} 