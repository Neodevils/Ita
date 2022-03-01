module.exports = {
 name: "botinfo", 
 aliases: ['botstats','stats'],
 description: "Check the bot's information/stats",
 usage: "",
 category: "information",
 code: `$title[$username[$clientID] stats₊˚]
 $color[$getServerVar[hex]]
 $thumbnail[$userAvatar[$clientID]]
$description[<:dash3:817209881559826492>**__My Info__** <:dash3:817209881559826492>
<:br_flower1:853589383193427998> Name: \`$user[784865728322338816;name]\`
<a:pas10:835152237042729040> ID: \`$clientID\`
<:br_flower1:853589383193427998> Birthday: \`$creationDate[$clientID]\`
<a:pas10:835152237042729040> ︎Owner: \`$userTag[285118390031351809]\`
<:br_flower1:853589383193427998> Prefix: "$getServerVar[prefix]"
<a:pas10:835152237042729040> ︎Total Commands: \`$commandsCount\`
<:br_flower1:853589383193427998> Latency: \`$botPing ms\`
<a:pas10:835152237042729040> ︎Uptime: \`$uptime\`
<:br_flower1:853589383193427998> Servers: \`$serverCount\`
<a:pas10:835152237042729040> ︎Users: \`$allMembersCount\`
<:br_flower1:853589383193427998> RAM Usage: \`$ram MB\`
<a:pas10:835152237042729040> ︎Memory Usage: \`$djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB\`

<:dash5:817209872990076982> **__CPU Info__** <:dash5:817209872990076982>
> •CPU Usage: \`$cpu%\`
> •CPU Model: \`$djsEval[require ('os').cpus()[0].model;yes]\`
> •CPU Platform: \`$djsEval[require ('os').platform();yes]\`

<:dash4:817209877335375932> **__Package Info__** <:dash4:817209877335375932>
<a:dp_star6:835142297125519420> Aoi.js: \`v$packageVersion\`
<:strawberry:843222396424945694> Node.js: \`$nodeVersion\`
]
 
 $addTimestamp
 $cooldown[5s;{description:<:dash6:817209859686400000> A bit too fast there. Wait for **%time%**!}{color:$getServerVar[hex]} ]`
 }