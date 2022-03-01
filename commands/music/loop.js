module.exports = ({
 name: "loop",
 aliases: ['repeat'],
 code: `
 $description[$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;<a:dp_star6:835142297125519420> Looping the queue now!];false;<a:pas10:835152237042729040> Looping the current queue is off now!]
 $author[$userTag;$authorAvatar]
 $color[$getServerVar[hex]]
$onlyIf[$queueLength!=0;{description:<a:pas10:835152237042729040> Currently there is no song for loop ~w~}{color:$getServerVar[hex]}]
$onlyIf[$voiceID!=;<a:dp_star6:835142297125519420> You need to join the voice channel first? OwO]`
})