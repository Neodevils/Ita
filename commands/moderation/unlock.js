module.exports = ({
  name:"unlock",
  code:`
  $modifyChannelPerms[$mentionedChannels[1;yes];+sendmessages;$guildID]
  $title[. . .channel unlock system. . .]
  $description[<a:dp_star6:835142297125519420> Successfully unlocked the channel
<:d_dash6:854144805213569027> The channel unlocked: <#$mentionedChannels[1;yes]>
<:d_dash5:854144810340319262> **who did unlock?**: $userTag[$authorID]]
  $color[$getServerVar[hex]]
  $thumbnail[$authorAvatar]
  $useChannel[$channelID]
  $onlyIf[$isNumber[$noMentionMessage[1]]==false;<a:dp_star6:835142297125519420> Please mention a channel.]
  $onlyBotPerms[managechannels;{title:Uhh...}{description:<a:0_flower1:817391078810320916> I need **\`MANAGE_CHANNELS\`** permission.}{color:$getServerVar[hex]}]
  $onlyPerms[managechannels;{title:Uhh...}{description:<a:0_flower1:817391078810320916> You need **\`MANAGE_CHANNELS\`** permission to use this command.}{color:$getServerVar[hex]}]
  $argsCheck[>1;<a:dp_star6:835142297125519420> Please __**mention**__ a channel.
<:d_dash4:854144815235465277> example: \`$getServerVar[prefix]unlock #$channelName[$channelID]\`]
`
  })