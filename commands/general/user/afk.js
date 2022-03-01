module.exports = ({
name:"afk",
code:`
$deletecommand
$deleteIn[15s]
$setVar[afkkk;$sum[$getVar[afkkk];1]]
$setGlobalUserVar[afk;evet]
$setGlobalUserVar[afkc;0]
$setGlobalUserVar[afks;$message]
$setGlobalUserVar[afkss;$dateStamp]
$author[$userTag;$authorAvatar]
$description[<a:pas10:835152237042729040> you set yourself to afk status. . .
||<:dash3:817209881559826492> afk reason⁀➷\`$message\`
<:dash5:817209872990076982> Total afk member count⁀➷\`$getVar[afkkk]\`||]
$footer[— when did I become afk?⁀➷] $addTimestamp
$color[$getServerVar[hex]]
$onlyIf[$message!=;<a:dp_star6:835142297125519420> May you set a message for your __afk__ status?]`
})