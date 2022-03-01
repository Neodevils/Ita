module.exports = {
  name: "qotd", 
  code: `
  $title[*$username* 𝘢𝘴𝘬𝘴 𝘲𝘶𝘦𝘴𝘵𝘪𝘰𝘯 𝘰𝘧 𝘵𝘩𝘦 𝘥𝘢𝘺 ૮꒰˵• ﻌ •˵꒱ა]
$description[
✄ - - - - - - - - - - - - - - - -
> **__Question:__** **$message**
✄ - - - - - - - - - - - - - - - -
。*answers,, 
  ↓ goes ↓
。<#$getServerVar[aotd]>
  channel* *!*
。<a:rolling:817391082789928990>
๑ ꒦︶︶꒷︶︶︶꒷꒦ ɞ]
$color[$getServerVar[hex]]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role to make qotd~}{color:$getServerVar[hex]}]
$onlyIf[$getServerVar[qotd]!=;{description:**Ummm, I guess you haven't settled qotd role.
 <a:dp_star6:835142297125519420> type \`$getServerVar[prefix]set-qotd @role\` to set it**}{color:$getServerVar[hex]}]
$onlyIf[$getServerVar[aotd]!=;{description:**Ummm, I guess you haven't settled channel in message too.
 <a:dp_star6:835142297125519420> type \`$getServerVar[prefix]set-aotd #channel\` to set it**}{color:$getServerVar[hex]}]
$thumbnail[https://cdn.discordapp.com/emojis/784922236083241020.gif?size=4096]
$addReactions[<a:pbaRoll:817219188203847681>]
$deletecommand
<@&$getServerVar[qotd]> <a:dp_star6:835142297125519420> <#$getServerVar[aotd]>`
}