module.exports = {
 name: "giveaway",
 code: `
$editMessage[$getServerVar[giveaway];**<:tada:843533022561304617> GIVEAWAY  ENDED <:tada:843533022561304617>** {description:**<:strawberry:843222396424945694> Reward : \`$messageSlice[1]\` <:tada:843533022561304617>
> 
> <a:pas10:835152237042729040> By : __$userTag[$authorID]__
> 
> <a:dp_star6:835142297125519420> Winner : $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;There wasn't a participant. . .];false;<@$randomText[$joinSplitText[;]]>.]**}{color:$getServerVar[hex]}{footer:Giveaway ended꒦꒷:$authorAvatar}]
$channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;];false;<:dash6:817209859686400000> Winner of \`$messageSlice[1]\` is <@$randomText[$joinSplitText[;]]>, Congratulations!! <a:dp_star6:835142297125519420>]]
$textSplit[$replaceText[$getReactions[$channelID;$getServerVar[giveaway];<:tada:843533022561304617>;id];$clientID,;];,]
$wait[$message[1]]
$setServerVar[giveaway;$sendMessage[ <:tada:843533022561304617> **GIVEAWAY** <:tada:843533022561304617> {description:<:dash6:817209859686400000> ʕ Reward ʔ ✩˖ : \`$messageSlice[1]\` ౨ 

<:dash3:817209881559826492> ʕ By ʔ ✩˖ : **$userTag[$authorID]** ♡

<:dash4:817209877335375932> ʕ Time ʔ ✩˖  : **$message[1]** ✿}{timestamp}{color:$getServerVar[hex]}{reactions:<:tada:843533022561304617>};yes]]
$onlyIf[$messageSlice[1]!=;{title:Umm..}{description:<a:dp_star6:835142297125519420> You didn't type the reward.
 <a:pas10:835152237042729040> \`Listen to this format;;\`
\`\`\`
$getServerVar[prefix]giveaway <time> <reward>.\`\`\`
__**\` do not type <>\`**__
}{color:ff8b7d}]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{title:Oops. . .}{description:**Umm.. You used wrong time format.
<:dash6:817209859686400000> Use it like this :
\`\`\`
30s 30 seconds
10m 10 minutes
3h 3 hours
1d 1 day
\`\`\`**}{color:$getServerVar[hex]}]

$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];$getServerVar[giveaway];{description:<a:pas10:835152237042729040> You don't have staff/giveaway dealer role~}{color:$getServerVar[hex]}]
$deletecommand
`
}