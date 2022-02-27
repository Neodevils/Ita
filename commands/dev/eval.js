module.exports = [{
	name: "eval",
	code: `mhmm

$eval[$message]

$onlyForIDs[$botOwnerID;]`
}, {
  name: "eval",
  type: 'interaction', 
  prototype: 'slash', 
  code: `
$interactionReply[$eval[$replaceText[$slashOption[code];undefined;Uhm.. etto, eval when? OwO];yes;yes;yes;yes]]

$onlyForIDs[285118390031351809;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... You're not my daddy 👀","options":{"interaction" : true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$onlyIf[$guildID!=;{ "embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]
`
}]
    
