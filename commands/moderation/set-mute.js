module.exports = {
  name:"set-mute",
  aliases: ["setmuterole"],
  code:`
  $title[Mute role has been updated!]
  $description[*・New muted role settled to \`\`\`$roleName[$mentionedRoles[1]]\`\`\` !*]
  $color[$getServerVar[hex]]
  $onlyIf[$roleExists[$findRole[$message[1]]]==true;{description:<:dash6:817209859686400000> This role doesn't exist}{color:$getServerVar[hex]}]
  
  $setServerVar[muted;$mentionedRoles[1]]
  $onlyBotPerms[admin;{description:<a:dp_star6:835142297125519420> Can you give me \`ADMIN\` permission? owo it's missing.}{color:$getServerVar[hex]}]
  $onlyPerms[admin;{description:<a:dp_star6:835142297125519420> Only \`ADMIN\` can set-mute.}{color:$getServerVar[hex]}]
  $onlyIf[$message[1]!=;{description:**✿ Mention a role~**}{color:$getServerVar[hex]}]
  `
}