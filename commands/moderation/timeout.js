module.exports = {
  name:"timeout",
  type: 'interaction', 
  prototype: 'slash', 
  code:`
$interactionreply[;{newEmbed:{author:Shhhh!:$authorAvatar}{thumbnail:$userAvatar[$interactionData[options.data[0].value]]}{description:**<\\:times_ita\\:920648272144629801> ┇ $username[$authorID] timeouted $userTag[$interactionData[options.data[0].value]] *!* pwease keep the channel safe. . ₊˚**}
{field:๑ time:<\\:time_ita\\:919653609581457488> <t:$truncate[$divide[$get[time];1000]]:R>}{field:﹠reason: <:pen_ita:919866873816952852> $replaceText[$interactionData[options.data[3].value];undefined;No reason given!!]}{color:$getServerVar[hex]}]

$let[time;$timeoutMember[$guildId;$interactionData[options.data[0].value];$interactionData[options.data[1].value]$interactionData[options.data[2].value];yes;$replaceText[$interactionData[options.data[3].value];undefined;No reason given!!]]]

$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$interactionData[options.data[0].value]]];{
  "embeds":"{newEmbed:{description:<a:pas10:835152237042729040> That user is higher than me on role position}{color:$getServerVar[hex]}},
		"options":{
			"interaction" : true
		}
}]

	$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$interactionData[options.data[0].value]]];{
		"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> That user is higher than you on role position.}{color:$getServerVar[hex]}}",
		"options":{
			"interaction" : true
		}
}]

$onlyForRoles[$getServerVar[ownerRole];$getServerVar[adminRole];$getServerVar[modRole];$getServerVar[traineeRole];{
	"embeds":"{newEmbed:{description:<a:pas10:835152237042729040> You don't have any \`STAFF\` role~}{color:$getServerVar[hex]}}",
	"options":{
		"interaction" : true
}
}]

	$onlyBotPerms[externalemojis;{
	"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}",
	"options":{
			"interaction" : true
		}
}]

	$onlyBotPerms[embedlinks;{
	"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.",
	"options":{
			"interaction" : true
		}
}]

$onlyIf[$guildID!=;{ 
"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}",
"options" : {
"interaction" : true
    }
}]`
}

