module.exports = {
  name:"gamble",
  code:`$color[$getServerVar[hex]]
  $description[**⸝⸝╰・୨୧ ˖˚ʚ <a:dp_star6:835142297125519420> ・ You played gamble and. . .
  ・┈・┈・┈・┈・┈・⌒⌒ ˚₊﹆ <a:pas10:835152237042729040>**
||**$replaceText[$replaceText[$randomText[wow;go];wow; you won <a:strawwy:861057831712980992> $multi[$message[1];2];25];go; you lost <a:strawwy:861057831712980992> $message[1];50]**||]
  $setGlobalUserVar[pocket;$replaceText[$replaceText[$randomText[wow;go];wow;$sum[$getGlobalUserVar[pocket;$authorID];$multi[$message[1];2]];25];go;$sub[$getGlobalUserVar[pocket;$authorID];$message[1]];50];$authorID]
  $footer[$userTag[$authorID];$authorAvatar]
  $onlyIf[$message[1]<=$getGlobalUserVar[pocket;$authorID];{description:You don't have enough money :(}{color:$getServerVar[hex]}]
  $onlyIf[$isNumber[$message[1]]!=false;{description:<a:dp_star6:835142297125519420> Please enter number uwu}{color:$getServerVar[hex]}]
  $onlyIf[$message[1]>0;{description:・0 or more than zero? Uhhhh}{color:$getServerVar[hex]}]
  $globalCooldown[5s;{description:<:dash6:817209859686400000>** Please wait %time% you are so fast owo**}{color:$getServerVar[hex]}]
  `
}