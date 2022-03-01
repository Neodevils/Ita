module.exports = {
  name:"join",
  aliases:['start'],
 code:`$joinVC
$channelSendMessage[$channelID;{description:<a:dp_star6:835142297125519420> Yay! I joined the voice channel you are in owo}{color:fcbfcb}]
$addCmdReactions[<:ribbon:797165741375881226>]
$djsEval[message.member.voice.channel.join();]
$onlyIf[$voiceID[$clientID]==;{title:Umm..}{description:I am already in a voice channel-}{color:$getServerVar[hex]}]
$onlyIf[$voiceID!=;{title:Umm..}{description:You should be in a voice chat to use this command.}{color:$getServerVar[hex]}]
$suppressErrors[]`
}