module.exports = {
    name: "set-lvl",
    code: `$author[Yay, level setted!]
$color[$getServerVar[hex]]
$description[<:br_flower1:853589383193427998>Successfully setted the level of <@$mentioned[1]>, now that user is level $noMentionMessage]
$setUserVar[level;$noMentionMessage;$mentioned[1]]
$onlyIf[$isNumber[$noMentionMessage]==true;Please, type a valid level!]
$onlyIf[$mentioned[1]!=;Please, mention a user and enter the level]
$addTimestamp
$footer[Executed by $username]
$onlyPerms[admin;Only admins can set users level!]`
}