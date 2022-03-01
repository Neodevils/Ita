module.exports = {
  name:"pause",
  code:`$addReactions[<a:dp_star6:835142297125519420>]
$pauseSong
$author[┊ Your Music has paused!;$authorAvatar]
$description[*・You paused the song~*]
$color[$getServerVar[hex]]

$onlyIf[$queueLength!=0;{description:you can't use this command while nothing is playing :3}{color:$getServerVar[hex]}]
$onlyIf[$voiceID!=;{description:You should've been in a voice chat to execute this command.}{color:ffd87d}]
$suppressErrors[{description:Contract with Neo qwq this is too much for me-}{color:$getServerVar[hex]}]`
}