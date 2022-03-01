module.exports = ({
name: "volume",
aliases: ['vol'],
code: `$volume[$message]
$author[┇ Done, done, done!//// ;$authorAvatar]
$description[**・I.. I changed volume to $message. I hope you are okay with it ✿**]
$color[$getServerVar[hex]]
$onlyIf[$message<=200;{description:Maximum 200 owo}{color:$getServerVar[hex]}]

$onlyIf[$voiceID==$voiceID[$clientID];{title:Umm...} {description:<a:dp_star6:835142297125519420> You need to be in the same vc with me ///} {field:I am in. .:<#$voiceID[$clientID]> come here~} {field:You are in. .:<#$voiceID> owo} {color:$getServerVar[hex]}]
$onlyIf[$queueLength>0;{description:<a:dp_star6:835142297125519420> You don't have anything in the queue UnU}{color:$getServerVar[hex]}]
$onlyIf[$isNumber[$message]!=false;{description: <a:dp_star6:835142297125519420> Can you pweease enter numbers?}{color:$getServerVar[hex]}]
$argsCheck[1;{color:$getServerVar[hex]}{description: ✿ Won't you enter a volume? OwO}]
$suppressErrors[{color:$getServerVar[hex]}{title:Something went wrong qwq}{description:If you see this, something probably went wrong. Please immediately report this to my Developer! qwq}]`
})