module.exports = {
name: "avatar", 
type: 'interaction', 
prototype: 'slash', 
code: `$interactionReply[;{newEmbed:{author:$userTag[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]}{title:・┈┈・・<:user_circle_ita:919884479420575784>・・┈┈・}{description:[─﹕๑ Profile Avatar Link]($userAvatar[$replaceText[$interactionData[options.data[0].value];undefined;$authorID]])}{color:$getServerVar[hex]}{image:$memberAvatar[$guildID;$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]}}]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]

$onlyIf[$guildID!=;{"embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]`
}
