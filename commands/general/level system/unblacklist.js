module.exports = {
    name: "set-unblacklistchnl",
    code:`
$color[$getServerVar[hex]]
$title[୭ ꒰⑅ᐢ. ֑ .ᐢ꒱ ฅ Unblacklisted!]
$description[>>> <:br_flower1:853589383193427998> **$username** successfully unblacklisted the channel, now users won't be able to gain xp there!
You can blacklist the channel back by doing $getServerVar[prefix]blacklist #channel]
$addField[꒦꒷Unblackisted Channel;<#$mentionedChannels[1]> *!*]
$footer[Executed by $username#$discriminator[$authorID]]
$addTimestamp
$setServerVar[lvlblacklisted;0]
$onlyPerms[admin;**$username** only admins can set this :x]
$onlyIf[$channelExists[$mentionedChannels[1]]==true;**$username** Please, mention a valid channel to unblacklist :3]`
}