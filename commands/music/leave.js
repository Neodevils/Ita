module.exports = {
  name:"leave",
  aliases:['end'],
 code:`$leaveVC
$channelSendMessage[$channelID;{description:<a:dp_star6:835142297125519420> I left on voice channel. . . Thanks for kindly disconnecting me :3}{color:$getServerVar[hex]}]
$addCmdReactions[<:ribbon:797165741375881226>]
$djsEval[message.member.voice.channel.leave();]
$onlyIf[$voiceID[$clientID]!=;{title:Umm..}{description:I am not in voice chat-}{color:$getServerVar[hex]}]
$onlyIf[$voiceID!=;{title:Umm..}{description:You should be in a voice chat to use this command.}{color:$getServerVar[hex]}]
$suppressErrors[]
`
}