module.exports = {
  name: "crime",
  type: 'interaction', 
  prototype: 'slash', 
  code: `
$setUserVar[data;$sum[$getUserVar[data];$random[130;950]]]

$interactionReply[;{newEmbed:{description:**꒦︶︶<:team_hacker_ita:937976710744383578>︶︶꒦꒷
      ₊˚ <a:dp_star6:835142297125519420> Let's commit a crime $username. . . :3
      ||$randomText[you robbed a bank and earned <:branch_ita:921808496767402104>;you stole good of amount itoins on restaurant and it was <:branch_ita:921808496767402104>;you pickpocketed with great stealth but only picked up <:branch_ita:921808496767402104>;you tried to steal from someone, but at least you found some on the ground :O and it was <:branch_ita:921808496767402104>] $random[130;950] datas!|| <a:dp_star6:835142297125519420> 
      ╭━━━━━━━━━━━━╯
      ╰──➢__\`now you have \`__<:branch_ita:921808496767402104>__\`$numberSeparator[$getUserVar[data]]\`__
      · ─────── ·𖥸· ─────── ·**}{color:dabeff}};{actionRow:{button:$random[130;950] datas!:4:disabled_0:true:<:evil_ita:919836869263515678>}{button::2:disabled_1:true:<:infinity_ita:920415342742888508>}}]
  
$cooldown[30m;{"embeds": "{newEmbed:{description:<a:dp_star6:835142297125519420> Let's wait **%time%** for next crime. . . <:team_hacker_ita:937976710744383578>}{color:ffaaaa}}", 
"ephemeral": true, "options":{"interaction" : true}}]

$onlyBotPerms[embedlinks;{"content":"<a:dp_star6:835142297125519420> ⨯ Uhh... I need \`EMBED_LINKS\` permission.","options":{"interaction" : true}}]

$onlyIf[$guildID!=;{"embeds" : "{newEmbed:{description: <a:dp_star6:835142297125519420> This application command doesn't work in dm <a:bun_question:817219210279256066>}{color:$getServerVar[hex]}}","options" : {"interaction" : true}}]

$log[— $userTag, used Crime Slash Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]
  `
}