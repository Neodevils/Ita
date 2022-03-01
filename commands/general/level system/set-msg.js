module.exports = {
    name: "set-msg",
    code:`
$color[$getServerVar[hex]]
$author[Level up message setted!!]
$description[Successfully setted the level up message to:
\`\`\`$message\`\`\`
When someone level up, i'll send that message!
$replaceText[$replaceText[%$checkContains[$message;{username};{user.id};{level}]%;%true%;;-1];%false%;**WARNING**: You didn't setted any FUNCTION, it is recommended to set {functions} in the leveling message, such as: **+setmsg {username} You leveled up to level {level}, congratulations!**;1]]
$setServerVar[levelmsg;$message]
$footer[Executed by $username#$discriminator[$authorID]]
$addTimestamp
$onlyIf[$message!=;**$username** Wrong! please type a valid message, you can also use special functions such as {username}, {level} and {user.id}, for example: \`**{username}** you leveled up to level {level}\`!]
$onlyPerms[admin;**$username** only administrators can set this!]`
}