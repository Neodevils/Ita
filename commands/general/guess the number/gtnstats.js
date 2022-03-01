module.exports = {
    name: "gtnstats",
    aliases: ['gtnstatistics'],
    code: `$title[Guess The Number Stats]
    $color[$getServerVar[hex]]
$description[<a:dp_star6:835142297125519420> \`GTN commands: disable-gtn, gtnstats, gtn\`]
$addField[<:dash4:817209877335375932> GTN Status;$getservervar[gtnstatus];yes]
$addField[<:dash5:817209872990076982> GTN Channel;<#$getservervar[guess_the_number_channel]>;yes]
$addField[<:dash3:817209881559826492> Wins;$getglobaluservar[gtnwins;$findmember[$message]];yes]
$addField[<:dash6:817209859686400000> Total Attempts/Wins;$getglobaluservar[gtnattempts;$findmember[$message]];yes]
$thumbnail[$useravatar[$findmember[$message]]]
$suppressErrors`
}