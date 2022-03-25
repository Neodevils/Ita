module.exports = {
  name:"update",
  type: 'interaction', 
  prototype: 'slash', 
  code:`
$updateCommands

$wait[100ms]

$interactionReply[<a:dp_star6:835142297125519420> *Updated the commands.*;;;;;yes]

$onlyForIDs[285118390031351809;721032593511940177;{"content":"I said only for **__Neo__** the bot owner though, which part you didn't understand...","ephemeral":"true", "options":{"interaction" : true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$onlyIf[$guildID!=;{"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]

$log[— $userTag, used Update Slash Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]
`
}