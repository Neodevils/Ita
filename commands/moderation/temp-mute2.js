module.exports = ({
code: `$sendDM[$timeoutData[userID];{description:<a:pas10:835152237042729040> Your mute time has finished in $serverName[$timeoutData[guildID]]}{color:$getServerVar[hex]}]
$takeRoles[$timeoutData[userID];$getServerVar[muted;$timeoutData[guildID]]]`,
type: 'timeoutCommand'
})
