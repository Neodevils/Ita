module.exports = [{
name: "shop_menu",
type: 'interaction', 
prototype:'selectMenu', 
code:`$giveRole[$guildID;$authorID;$getServerVar[role1]]

$setUserVar[data;$sub[$getUserVar[data];$getServerVar[price1]]]
$wait[2s]
$interactionReply[;{newEmbed:{title:<:spa_ita:920415421771960361> Thank you, senpai!!}{description:╰・You bought __<@&$getServerVar[role1]>__ role for **$getServerVar[price1] <:branch_ita:921808496767402104> data!**}{color:dabeff}};;;;yes]
	
$onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[role1]]==false;{"content":"<a:dp_star6:835142297125519420> You have already bought the role in shop, don't you remember? -3-","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getUserVar[data;$authorID]>=$getServerVar[price1];{"content":"Need  **$getServerVar[price1]** <:branch_ita:921808496767402104> data to buy this role. . you can ask to your friends send you data!","ephemeral": true, "options":{"interaction" : true}}]
$onlyIf[$getServerVar[role1]!=;{"content":"<a:dp_star6:835142297125519420> Role didn't settled. . .","ephemeral": true, "options": { "interaction" : true }}]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]

$onlyIf[$guildID!=;{"embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==0;]`
}, {
name: "server_shop",
type: 'interaction', 
prototype: 'selectMenu', 
code: `$giveRole[$guildID;$authorID;$getServerVar[role2]]
$setUserVar[data;$sub[$getUserVar[data];$getServerVar[price2]]]
$wait[2s]
$interactionReply[;{newEmbed:{title:<:spa_ita:920415421771960361> Thank you, senpai!!}{description:╰・You bought __<@&$getServerVar[role2]>__ role for **$getServerVar[price2] <:branch_ita:921808496767402104> data!**}{color:dabeff}};;;;yes]

$onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[role2]]==false;{"content":"<a:dp_star6:835142297125519420> You have already bought the role in shop, don't you remember? -3-","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getUserVar[data;$authorID]>=$getServerVar[price2];{"content":"Need  **$getServerVar[price2]** <:branch_ita:921808496767402104> data to buy this role. . you can ask to your friends send you data!","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getServerVar[role2]!=;{"content":"<a:dp_star6:835142297125519420> Role didn't settled. . .","ephemeral": true, "options": { "interaction" : true }}]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]

$onlyIf[$guildID!=;{"embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==1;]`
}, {
name: "server_shop",
type: 'interaction', 
prototype: 'selectMenu', 
code:`$giveRole[$guildID;$authorID;$getServerVar[role3]]
$setUserVar[data;$sub[$getUserVar[data];$getServerVar[price3]]]
$wait[2s]
$interactionReply[;{newEmbed:{title:<:spa_ita:920415421771960361> Thank you, senpai!!}{description:╰・You bought __<@&$getServerVar[role3]>__ role for **$getServerVar[price3] <:branch_ita:921808496767402104> data!**}{color:dabeff}};;;;yes]

$onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[role3]]==false;{"content":"<a:dp_star6:835142297125519420> You have already bought the role in shop, don't you remember? -3-","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getUserVar[data;$authorID]>=$getServerVar[price3];{"content":"Need  **$getServerVar[price3]** <:branch_ita:921808496767402104> data to buy this role. . you can ask to your friends send you data!","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getServerVar[role3]!=;{"content":"<a:dp_star6:835142297125519420> Role didn't settled. . .","ephemeral": true, "options": { "interaction" : true }}]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]

$onlyIf[$guildID!=;{"embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==2;]`
}, {
name: "server_shop",
type: 'interaction', 
prototype: 'selectMenu', 
code:`$giveRole[$guildID;$authorID;$getServerVar[role4]]
$setUserVar[data;$sub[$getUserVar[data];$getServerVar[price4]]]
$wait[2s]
$interactionReply[;{newEmbed:{title:<:spa_ita:920415421771960361> Thank you, senpai!!}{description:╰・You bought __<@&$getServerVar[role4]>__ role for **$getServerVar[price4] <:branch_ita:921808496767402104> data!**}{color:dabeff}};;;;yes]
$onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[role4]]==false;{"content":"<a:dp_star6:835142297125519420> You have already bought the role in shop, don't you remember? -3-","ephemeral": true, "options":{	"interaction" : true}}]

$onlyIf[$getUserVar[data;$authorID]>=$getServerVar[price4];{"content":"Need  **$getServerVar[price4]** <:branch_ita:921808496767402104> data to buy this role. . you can ask to your friends send you data!","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getServerVar[role4]!=;{"content":"<a:dp_star6:835142297125519420> Role didn't settled. . .","ephemeral": true, "options": { "interaction" : true }}]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]

$onlyIf[$guildID!=;{"embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==3;]`
}, {
name: "server_shop",
type: 'interaction', 
prototype: 'selectMenu', 
code:`$giveRole[$guildID;$authorID;$getServerVar[role5]]
$setUserVar[data;$sub[$getUserVar[data];$getServerVar[price5]]]
$wait[2s]
$interactionReply[;{newEmbed:{title:<:spa_ita:920415421771960361> Thank you, senpai!!}{description:╰・You bought __<@&$getServerVar[role5]>__ role for **$getServerVar[price5] <:branch_ita:921808496767402104> data!**}{color:dabeff}};;;;yes]
$onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[role5]]==false;{"content":"<a:dp_star6:835142297125519420> You have already bought the role in shop, don't you remember? -3-","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getUserVar[data;$authorID]>=$getServerVar[price5];{"content":"Need  **$getServerVar[price5]** <:branch_ita:921808496767402104> data to buy this role. . you can ask to your friends send you data!","ephemeral": true, "options":{"interaction" : true}}]

$onlyIf[$getServerVar[role5]!=;{"content":"<a:dp_star6:835142297125519420> Role didn't settled. . .","ephemeral": true, "options": { "interaction" : true }}]

$onlyBotPerms[externalemojis;{"embeds":"{newEmbed:{description:<a:dp_star6:835142297125519420> I need **\`EXTERNAL_EMOJIS\`** permission.}{color:$getServerVar[hex]}}","ephemeral": "true", "options": {"interaction": true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> I need **\`EMBED_LINKS\`** permission to send embed message.","ephemeral": "true", "options": {"interaction": true}}]

$onlyIf[$guildID!=;{"embeds": "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==4;]`
}]