module.exports = [{
name: "help", 
type: 'interaction', 
prototype: 'slash', 
code:`
$interactionReply[;{newEmbed:{title:╭・<a:dp_star6:835142297125519420>𓂃Help Menu}{description:Hewwo, $username! You can see any __slash__ commands you want to see in here!₊˚}{thumbnail:$userAvatar[$clientID]}{color:$getServerVar[hex]}
{footer:Requested by $userTag:$authorAvatar}};{actionRow:{selectMenu:click:・Please pick one menu for𓂃help!✦:1:1:false:{selectMenuOptions:・General:0:Get information about general commands!:false:<:ribbon_ita:919704769323474945>}{selectMenuOptions:✦ Economy:1:Economy commands for good & bad people.:false:<:progress_ita:919653811331674202>}{selectMenuOptions:・Dev:2:Check it out? Uhhh-:false:<:code_ita:919653739944607744>}{selectMenuOptions:✦ Manager:5:Those commands only for admins+!:false:<:manager_ita:924572459913592873>}{selectMenuOptions:・Music !!:3:Music commands here, listen yo along with your friends onii chan!:false:<:music_ita:924573629226811403>}{selectMenuOptions:✦ Moderation:4:For server protectors, for my mods uwu:false:<:staff_ita:924572532424704011>}}}{actionRow:{button:close:4:helpmenu_$authorID:no:<a:pas10:835152237042729040>}}]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]

$onlyIf[$guildID!=;{ "embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]`
}, {
name: "click", 
type: 'interaction', 
prototype: "selectMenu", 
code: `$interactionReply[;{newEmbed:{title:୨୧𓂃Welcome︱General Tab}{description:˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ g e n e r a l₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands where you can use commands for yourself & server!*}{field:❝Action:bite, cuddle, feed, fluff, hug, kiss, lick, pat, poke, slap, tickle}{field:❝Server:help, poll, info channel, info member, info role, info server}{field:❝User:afk, avatar}{footer:╭・General﹕Economy﹕Dev﹕Music﹕Manager﹕Moderation}{color:#E2F0CB}};;;;yes]

$onlyIf[$interactionData[values[0]]==0;]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]`
}, {
name: "click", 
type: 'interaction', 
prototype: "selectMenu", 
code: `
$interactionReply[;{newEmbed:{title:⛀𓂃Welcome︱Economy Tab}{description:˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ e c o n o m y₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands where you can get currency!*}
{field:❞General: will be added again soon, cutie..}
{field:❞Currency: soon. . . }
{footer:General﹕╭・Economy﹕Dev﹕Music﹕Managet﹕Moderation}
{color:#FFDAC1};;;;yes]

$onlyIf[$interactionData[values[0]]==1;]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]`
}, {
name: "click", 
type: 'interaction', 
prototype: "selectMenu", 
code: `
$interactionReply[;{newEmbed:{title:᱖𓂃Welcome︱Dev Tab}{description:˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ d e v₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands which is only for my d__eveloper__. And, yah some is for you too!*}
{field:﹫for_you:info bot}
{field:﹫for_dev:eval, update}
{footer:General﹕Economy﹕╭・Dev﹕Music﹕Manager﹕Moderation}
{color:#B5EAD7};;;;yes]

$onlyIf[$interactionData[values[0]]==2;]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]`
}, {
name: "click", 
type: 'interaction', 
prototype: "selectMenu", 
code: `
$interactionReply[;{newEmbed:{title:♯𓂃Welcome︱Music Tab}{description:˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ m u s i c₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands what can be used for listening to music, ~~still  on beta~~. . . ♪～(´ε｀　)*}
{field:♪Functions: play}
{field:♪Beta:music}
{footer:General﹕Economy﹕Dev﹕╭・Music﹕Manager﹕Moderation}
{color:#FFFFFF};;;;yes]

$onlyIf[$interactionData[values[0]]==3;]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]`
}, {
name: "click", 
type: 'interaction', 
prototype: "selectMenu", 
code: `
$interactionReply[;{newEmbed:{title:᱖𓂃Welcome︱Staff Tab}{description:˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ s t a f f₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands what modsies have permission to use commands (>︿< )*}
{field:ꗃSecruity:ban, kick, timeout, unban}
{field:ꗃRole:soon. . .}
{field:ꗃOthers: clean, qotd, set nickname, set slowmode, wyr}
{footer:General﹕Economy﹕Dev﹕Music﹕Manager﹕╭・Moderation}
{color:#C7CEEA};;;;yes]

$onlyIf[$interactionData[values[0]]==4;]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]`
}, {
name: "click", 
type: 'interaction', 
prototype: "selectMenu", 
code: `
$interactionReply[;{newEmbed:{title:🜲𓂃Welcome︱Manager Tab}{description:˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ m a n a g e r₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands what \`managers\` can use!*}
{field:﹠Set Commands:set owner, set admin, set mod, set trainee, set giveaway-dealer, set qotd, set support, set support-off, set slowmode, set nickname, set vent, set vent-off}
{footer:General﹕Economy﹕Dev﹕╭・Manager﹕Music﹕Moderation}
{color:#FFB7B2};;;;yes]

$onlyIf[$interactionData[values[0]]==5;]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]`
}, { 
	type: 'interaction', 
	prototype: 'button', 
	code: `
$interactionDelete
$wait[2s]
$interactionUpdate[<a:dp_star6:835142297125519420> Thanks for using me~]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" :"<a:dp_star6:835142297125519420> Uhm, this is not your button :(","ephemeral" : true,"options" :{"interaction" :true }}]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==helpmenu;]
$suppressErrors
`
}]