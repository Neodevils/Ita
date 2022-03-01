module.exports = {
  name:"slowmode",
  code:`
 $author[⸝⸝ Slowmode updated !!;$authorAvatar]
 $description[✎┇The channel is slowmode set to  \`$message\` *!*]
 $footer[let's chill a little bit! ✿]
 $color[$getRoleColor[$highestRole[784865728322338816]]]
$slowmode[$channelID;$messages] 
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role~}{color:$getServerVar[hex]}]
  $onlyIf[$isNumber[$message]==true;{description:Can you enter a number instead a word? owo}{color:$getServerVar[hex]}]
  $onlyIf[$message[1]>=0;{description:please enter a number higher than 0.}{color:$getServerVar[hex]}]
  $onlyIf[$message!=;{description:You didn't enter a number qwq}{color:$getServerVar[hex]}]`
}