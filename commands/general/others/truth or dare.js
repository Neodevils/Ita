module.exports={
  name: "td",
  code:`$awaitMessages[everyone;30s;Truth,Dare;Truth,Dare;*Cancelled cause of they didn't answer :(*]
  $editMessage[$getServerVar[tdplayer];$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;{description:There wasn't a participant. . .}{color:ffcbfc}];false;<@$randomText[$joinSplitText[;]]> **Truth** or **Dare**?]]
  $channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;];false;<a:dp_star6:835142297125519420> Oops! bottle has stopped and it shows <@$randomText[$joinSplitText[;]]>~
  Truth or Dare, $nickname[$randomText[$joinSplitText[;]]]?]]
$textSplit[$replaceText[$getReactions[$channelID;$getServerVar[tdplayer];🍷;id];$clientID,;];,]
$wait[15s]
  $setServerVar[tdplayer;$sendMessage[{description:$userTag[$authorID] spinning the bottle and it seems like bottle will stop in 
**15 seconds** tap to emoji right now!}{color:$getServerVar[hex]}{reactions:🍷}{delete:60s};yes]]
$deletecommand
$onlyIf[$getServerVar[tdchannel]!=;{description:**Ummm, I guess you haven't settled channel in message too.
 <a:dp_star6:835142297125519420> type \`$getServerVar[prefix]set-tdchannel #channel\` to set it**}{color:fcbfcb}]
$onlyIf[$channelID==$getServerVar[tdchannel];]`
}