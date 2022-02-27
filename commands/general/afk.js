module.exports = [{
name: "afk",
type: 'interaction', 
prototype: 'slash', 
code: `
$setGlobalUserVar[afk;evet]
$setGlobalUserVar[afks;$interactionData[options.data[0].value]]
$setGlobalUserVar[afkss;$dateStamp]

$interactionReply[;{newEmbed:{author:$userTag:$authorAvatar}
{description:<:check_ita:919876223914614784> you set yourself to afk status. . .
||<:dash_alt1_ita:919705426398941274> afk reason⁀➷\`$interactionData[options.data[0].value]\`||}{color:$getServerVar[hex]}
{footer:— when did I become afk?⁀➷}{timestamp}}]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]

$onlyIf[$guildID!=;{"embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]`
}, {
    name: "$alwaysExecute",
    code: `$deleteIn[7s]
	
$setGlobalUserVar[afkaa;$userTag[$authorID];$mentioned[1;no]]
$setGlobalUserVar[afkmm;$sum[$getGlobalUserVar[afkmm;$mentioned[1;no]];1];$mentioned[1;no]]

$reply[$messageID;yes]
$description[1;<:exclamation_ita:919876276788015115> hey cutie, the member you pinged is afk,, 
**__their reason is__**
> \`$getGlobalUserVar[afks;$mentioned[1;no]]\`
<a:exclamation_gif_ita:864997251932094514> the member you have mentioned, afk for \`$parseDate[$sub[$dateStamp;$getglobaluservar[afkss;$mentioned[1;no]]];time]\`-]
$color[1;$getServerVar[hex]]
    
$suppressErrors
$onlyIf[$getGlobalUserVar[afk;$mentioned[1;no]]==evet;]`
}, {
  name: "$alwaysExecute",
  code: `$deleteIn[9s]
$deleteVar[afk;$authorID]
$deleteVar[afkaa;$authorID]
$deleteVar[afkmm;$authorID]
$deleteVar[afks;$authorID]
$deleteVar[afkss;$authorID]
$wait[1s]

$description[1;<:check_ita:919876223914614784> succesfully removed afk status!
||Total, you have been afk for \`$parseDate[$sub[$dateStamp;$getglobaluservar[afkss]];time]\`.
<:dash_alt5_ita:919705882114273360> **your old afk reason was・\`$getGlobalUserVar[afks]\`.**
<:dash_alt1_ita:919705426398941274> while you are afk・you have been mentioned \`$getGlobalUserVar[afkmm]\` times.
<:dash_alt2_ita:919705571177934888> the member mentioned you last time・\`$getGlobalUserVar[afkaa]\`||]
$color[1;$getServerVar[hex]]

$onlyIf[$getGlobalUserVar[afk;$authorid]==evet;]

$suppressErrors`
}]
