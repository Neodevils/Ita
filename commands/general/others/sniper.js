module.exports = ({
  name:"snipe",
  code:`$author[$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]
  $color[$getServerVar[hex]]
  $title[I see it~]
$description[<a:dp_star6:835142297125519420> the lastest message deleted — $getChannelVar[snipe_msg;$mentionedChannels[1;yes]]

*\`I'll delete this message 20 seconds later -3-\`*]
$footer[#$channelName[$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]] ┇ $getChannelVar[snipe_date;$mentionedChannels[1;yes]]]

$onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=;{description:Theres nothing to snipe in <#$mentionedChannels[1;yes]>}{color:fcbfcb}]

  $deleteIn[20s]
  $serverCooldown[30s;{description:**୨୧ this command can be used \`%time%\` later owo**}{color:ffb87d}{delete:10s}]`
 });
