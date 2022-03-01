module.exports = {
name: "reboot", 
aliases:['restart','update'],
code: `
$updateCommands
$wait[1s]
$channelSendMessage[$channelID;{title:<a:dp_star6:835142297125519420> Updating Commands. . .}{description:$username[$clientID] started to resarting/updating. Before restarting... M-my last uptime: $uptime.
||Sa||||yo||||na||||ra..||} {color:$getServerVar[hex]}]
$onlyForIDs[285118390031351809;<a:dp_star6:835142297125519420> you are not the bot owner, senpai-]
`
}