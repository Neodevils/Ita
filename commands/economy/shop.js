module.exports = {
	name: "shops",
  type: 'interaction', 
  prototype: 'slash',   
  $if: 'v4', 
  code: `
$interactionReply[;{newEmbed:{author:୨ Role Shopsu!! ෆ:$userAvatar[$clientID]}{color:dabeff}{thumbnail:$serverIcon}{description:
    <:data_base_ita:947592146284867596> Server Shop <:data_base_ita:947592146284867596>
    > <:dash_alt3_ita:919705668494176298> Hello, Senpai!
    > **Welcome to __\`$serverName\`__'s role shop!**
    > *You can buy settled roles in this shop! <:spa_ita:920415421771960361>*
    
    **__<:spa_ita:920415421771960361> | How to buy roles?__**
    You can buy roles with menu, easy right? I know, I know hhh}
    
$if[$getServerVar[role1]!=]
{field:<\\:br_number_1\\:837050777129451550>꒱꒱ $getServerVar[title1]:
    > $getServerVar[description1]
    > <a\\:dp_star6\\:835142297125519420>┈×┈×┈<:ribbon_ita:919704769323474945>┈×┈×┈<a\\:dp_star6\\:835142297125519420>
    > Role ⸼ ۫  ꒰\\: <:dash_ita:919491119107158036> <@&$getServerVar[role1]>
    > Price ⸼ ۫ ꒰\\: <\\:branch_ita\\:921808496767402104> $numberSeparator[$getServerVar[price1]] data}
$endIf
    
$if[$getServerVar[role2]!=]
{field:<\\:br_number_2\\:837050780959375391>꒱꒱ $getServerVar[title2]:
    > $getServerVar[description2]
    > <a\\:dp_star6\\:835142297125519420>┈×┈×┈<:ribbon_ita:919704769323474945>┈×┈×┈<a\\:dp_star6\\:835142297125519420>
    > Role ⸼ ۫  ꒰: <:dash_ita:919491119107158036> <@&$getServerVar[role2]>
    > Price ⸼ ۫ ꒰: <\\:branch_ita\\:921808496767402104> $numberSeparator[$getServerVar[price2]] data}
$endIf
    
$if[$getServerVar[role3]!=]
{field:<\\:br_number_3\\:837050785875361822>꒱꒱ $getServerVar[title3]:
    
    > $getServerVar[description3]
    > <a\\:dp_star6\\:835142297125519420>┈×┈×┈<:ribbon_ita:919704769323474945>┈×┈×┈<a\\:dp_star6\\:835142297125519420>
    > Role ⸼ ۫  ꒰: <:dash_ita:919491119107158036> <@&$getServerVar[role3]>
    > Price ⸼ ۫ ꒰: <\\:branch_ita\\:921808496767402104> $numberSeparator[$getServerVar[price3]] data}
$endIf
    
$if[$getServerVar[role4]!=]
{field:<\\:br_number_4\\:837050797857964072>꒱꒱ $getServerVar[title4]:
    
    > $getServerVar[description4]
    > <a\\:dp_star6\\:835142297125519420>┈×┈×┈<:ribbon_ita:919704769323474945>┈×┈×┈<a\\:dp_star6\\:835142297125519420>
    > Role ⸼ ۫  ꒰: <:dash_ita:919491119107158036> <@&$getServerVar[role4]>
    > Price ⸼ ۫ ꒰: <\\:branch_ita\\:921808496767402104> $numberSeparator[$getServerVar[price4]] data}
$endIf
    
$if[$getServerVar[role5]!=]
{field:<\\:br_number_5\\:837050801661673493>꒱꒱ $getServerVar[title5]:
    > $getServerVar[description5]
    > <a\\:dp_star6\\:835142297125519420>┈×┈×┈<:ribbon_ita:919704769323474945>┈×┈×┈<a\\:dp_star6\\:835142297125519420>
    > Role ⸼ ۫  ꒰: <:dash_ita:919491119107158036> <@&$getServerVar[role5]>
    > Price ⸼ ۫ ꒰: <\\:branch_ita\\:921808496767402104> $numberSeparator[$getServerVar[price5]] data}
$endIf
{footer:$userTag, you have $numberSeparator[$getUserVar[data]] data!:$authorAvatar}{timestamp}};{actionRow:{selectMenu:shop_menu:・Which role would you like to𓂃buy? ´ ˘ \`:1:1:false:{selectMenuOptions:$getServerVar[title1]:shop0:$getServerVar[description1]:false:<:br_number_1:837050777129451550>}{selectMenuOptions:$getServerVar[title2]:shop1:$getServerVar[description2]:false:<:br_number_2:837050780959375391>}{selectMenuOptions:$getServerVar[title3]:shop2:$getServerVar[description3]:false:<:br_number_3:837050785875361822>}{selectMenuOptions:$getServerVar[title4]:shop3:$getServerVar[description4]:false:<:br_number_4:837050797857964072>}{selectMenuOptions:$getServerVar[title5]:shop4:$getServerVar[description5]:false:<:br_number_5:837050801661673493>}}}]
    
$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$onlyIf[$guildID!=;{"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]

$log[— $userTag, used Shop Slash Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]
	`
}