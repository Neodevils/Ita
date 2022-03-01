module.exports = {
  name: "addemoji",
  aliases: ['emadd','addem'],
  code: `$title[𝗬𝘂𝗽𝗽𝗶**!!**]
  $description[<a:0_exclamation:817219232516669450> Successfully added emoji with \`$message[2]\` name!!]
$color[$getRoleColor[$highestRole[784865728322338816]]]
$addEmoji[https://cdn.discordapp.com/emojis/$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$replaceText[$splitText[3];>;;1];1].$replaceText[$replaceText[$isNumber[$message[1]];true;$toLowercase[$message[3]];1];false;$replaceText[$replaceText[$checkCondition[$replaceText[$splitText[1];<;;1]==a];true;gif;1];false;png;1];1];$message[2]]
$textSplit[$message[1];$replaceText[$replaceText[$isNumber[$message[1]];true; ;1];false;:;1]]


$onlyIf[$charCount[$message[2]]>=2;{description:<:dash6:817209859686400000> **You must put a longer name over than \`2 chars\`**}{color:fcbfcb}]
$onlyForRoles[$getServerVar[owner];$getServerVar[admin];$getServerVar[mod];{description:<a:pas10:835152237042729040> You don't have \`moderator\` role~}{color:fcbfcb}]
$onlyBotPerms[manageemojis;{description:<:dash6:817209859686400000> **I don't have the permission to use this command**}{color:fcbfcb}]
$argsCheck[>2;{title:Oppsie}{description:$getServerVar[prefix]emadd :emoji: <name>.}{color:fcbfcb}]
$onlyIf[$message!=;{title:Ummm...} {description:You didn't enter an emoji and name.}{color:$getServerVar[hex]}]
`
}