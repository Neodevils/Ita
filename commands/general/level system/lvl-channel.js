module.exports = {
    name: "lvlchannel",
    aliases: "set-lvlchannel",
    code: `
$color[$getServerVar[hex]]
$author[Setted leveling channel!]
$if[$message[1]==off]
$description[<:br_flower1:853589383193427998> **$username** Now i'll send the level up messages in the channel in where the user leveled up!]
$else
$description[<:br_flower1:853589383193427998> **$username** Now i'll send the level up messages in the <#$mentionedChannels[1]> channel! to disable this, just do t!lvlchannel off]
$endif
$footer[Executed by $username#$discriminator[$authorID]]
$addTimestamp
$if[$message[1]==off]
$setServerVar[lvlchannel; ]
$else
$setServerVar[lvlchannel;$mentionedChannels[1]]
$endif
$onlyPerms[admin;**$username** only administrators can set this!]
$onlyIf[$message!=;**$username** Please, mention a valid channel to set as level up channel, or do **$getServerVar[prefix]lvlchannel off** to set it as default]`
}