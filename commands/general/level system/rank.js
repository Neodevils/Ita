module.exports = {
  name:"rank",
  aliases: "level",
  code:`$color[$getServerVar[hex]]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$replaceText[$userAvatar[$mentioned[1;yes]]?size=4096;webp;jpg;-1]&level=$getUserVar[level;$mentioned[1;yes]]&rank=&currentxp=$sub[$getUserVar[xp;$mentioned[1;yes]];35]&nextlevelxp=$getUserVar[req;$mentioned[1;yes]]&previouslevelxp=0&custombg=$getServerVar[custombg]&xpcolor=$getServerVar[hex]&isboosting=false&circleavatar=true]

$footer[$replaceText[$replaceText[%$checkCondition[$username[$mentioned[1;yes]]==$username[$authorID]]%;%true%;You;1];%false%;$username[$mentioned[1;yes]];1] need $sum[$replaceText[$sub[$getUserVar[xp];$getUserVar[req]];-;;1];10] more of xp to level up]

$onlyIf[$isBot[$mentioned[1;yes]]==false;<:dash6:817209859686400000> Umm, why checking bot? OwO]
  `
}
