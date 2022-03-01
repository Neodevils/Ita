module.exports = {
  name:"play",
  aliases: ['p'], 
  code:`$suppressErrors[{title:Oppsie!!}{description:Please contract with bot developer.}]
$author[┊ Your Music has started to play!;$authorAvatar]
$description[**・“$get[song]” has added to queue!**
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
$addField[$customEmoji[dp_star6] Played by;$userTag]
$let[song;$playSong[$message;1m;{title:Error}{description:**<a:dp_star6:835142297125519420> There was an error while making a request qwq**}{footer:Can you be more clearly? uwu}{color:$getServerVar[hex]}]]
$color[$getServerVar[hex]]
$onlyIf[$voiceID!=;{description:You have to join to a voice channel}{color:$getServerVar[hex]}]
$argsCheck[>1;{title:Umm...}{description:Please enter a song name}{color:$getServerVar[hex]}]
$addReactions[<a:0_heartpixel:817391060774682666>]`
}
