  module.exports = {
  name:"set-confess",
  aliases: ["setconfesschan"],
  code:`
  $title[Confession channel as been updated!]
  $description[*・New confession channel settled to \`\`\`$channelName[$mentionedChannels[1]]\`\`\` !*]
  $color[$getRoleColor[$highestRole[784865728322338816]]]
  $onlyIf[$channelExists[$findChannel[$message[1]]]==true;{description:<:dash6:817209859686400000> This channel doesn't exist}{color:$getServerVar[hex]}]
  
  $setServerVar[confess;$mentionedChannels[1]]
  $onlyBotPerms[admin;{description:<a:dp_star6:835142297125519420> Can you give me \`ADMIN\` permission? owo it's missing.}{color:$getServerVar[hex]}]
  $onlyPerms[admin;{description:<a:dp_star6:835142297125519420> Only \`ADMIN\` can set-confess.}{color:$getServerVar[hex]}]
  $onlyIf[$message[1]!=;{description:**✿ Mention a channel~**}{color:$getServerVar[hex]}]
  `
}