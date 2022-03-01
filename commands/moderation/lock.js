module.exports = ({
  name:"lock",
  code:`
$if[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];s;;-1];m;;-1];h;;-1];d;;-1]]==true]
  $reply[$messageID;<a:pas10:835152237042729040> unlocked the channel! <a:pas10:835152237042729040>;yes]
  $modifyChannelPerms[$mentionedChannels[1;yes];+sendmessages;$guildID]
  $wait[$noMentionMessage[1]]
  $modifyChannelPerms[$mentionedChannels[1;yes];-sendmessages;$guildID]
  $channelSendMessage[$channelID;{title:. . .channel lock system. . .}
  {description:<a:dp_star6:835142297125519420> The channel successfully locked for \`$noMentionMessage[1]\`~~
  
<:dash3:817209881559826492> **locked channel**: <#$mentionedChannels[1;yes]>
<:dash4:817209877335375932> lock time: $replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];s; secs];m; mins;];h; hour];d; day;-1]
<:dash5:817209872990076982> the staff locked: $userTag[$authorID]
<:d_dash6:854144805213569027> **__reason of lockdown__**: $noMentionMessage[2] $noMentionMessage[3] $noMentionMessage[4] $noMentionMessage[5]}
  {color:$getServerVar[hex]}{thumbnail:$authorAvatar}]
  $onlyIf[$mentionedChannels[1]!=;<a:dp_star6:835142297125519420> please mention a channel]
  $onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];s;;-1];m;;-1];h;;-1];d;;-1]]==true;<a:dp_star6:835142297125519420>can you enter time too? ]
  $onlyIf[$checkContains[$toLowerCase[$noMentionMessage[1];s;m;d;h]]==true;<a:dp_star6:835142297125519420> umm.. use time variables like \`1h, 5m, 10s\` etc]
  $onlyPerms[managechannels;{title:Uhh...}{description:<a:dp_star6:835142297125519420> You don't have \`MANAGE_CHANNELS\` permission.}{color:$getServerVar[hex]}]
  $argsCheck[>1;<a:unlem_kaeru:864997251932094514> You should use it like: $getServerVar[prefix]lock #channel <time>]
  $onlyBotPerms[managechannels;{title:Uhh...}{description:<a:dp_star6:835142297125519420> I don't have \`MANAGE_CHANNELS\` permission. CN you enable it on me? }{color:$getServerVar[hex]}]
$else
  $modifyChannelPerms[$mentionedChannels[1;yes];-sendmessages;$guildID]
  $channelSendMessage[$channelID;{title:. . .channel locking system. . .}
  {description:<a:dp_star6:835142297125519420>**__channel locked for \`unlimited\` time.__**
  
  <:dash3:817209881559826492> **locked channel**: <#$mentionedChannels[1;yes]>
<:dash4:817209877335375932> lock time: unlimited
<:dash5:817209872990076982> the staff locked: $userTag[$authorID]
<:d_dash6:854144805213569027> **__reason of lockdown__**: $noMentionMessage}
  {color:$getServerVar[hex]}{thumbnail:$authorAvatar}]
  $onlyIf[$mentionedChannels[1]!=;<a:dp_star6:835142297125519420> Please mention a channel]
  $onlyPerms[managechannels;{title:Uhh...}{description:<a:dp_star6:835142297125519420> You do not have \`MANAGE_CHANNELS\` permission.}{color:$getServerVar[hex]}]
  $argsCheck[>1;<a:unlem_kaeru:864997251932094514> You should use it like: $getServerVar[prefix]lock #channel]
  $onlyBotPerms[managechannels;{title:Uhh...}{description:<a:dp_star6:835142297125519420> I don't have \`MANAGE_CHANNELS\` permission.}{color:$getServerVar[hex]}]
$endif
`
  })