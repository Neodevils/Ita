module.exports ={
  name: "wyr", 
  code:`$onlyIf[$splitText[2]!=;{description:<a:dp_star6:835142297125519420> Usage: \`k.wur question/option 1/option 2\`}{color:$getServerVar[hex]}{suppress:yes}]
  $channelSendMessage[$channelID;{description:˚｡ *╭ <a:dp_star6:835142297125519420> ₊˚✿ would you rather ₊˚✿੭ <a:dp_star6:835142297125519420> ʕ · ﻌ · ʔ
<a:pas10:835152237042729040>  ┊ <:dash6:817209859686400000> Question: **Would you rather...**
๑ ꒦︶︶꒷︶︶︶꒷꒦ ɞ
 <:stars:843223804447686696> ┊。<:br_number_1:837050777129451550> $splitText[1]
 ┊or
 <:stars:843223804447686696> ┊。<\:y_number_2\:837050845325426729> $splitText[2]
 
୨୧ ━ ━ ━ ━ ━ <:strawberry:843222396424945694> ━ ━ ━ ━ ━ ୨୧}
{footer:$username asked:$authorAvatar}
{timestamp}
{color:$getServerVar[hex]}
{reactions:<:br_number_1:837050777129451550>,<:y_number_2:837050845325426729>}]
$textSplit[$message;/]
$deletecommand
$argsCheck[>2;{description:<:strawberry:843222396424945694> Hewwo! We use this command like. . .
> $getServerVar[prefix]wur option1 / option2}{color:$getServerVar[hex]}]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];$getServerVar[trainee];{description:<a:pas10:835152237042729040> You don't have a staff role~}{color:$getServerVar[hex]}
$onlyBotPerms[addreactions;I dont have permission to add reactions :(]`
}