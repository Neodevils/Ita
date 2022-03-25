module.exports = [
	{
  	name: "server-shop",
  	type: 'interaction', 
  	prototype: 'slash', 
  	code: `
$interactionReply[;{newEmbed:{author: Role has been added to role shop!!:$authorAvatar}{thumbnail:$userAvatar[$clientID]}{field:slot:<\\:list_ol_ita\\:919866811246334012> $ordinal[$interactionData[options.data[0].options[0].value]]}{field:role name & role mention:<\\:at_ita\\:920668357123006485> $interactionData[options.data[0].options[2].value]﹠<@&$interactionData[options.data[0].options[1].value]>} {field:costs: **$numberSeparator[$interactionData[options.data[0].options[3].value]]** <\\:branch_ita\\:921808496767402104> datas}{field:description:<\\:questioning_ita\\:919675688620019713> $interactionData[options.data[0].options[4].value]}{color:$getServerVar[hex]}}]

$setServerVar[role$interactionData[options.data[0].options[0].value];$interactionData[options.data[0].options[1].value]]

$setServerVar[title$interactionData[options.data[0].options[0].value];$interactionData[options.data[0].options[2].value]]

$setServerVar[description$interactionData[options.data[0].options[0].value];$interactionData[options.data[0].options[4].value]]

$setServerVar[price$interactionData[options.data[0].options[0].value];$interactionData[options.data[0].options[3].value]]

$onlyPerms[admin;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$onlyIf[$guildID!=;{"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]

$log[— $userTag, used Server Shop Add Slash Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyIf[$interactionData[options._subcommand]==add;]
	`
	}, 
	{
  	name: "server-shop",
  	type: 'interaction', 
  	prototype: 'slash', 
  	code: `
$deleteVar[role$interactionData[options.data[0].options[0].value]]

$wait[1s] $deleteVar[title$interactionData[options.data[0].options[0].value]]

$wait[1s]
$deleteVar[description$interactionData[options.data[0].options[0].value]]

$wait[1s]
$deleteVar[price$interactionData[options.data[0].options[0].value]]

$interactionReply[;{newEmbed:{author: Role has removed role shop!!:$authorAvatar}{thumbnail:$userAvatar[$clientID]}{field:slot:<\\:times_ita\\:920648272144629801> $ordinal[$interactionData[options.data[0].options[0].value]] role removed. . .}{color:$getServerVar[hex]}}]

$onlyPerms[admin;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> You are missing **\`ADMINISTRATOR\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$onlyIf[$guildID!=;{"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]

$log[— $userTag, used Server Shop Remove Slash Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]

$onlyIf[$interactionData[options._subcommand]==remove;]
	`
	}
]