module.exports = {
name: "kick",
code: `
$kick[$findUser[$message[1]]]
 $author[$userTag;$authorAvatar]
 $description[<:dash6:817209859686400000> <@$authorID> requested for kicked the user so I kicked... 
・**Tag:** $userTag[$findUser[$message[1]]]
・**Mention:** <@$findUser[$message[1]]>
・ **ID:** $findUser[$message[1]]]
 $footer[✿ Done, $username[$authorID]!]
 $addTimestamp
 $color[$getRoleColor[$highestRole[784865728322338816]]]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:<a:pas10:835152237042729040> **You-you can't kick someone is higher than you....**}{color:$getServerVar[hex]}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{description:<a:pas10:835152237042729040> **The person are you trying to kick... Higher than me?**}{color:$getServerVar[hex]}]
$onlyIf[$findUser[$message[1]]!=$clientID;{description:<a:dp_star6:835142297125519420> **Uhm, what..?
I can't kick myself :(**}{color:$getServerVar[hex]}]

$onlyIf[$memberExists[$findUser[$message[1]]]==true;{description:<a:pas10:835152237042729040> **Umm,there is no member exists in the server with that ID or mention**}{color:$getServerVar[hex]}]
$onlyIf[$memberExists[$findUser[$message[1]]]!=$authorID;{description:<a:pas10:835152237042729040> **Ugh! Simply leave on the server, I don't want to kick you...**}{color:$getServerVar[hex]}]
$onlyIf[$findUser[$message[1]]!=$ownerID;{description:**Really? Owner??**}{color:$getServerVar[hex]}]
$onlyIf[$findUser[$message[1]]!=$authorID;{description:<a:pas10:835152237042729040> **Ugh! Simply leave on the server, I don't want to kick you...**}{color:$getServerVar[hex]}]
$onlyIf[$message[1]!=;{description:<a:pas10:835152237042729040> **Mention or use ID for kick :3**}{color:$getServerVar[hex]}]

$onlyBotPerms[kick;{description:<a:pas10:835152237042729040> Oopsie!!
  It seems like I don't have \`KICK\` permission.}{color:$getServerVar[hex]}]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a \`staff\` role~}{color:$getServerVar[hex]}]`
}
  