module.exports = {
    name: "set-blacklistchnl",
    code:`
$color[$getServerVar[hex]]
$title[୭ ꒰⑅ᐢ. ֑ .ᐢ꒱ ฅ Blacklisted!]
$description[>>> <:br_flower1:853589383193427998> **$username** successfully blacklisted the channel, now users won't be able to gain xp there!
You can unblacklist the channel back by doing $getServerVar[prefix]unblacklist #channel]
$addField[꒦꒷Blackisted Channel;<#$mentionedChannels[1]> *!*]
$footer[Executed by $username#$discriminator[$authorID]]
$addTimestamp
$setServerVar[lvlblacklisted;$mentionedChannels[1]]
$onlyPerms[admin;**$username** only admins can set this :x]
$onlyIf[$channelExists[$mentionedChannels[1]]==true;**$username** Please, mention a valid channel to blacklist :3]`
}