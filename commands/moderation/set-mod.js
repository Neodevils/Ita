module.exports = {
  name:"set-mod",
  aliases: ["setmodrole"],
  code:`
  $title[Moderator role has been updated!]
  $description[*・New mod role settled to \`\`\`$roleName[$mentionedRoles[1]]\`\`\` !*]
  $color[$getRoleColor[$highestRole[784865728322338816]]]
  $onlyIf[$roleExists[$findRole[$message[1]]]==true;{description:<:dash6:817209859686400000> This role doesn't exist}{color:$getServerVar[hex]}]
  
  $setServerVar[mod;$mentionedRoles[1]]
  $onlyBotPerms[admin;{description:<a:dp_star6:835142297125519420> Can you give me \`ADMIN\` permission? owo it's missing.}{color:$getServerVar[hex]}]
  $onlyPerms[admin;{description:<a:dp_star6:835142297125519420> Only \`ADMIN\` can set-mod.}{color:$getServerVar[hex]}]
  $onlyIf[$message[1]!=;{description:**✿ Mention a role~**}{color:$getServerVar[hex]}]
  `
}