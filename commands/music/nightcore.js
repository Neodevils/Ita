module.exports = {
    name: "nightcore", 
    code: `
$if[$checkCondition[$message[1]==on]$checkCondition[$message[1]==off]==falsefalse]
There is not a function called $message, only "on" or "off" neo, tihs code wokrs lol
$endif
$if[$checkCondition[$message[1]==on]==true]
<a:dp_star6:835142297125519420> Nightcore mode has **enabled**!
$songFilter[pitch:1.2;speed:1.15]
$endif

$if[$checkCondition[$message[1]==off]==true]
<a:pas10:835152237042729040> Nightcore mode has **disabled**~
||*Okii..*||
$songFilter[pitch:0;speed:0]
$endif

$onlyIf[$queueLength!=0;{description:<a:pas10:835152237042729040> Currently there is not a song for nightcore ~w~}{color:$getServerVar[hex]}]

$onlyIf[$voiceID!=;<a:dp_star6:835142297125519420> You need to join the voice channel first? OwO]`
    }
