module.exports = ({
name: "disable-gtn",
code: `
$description[<a:dp_star6:835142297125519420> Disabled. . .]
$color[$getServerVar[hex]]
$setservervar[gtntries;0]
$setservervar[guess_the_number_channel;Not set]
$setservervar[winning_number;0]
$suppressErrors
$onlyperms[managechannels;{description:<a:dp_star6:835142297125519420> No thanks cutie, you don't have the \`MANAGE_CHANNELS\` permission}{color:fcbfcb}]`
})
