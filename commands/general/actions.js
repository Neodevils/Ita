module.exports = [{
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username slaps $username[$slashOption[cutie]] ╥﹏╥:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/slap;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{
"embeds":"{newEmbed:{author:Uhh, I'm sorri for slap!:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/slap;url]}}",
"options":{
"interaction": true
}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==slap;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username pokes $username[$slashOption[cutie]] 👀:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/poke;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author: ◡̈⋆🄷🄴🅈(●’◡’●)ﾉ:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/poke;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==poke;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username pats $username[$slashOption[cutie]] ≧﹏≦:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/pat;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author: Pat, pat, pat UwU:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/pat;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==pat;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username kisses $username[$slashOption[cutie]] (๑•ᴗ•๑)♡:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/kiss;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author: Mwwwah! (*´˘\`*)♡:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/kiss;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==kiss;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username hugs $username[$slashOption[cutie]] ヾ(＾-＾)ノ:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$randomText[$jsonRequest[https://nekos.life/api/v2/img/cuddle;url];$jsonRequest[https://nekos.life/api/v2/img/hug;url]]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author: Come here dear ヾ(´︶\`♡)ﾉ:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/cuddle;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==hug;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username becomes master of $username[$slashOption[cutie]] '^':$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/ngif;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author: Nya nya!:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/ngif;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==neko;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username smugs at $username[$slashOption[cutie]]:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/smug;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author: Ehehe!:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/smug;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==smug;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]] bakaa!:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/baka;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author: $username-chan is baka!:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.life/api/v2/img/baka;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==baka;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]] yamete kudasai!~:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/blush;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:Eh ettoo-:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/blush;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==blush;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]] me bored (´。＿。｀):$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/bored;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:Hmm...:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/bored;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==bored;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]]:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/dance;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:Dance and shake some booties!:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/dance;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==dance;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username criess.. ˚‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/cry;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:You're making me cry too (｡ﾉωﾉ)!:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/cry;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==cry;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]]..:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/facepalm;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:$username.:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/facepalm;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==facepalm;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username is ◡̈⋆ⒽⒶⓅⓅⓎ☺:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/happy;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:$username yay!:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/happy;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==happy;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username $username[$slashOption[cutie]] 🤭 it was nice!:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/highfive;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:$username niceee:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/highfive;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==highfive;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]] HAHAHAHAHA:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/laugh;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:So funny ahhahahaha:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/laugh;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==laugh;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]] hmph! ʕ – o – ʔ:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/pout;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:Hmph!:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/pout;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==pout;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]] idk ʕ •ᴥ•ʔ:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/shrug;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:Eh, I don't know neither-:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/shrug;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==shrug;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]] hhhhh you're so cute:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/smile;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:I do love your smile, $username ʕ*ﾉᴥﾉʔ:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/smile;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==smile;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]], me goes sleep:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/sleep;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:let's sleep, $username..:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/sleep;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==sleep;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]], I smell sussy in here~:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/stare;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:Hummm...:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/stare;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==stare;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]]? What? :$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/think;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:Hmmm... No, uh I don't have any idea $username, what about you?:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/think;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==think;]
`
}, {
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username[$slashOption[cutie]], hi! Hi! (●’◡’●)ﾉ:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/wave;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:Halloooo!:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/wave;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==wave;]
`
},{
name: "actions", 
type: 'interaction',
prototype: 'slash', 
code: `
$interactionReply[<@$slashOption[cutie]>;{newEmbed:{author:$username bites $username[$slashOption[cutie]] OwO:$authorAvatar}{thumbnail:$userAvatar[$slashOption[cutie]]}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/bite;url]}};;;users]

$onlyIf[$interactionData[options.data[1].value]!=undefined;{"embeds":"{newEmbed:{author:AAAAAAAAAAAAA!!:$userAvatar[$clientID]}{thumbnail:$authorAvatar}{color:$getServerVar[hex]}{image:$jsonRequest[https://nekos.best/api/v1/bite;url]}}", "options":{"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]
$onlyIf[$guildID!=;{ "embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}", "options": {"interaction": true}}]

$onlyif[$interactionData[options.data[0].value]==bite;]
`
}]