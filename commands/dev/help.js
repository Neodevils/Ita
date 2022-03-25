module.exports = [
	{
		name: "help", 
		type: 'interaction', 
		prototype: 'slash', 
		code:`
$interactionFollowUp[;{newEmbed:{title:╭・<a:dp_star6:835142297125519420>𓂃Help Menu}{description:Hewwo, $username! You can see any __slash__ commands you want to see in here!₊˚}{thumbnail:$userAvatar[$clientID]}{color:$getServerVar[hex]}
{footer:Requested by $userTag:$authorAvatar}};{actionRow:{selectMenu:helpMenu:・Please pick one menu for𓂃help!✦:1:1:false:{selectMenuOptions:・General:help0:Get information about general commands!:false:<:ribbon_ita:919704769323474945>}{selectMenuOptions:✦ Economy:help1:Economy commands for good & bad people.:false:<:progress_ita:919653811331674202>}{selectMenuOptions:・Dev:help2:Check it out? Uhhh-:false:<:code_ita:919653739944607744>}{selectMenuOptions:✦ Manager:help5:Those commands only for admins+!:false:<:manager_ita:924572459913592873>}{selectMenuOptions:・Music !!:help3:Music commands here, listen yo along with your friends onii chan!:false:<:music_ita:924573629226811403>}{selectMenuOptions:✦ Staff:help4:For server protectors, for my mods uwu:false:<:staff_ita:924572532424704011>}}}{actionRow:{button:close:4:helpButton_$authorID:no:<a:pas10:835152237042729040>}}]

$interactionDefer

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$onlyIf[$guildID!=;{"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]

$log[— $userTag, used Help Slash Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]
`
	}, 
	{
		name: "helpMenu", 
		type: 'interaction', 
		prototype: "selectMenu", 
		code: `
$interactionReply[;{newEmbed:{title:୨୧𓂃Welcome︱General Tab}{description:˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ g e n e r a l₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands where you can use commands for yourself & server!*}{field:❝Action:bite, cuddle, feed, fluff, hug, kiss, lick, pat, poke, slap, tickle}{field:❝Server:help, poll, info channel, info member, info role, info server}{field:❝User:afk, avatar, icon sfw ( not stable #COLON#/ ) }
{field:❝18+... NSFW OwO not for minors:||ero, icon nsfw ( not stable #COLON#/ )||}{footer:╭・General﹕Economy﹕Dev﹕Music﹕Manager﹕Moderation}{color:#E2F0CB}};;;;yes]

$onlyIf[$interactionData[values[0]]==help0;]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$log[— $userTag, used Help/General Select Menu Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]
`
	}, 
	{
		name: "helpMenu", 
		type: 'interaction', 
		prototype: "selectMenu", 
		code: `
$interactionReply[;{newEmbed:{title:⛀𓂃Welcome︱Economy Tab}{description:˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ e c o n o m y₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands where you can get currency!*}
{field:❞General: profile}
{field:❞Currency: crime, daily, hack}
{footer:General﹕╭・Economy﹕Dev﹕Music﹕Managet﹕Moderation}
{color:#FFDAC1};;;;yes]

$onlyIf[$interactionData[values[0]]==help1;]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$log[— $userTag, used Help/Economy Select Menu Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]`
	}, 
	{
		name: "helpMenu", 
		type: 'interaction', 
		prototype: "selectMenu", 
		code: `
$interactionReply[;{newEmbed:{title:᱖𓂃Welcome︱Dev Tab}{description:˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ d e v₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands which is only for my d__eveloper__. And, yah some is for you too!*}
{field:﹫for_you:info bot}
{field:﹫for_dev:eval, update}
{footer:General﹕Economy﹕╭・Dev﹕Music﹕Manager﹕Moderation}
{color:#B5EAD7};;;;yes]

$onlyIf[$interactionData[values[0]]==help2;]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$log[— $userTag, used Help/Dev Select Menu Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]`
	}, 
	{
		name: "helpMenu", 
		type: 'interaction', 
		prototype: "selectMenu", 
		code: `
$interactionReply[;{newEmbed:{title:♯𓂃Welcome︱Music Tab}{description:˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ m u s i c₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands what can be used for listening to music, ~~still  on beta~~. . . ♪～(´ε｀　)*}
{field:♪Functions: play, music ( UI #COLON#3 )}
{footer:General﹕Economy﹕Dev﹕╭・Music﹕Manager﹕Moderation}
{color:#FFFFFF};;;;yes]

$onlyIf[$interactionData[values[0]]==help3;]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$log[— $userTag, used Help/Music Select Menu Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]`
	}, 
	{
		name: "helpMenu", 
		type: 'interaction', 
		prototype: "selectMenu", 
		code: `
$interactionReply[;{newEmbed:{title:᱖𓂃Welcome︱Staff Tab}{description:˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ s t a f f₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands what modsies have permission to use commands (>︿< )*}
{field:ꗃSecruity:ban, kick, timeout, unban}
{field:ꗃRole:soon. . .}
{field:ꗃOthers: clean, giveaway, qotd, set nickname, set slowmode, wyr}
{footer:General﹕Economy﹕Dev﹕Music﹕Manager﹕╭・Moderation}
{color:#C7CEEA};;;;yes]

$onlyIf[$interactionData[values[0]]==help4;]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$log[— $userTag, used Help/Staff Select Menu Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]`
	}, 
	{
		name: "helpMenu", 
		type: 'interaction', 
		prototype: "selectMenu", 
		code: `
$interactionReply[;{newEmbed:{title:🜲𓂃Welcome︱Manager Tab}{description:˚｡ *╭ <a:pas10:835152237042729040> ₊˚✿ m a n a g e r₊˚✿੭  ʕ · ﻌ · ʔ ┊ __Information:__ *Here is the commands what \`managers\` can use!*}
{field:﹠Set Commands:set owner, set admin, set mod, set trainee, set qotd, set support, set support-off, set slowmode, set nickname, set vent, set vent-off}
{footer:General﹕Economy﹕Dev﹕╭・Manager﹕Music﹕Moderation}
{color:#FFB7B2};;;;yes]

$onlyIf[$interactionData[values[0]]==help5;]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$log[— $userTag, used Help/Manager Select Menu Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]`
	}, 
	{ 
		type: 'interaction', 
		prototype: 'button', 
		code: `
$interactionDelete
$wait[2s]
$interactionUpdate[<a:dp_star6:835142297125519420> Thanks for using me~]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content" :"<a:dp_star6:835142297125519420> Uhm, this is not your button :(","ephemeral" : true,"options" :{"interaction" :true }}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==helpButton;]

$log[— $userTag, used Help Close Button Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]
`
	}
]