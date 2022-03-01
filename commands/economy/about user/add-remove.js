module.exports = {
  name:"stawwy",
  code:`
  $author[Done $userTag;$authorAvatar]
  $description[
୨ <:strawberry:843222396424945694> ୧ **Stawwy** — \`$message[3]\`
 
୨ <a:pas10:835152237042729040> ୧ **User** — \`$userTag[$mentioned[1]]\`

୨ <a:dp_star6:835142297125519420> ୧ **Type** — \`$message[1]\`]
$addTimeStamp
 $color[$getServerVar[hex]]
  $setGlobalUserVar[pocket;$replaceText[$replaceText[$message[1];give;$sum[$getGlobalUserVar[pocket;$mentioned[1]];$message[3]];-1];take;$sub[$getGlobalUserVar[pocket;$mentioned[1]];$message[3]];-1];$mentioned[1]]
   $onlyIf[$mentioned[1]!=;{description: <a:pas10:835152237042729040> Try to mention someone too and then add amount of strawwies!}{color:$getServerVar[hex]}]
  $onlyIf[$checkContains[$message[1];give;take]!=false;{description:<a:dp_star6:835142297125519420> Sorry variable should be "give/take"}{color:$getServerVar[hex]}]
  $onlyIf[$message[3]!=;{description:<a:dp_star6:835142297125519420> Usage \`$getServerVar[prefix]give/take @user <amount>\`}{color:$getServerVar[hex]}]
  $onlyForIDs[285118390031351809;]
`
}