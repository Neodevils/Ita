module.exports = ({
name:"find-channel",
aliases: ['searchchannel', 'channelsearch', 'channel-search'],
bkz:"Kanallar Arasından yazılam kelimeyi içeren kanalları arar ve yazar.",
code:`
$channelSendMessage[$channelID;<a:dp_star6:835142297125519420> **__for mobile users:__**
$djsEval[message.guild.channels.cache.filter(x => x.name.includes("$message")).map(x => x).join(", ");yes];no]
$author[$serverName[$guildID]'s channels scanning. . .;$serverIcon[$guildID]
$thumbnail[$authorAvatar]]
$description[<:dash3:817209881559826492> searching channel word: \`$message\`

<:dash4:817209877335375932> **Results**
<:d_dash6:854144805213569027> channel(s): $djsEval[message.guild.channels.cache.filter(x => x.name.includes("$message")).map(x => x).join(", ");yes]
<:d_dash5:854144810340319262> how many channels: **$djsEval[message.guild.channels.cache.filter(x => x.name.includes("$message")).map(x => x).length;yes]**
<:d_dash4:854144815235465277> asked by: $userTag[$authorid]
<:d_dash3:854144826265960448> the server: $serverName[$guildID]]
$color[$getServerVar[hex]]


$onlyIf[$djsEval[message.guild.channels.cache.filter(x => x.name.includes("$message")).map(x => x).length;yes]!=0;<a:pas10:835152237042729040> Didn't find any channel-]
$onlyIf[$checkContains[$message;A;B;C;Ç;D;E;F;G;Ğ:H:I:İ:J;K;L;M;N;O;Ö;P;R;S;Ş;T;U;Ü;V;Y;Z;X;Q;W]!=true;<a:unlem_kaeru:864997251932094514>  uhm.. channel names are not capitalized senpai~]
$onlyIf[$charCount[$message]<48;<a:unlem_kaeru:864997251932094514> channel name can not be longer than 48 letters :3]
$onlyIf[$checkContains[$message; ]!=true;<a:dp_star6:835142297125519420> ummm, you can't see gaps on channels, can you? :3]
$onlyIf[$mentionedRoles[1]==;<a:pas10:835152237042729040> Please do not mention a role while searching for channel. ]
$onlyIf[$mentioned[1]==;<a:pas10:835152237042729040> Please do not mention a member while searching for channel.]

$onlyIf[$mentionedChannels[1]==;<a:pas10:835152237042729040> Please do not mention a channel while searching for channel.]
$onlyIf[$message!=;<a:dp_star6:835142297125519420> May you enter a word or letter?]`
})