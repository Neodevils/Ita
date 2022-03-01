module.exports = {
  name:"clear",
  aliases:['purge','prune'],
  code:`
$clear[$sum[1;$message[1]]]
  $title[ᘏ⑅ᘏ Messages Deleted ᘏ⑅ᘏ]
$color[$getRoleColor[$highestRole[784865728322338816]]]
$description[<a:ep_arrow1:817209855479644160> **$username** purged 𐚱 **\`$message\`** messages!!]
$footer[⩨$message messages purged!!𖤐]
$deleteIn[10s]
$suppressErrors[**Umm..**]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role~}{color:$getServerVar[hex]}]
$onlyIf[$isNumber[$message]==true;{description:<:dash5:817209872990076982> \`Can you enter a number instead a word? owo\`}{color:$getServerVar[hex]}]
  $onlyIf[$message[1]>=0;{description:<:dash5:817209872990076982>  \`Please enter a number higher than 0\`}{color:$getServerVar[hex]}]
  $onlyIf[$message!=;{description:<:dash5:817209872990076982> \`You need to add a certain amount of messages to be deleted!!\`}{color:$getServerVar[hex]}]`
}